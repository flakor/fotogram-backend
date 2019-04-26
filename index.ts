import Server from './classes/server';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import fileUpload from 'express-fileupload';
import userRoutes from './routes/usuario';
import postRoutes from './routes/post';

const server = new Server();

// body parser

server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// fileUpload

server.app.use(fileUpload());

// rutas de mi app
server.app.use('/user', userRoutes);
server.app.use('/posts', postRoutes);

// conectar DB
mongoose.connect('mongodb://localhost:27017/fotosgram', { useNewUrlParser: true, useCreateIndex: true }, (err) => {
	if (err) console.log(err);
	else console.log('Base de datos Online!!!');
	throw err;
});

// levantar express
server.start(() => {
	console.log(`Servidor corriendo en puerto ${server.port}`);
});
