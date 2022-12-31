import * as React from 'react';
import { View, Text } from 'react-native';

export default function Tasks({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Tasks Page</Text>
        </View>
    );
}