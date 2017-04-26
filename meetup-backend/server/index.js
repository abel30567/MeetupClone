import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middleware';
import { MeetupRoutes, GroupRoutes } from './modules';

const app = express();
/**
 * Database
 */
dbConfig();

/**
 *  Middlewares
 */
middlewaresConfig(app);

app.use('/api', [MeetupRoutes, GroupRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
      console.error(err);
    } else {
      console.log('The magic happens on port: ', PORT);
    }
});
