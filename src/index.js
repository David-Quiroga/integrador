//import {pool} from './Database/dataBase.sql'

const app = require('./app');

app.listen(app.get('port'));
console.log('El servidor esta en el puerto', app.get('port'));