import React, { useEffect } from 'react';
import Dashboard from './src/ui/Dashboard';
import { bootSentinel } from './src/core/SentinelEngine';

export default function App() {
  useEffect(() => {
    bootSentinel('APP_START');
  }, []);

  return <Dashboard />;
}
