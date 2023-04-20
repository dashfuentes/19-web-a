/** this file will include global settings about the server **/
import express from "express";
import indexRoutes from './routes/index.js'
import bookRoutes from './routes/books.js'
const app = express();

//setting
app.set( 'port', 3000 );


//Middlewares

//Routes
app.use( indexRoutes )
app.use(bookRoutes)

export default app;