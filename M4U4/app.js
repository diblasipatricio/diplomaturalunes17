var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// aca vamos a trabajar con variables

var session = require("express-session"); // var sesion necesita dependecina express-ss...

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// codigo app.use abajo de PUBLIC sino no funciona

app.use(session({
  secret: "elchavodelocho8",
  resave: false,
  saveUninitialized: true,
}))

// app.use('/', indexRouter);

// REQ representa solicitud http tiene propiedades para la cadena
//de solicitud, parametros, cuerpo, encabezados http etc
//su respues es RES' pero su nombr esta determinado
//por los parametros de la funcion de devolucion de llamada


// cuando recibo la pagina "/" va a buscar el render "Index"
app.get("/", function (req, res) {
  var conocido = Boolean(req.session.nombre);

  res.render("index", {
    title: "Sesiones en Express.js",
    conocido: conocido,
    nombre: req.session.nombre
  });
});
//cuando reciba ingresar
app.post("/ingresar", function (req, res) {
  console.log(req.body.nombre) //aca capturo los datos
  if (req.body.nombre) {
    req.session.nombre = req.body.nombre
  }
  res.redirect("/");//respuesta de caputura a donde lleva
});
//cuandp reciba salir
app.get("/salir", function (req, res) { //aca uso el metodo get porque es una url no un boton
  req.session.destroy();
  res.redirect("/");
})

// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
