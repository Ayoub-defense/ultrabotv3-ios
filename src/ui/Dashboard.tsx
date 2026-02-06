import React from 'react';
import { View } from 'react-native';
import AgentCard from './AgentCard';

export default function Dashboard() {
  return (
    <View style={{ flex: 1, backgroundColor: '#000', padding: 20 }}>
      <AgentCard title="Motion Sentinel" active />
      <AgentCard title="Network Guardian" active />
      <AgentCard title="Deep Intelligence" active />
    </View>
  );
}
