import { createPool } from 'mysql2';
import { dbConfig } from './dbConfig';

export const dbPool = createPool(dbConfig);
