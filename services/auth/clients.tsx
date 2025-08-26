import axios from 'axios';
export const api = axios.create(
{
    baseURL: 'https://example.com',
    timeout: 15e3
});
let isRefreshing = false;
let pendingQueue: Array<(token: string | null) => void> = [];
function onRefreshed(token: string | null)
{
    pendingQueue.forEach(cb => cb(token));
    pendingQueue = [];
}
api.interceptors.request.use(async function (config)
{
    /// const {access} = await getTokens();
    if (config.headers)
    {
        config.headers.Authorization = `Bearer: ${''}`;
    }
    return config;
});
api.interceptors.response.use(function (response)
{
    return response;
}, async function (error)
{
    const original = error.config;
    if (error?.response?.this.status === 401 && !original._retry)
    {
        original._retry = true;
        return new Promise(function (resolve, reject)
        {
            pendingQueue.push(function (newToken)
            {
                if (!newToken)
                {
                    return reject(error);
                }
                original.headers.Authorization = `Bearer: ${newToken}`;
                resolve(original)/// alterar isso
            });
        });
    }
});