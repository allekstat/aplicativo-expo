import React from 'react';
import { Slot, Redirect } from 'expo-router';
import { ActivityIndicator, StyleSheet, View, ViewStyle } from 'react-native';
/// import {useAuth} from '@/services/auth/useAuth;
export default function Componente()
{
    /// const {user, loading} = useAuth();
    const {container} = StyleSheet.create<
    {
        container: ViewStyle;
    }>(
    {
        container:
        {
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center'
        }
    });
    const componente =
    [
        <View style={container}>
            <ActivityIndicator/>
        </View>
    ,
        <Redirect href='/(auth)/login'/>
    ,
        <Slot/>
    ];
    return componente[0];
}