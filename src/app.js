const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash'); 
const MySQLStore = require('express-mysql-session')(session);
const bodyparser = require('body-parser');
const fileUpload = require("express-fileupload");

const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE, MYSQLPORT } = require("./keys");

const app = express();
require('./lib/passport'); 

const options = {
    host: MYSQLHOST,
    port: MYSQLPORT,
    user: MYSQLUSER,
    password: MYSQLPASSWORD,
    database: MYSQLDATABASE,
    createDatabaseTable: true
};

const sessionStore = new MySQLStore(options);


const handlebars = exphbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    extname: '.hbs',
    helpres: require('./lib/handlebars')
})

/// archivos compartidos
app.set('port', process.env.PORT || 4200);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');
/// archivos compartidos


//midlewars
app.use(fileUpload());
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json());
app.use(session({
	key: 'session_cookie_name',
	secret: 'session_cookie_secret',
	store: sessionStore, //agregamos esta linea
	resave: false,
	saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
//midlewars

//varible globales 
app.use((req, res, next) => {
    app.locals.message = req.flash('message');
    app.locals.success = req.flash('success');
    app.locals.user = req.user;
    next();
});
//varible globales 

//public
app.use(express.static(path.join(__dirname, 'public')));
//public 

//routers
app.use(require('./router/index.router'))
app.use(require('./router/register.router'))
app.use(require('./router/generalList.router'))
app.use('/cars',require('./router/matricula.router'))

module.exports = app;