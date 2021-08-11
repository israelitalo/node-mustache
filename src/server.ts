import express from 'express';
import router from './routes';
import mustache from 'mustache-express';
import path from 'path';

const server = express();
server.use(express.json());

server.set('view engine', 'mustache');
server.set('views', path.resolve(__dirname, "views"));
server.engine('mustache', mustache());

server.use(express.static(path.resolve(__dirname, "..", "public")));

server.use(router);

server.listen(3335, () => {
    console.log('Server on');
});