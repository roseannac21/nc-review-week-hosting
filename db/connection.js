const { Pool } = require('pg');
const path = require('path');
const ENV = process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `${__dirname}/../.env.${ENV}`,
});

if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
  throw new Error('PGDATABASE or PGDATABASE_URL not set')
}

const config =
ENV === 'production'
? {
  connectionString: process.env.DATABASE_URL,
  max: 2,
} 
: {};

module.exports = new Pool(config);
