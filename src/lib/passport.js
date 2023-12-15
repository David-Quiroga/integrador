const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const path = require("path");
const CryptoJS = require("crypto-js");
const orm = require("../Database/dataBase.orm")


const sql = require("../Database/dataBase.sql");
const helpers = require("./helpers");

passport.use(
	"local.signin",
	new LocalStrategy(
		{
			usernameField: "username",
			passwordField: "password",
			passReqToCallback: true,
		},
		async (req, username, password, done) => {
			const a = await sql.query('select * from users')
			if (a.length > 0) {
				for (let i = 0; i < a.length; i++) {
					const rows = await orm.user.findOne({ where: { usernameUser: a[i].usernameUser } });
					if (rows) {
						const user = rows;
						const contraseña = await CryptoJS.AES.decrypt(user.passwordUser, "secret");
						const validPassword = contraseña.toString(CryptoJS.enc.Utf8);
						if (validPassword == password) {
							done(null, user, req.flash("message", "Bienvenido" + " " + user.usernameUser)
							);
						} else {
							done(null, false, req.flash("message", "Datos incorrectos"));
						}
					} else {
						return done(
							null,
							false,
							req.flash("message", "El nombre de usuario no existe.")
						);
					}
				}
			}
		}
	)
);

passport.use(
	"local.signup",
	new LocalStrategy(
		{
			usernameField: "username",
			passwordField: "password",
			passReqToCallback: true,
		},
		async (req, username, password, done) => {
			const usuarios = await orm.user.findOne({ where: { usernameUser: username } });
			if (usuarios === null) {
				const { namesUser, identificationCardUser, emailUser, phoneUser } = req.body;
				let newUser = {
					namesUser,
					identificationCardUser,
					emailUser,
					phoneUser,
					usernameUser: username,
					passwordUser: password,
				};

				newUser.namesUser = await helpers.encryptPassword(namesUser);
				newUser.identificationCardUser = await helpers.encryptPassword(identificationCardUser);
				newUser.emailUser = await helpers.encryptPassword(emailUser);
				newUser.phoneUser = await helpers.encryptPassword(phoneUser);
				newUser.usernameUser = await helpers.encryptPassword(username);
				newUser.passwordUser = await helpers.encryptPassword(password);

				const resultado = await orm.user.create(newUser);
				newUser.id = resultado.insertId;

				return done(null, newUser);
			}
		}
	)
);

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});
