import * as path from 'path';

export const config = {
  STATIC_DIR: path.join(__dirname, '../..', 'dist'),
  VIEWS_DIR: path.join(__dirname, '..', 'views'),
  PORT: 3000,
};
 
