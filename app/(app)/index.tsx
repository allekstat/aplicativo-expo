import React from 'react';
import { Button, StyleSheet, Text, View, ViewStyle } from 'react-native';
/// import {useAuth} from '@/services/auth/useAuth;
export default function Componente()
{
    /// const {user, signOut} = useAuth();
    const {container} = StyleSheet.create<
    {
        container: ViewStyle;
    }>(
    {
        container:
        {
            flex: 1,
            padding: 24,
            justifyContent: 'center',
            gap: 16
        }
    });
    const componente =
    (
        <View style={container}>
            <Text>olá...</Text>
            <Button title='sair' onPress={() => {}}/>
        </View>
    );
    return componente;
}