import SQLite from 'react-native-sqlite-storage';
import { schema } from './schema';

export const db = SQLite.openDatabase(
  { name: 'sentinel.db', location: 'default' },
  () => db.executeSql(schema)
);

export function logEvent(type: string, message: string) {
  db.executeSql(
    'INSERT INTO logs (type, message, ts) VALUES (?, ?, ?)',
    [type, message, Date.now()]
  );
}
