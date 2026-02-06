import { SentinelBridge } from './SentinelBridge';
import { logEvent } from '../database/sqlite';

export function bootSentinel(reason: string) {
  logEvent('BOOT', reason);
  SentinelBridge.boot();
}
