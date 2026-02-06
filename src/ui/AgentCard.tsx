import React from 'react';
import { View, Text } from 'react-native';
import StatusLED from './StatusLED';

type Props = { title: string; active: boolean };

export default function AgentCard({ title, active }: Props) {
  return (
    <View style={{ padding: 12, backgroundColor: '#111', marginBottom: 10 }}>
      <Text style={{ color: '#fff', fontSize: 16 }}>{title}</Text>
      <StatusLED color={active ? '#0f0' : '#f00'} />
    </View>
  );
}
