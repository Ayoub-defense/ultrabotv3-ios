import React from 'react';
import { View } from 'react-native';

type Props = { color: string };

export default function StatusLED({ color }: Props) {
  return (
    <View style={{
      width: 10, height: 10, borderRadius: 5, backgroundColor: color
    }} />
  );
}
