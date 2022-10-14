import express  from  "express";
import cors from 'cors'; //yarn add cors
import routes from './routes.js'

const api = express();

api.use(cors())
api.use(express.json());


api.use('/', routes);  //redireciona a entrada

api.listen('8080', () => {
  console.log('Server is Running...');
});
