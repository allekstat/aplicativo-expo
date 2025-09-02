import { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { Redirect } from 'expo-router';
import { useAuth } from '@/services/auth/useAuth'
export default function SignIn()
{
    const {signIn, user, loading} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitting, setSubmitting] = useState(false);
    if (!loading && user)
    {
        return <Redirect href='/(app)' />
    }
    const handleSubmit = async () =>
    {
        try
        {
            setSubmitting(true);
            await signIn(email.trim().toLowerCase(), password);
        }
        catch (e: any)
        {
            Alert.alert('falha no login', e?.response?.data?.message ?? 'verifique suas credenciais');
        }
        finally
        {
            setSubmitting(false);
        }
    }
    return (
        <View style={{flex: 1, padding: 24, justifyContent: 'center', gap: 12}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>entrar</Text>
            <TextInput placeholder='e-mail' autoCapitalize='none' autoCorrect={false} keyboardType='email-address' value={email} onChangeText={setEmail} style={{borderWidth: 1, padding: 12, borderRadius: 8}}/>
            <TextInput placeholder='senha' secureTextEntry value={password} onChangeText={setPassword} style={{borderWidth: 1, padding: 12, borderRadius: 8}}/>
            <Button title={submitting ? 'entrando...' : 'entrar'} onPress={handleSubmit} disabled={submitting}/>
        </View>
    );
}