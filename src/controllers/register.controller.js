const registerCtl = {};
const passport = require("passport");

const orm = require("../Database/dataBase.orm");
const sql = require("../Database/dataBase.sql");
const CryptoJS = require("crypto-js");

registerCtl.showRegister = async (req, res) => {
	const usuario = await sql.query('select COUNT(*) AS total from users')
	if (usuario[0].total === 0) {
		res.render("login/register");
	} else {
		res.redirect('/')
	}
};

registerCtl.register = passport.authenticate("local.signup", {
	successRedirect: "/logout",
	failureRedirect: "/register",
	failureFlash: true,
});

registerCtl.showLogin = async (req, res) => {
	const ids = req.params.id
	const Usuario = await sql.query('select * from users where idUsers = ?', [ids])
	const username = await CryptoJS.AES.decrypt(Usuario[0].usernameUser, 'secret')
	Usuario[0].usernameUser = username.toString(CryptoJS.enc.Utf8)
	res.render('login/Login', { Usuario });
};

registerCtl.login = passport.authenticate("local.signin", {
	successRedirect: "/generalList/",
	failureRedirect: "/",
	failureFlash: true,
});

registerCtl.showProfile = async (req, res) => {
	const id = req.user.idUser;
	const list = await sql.query("select * from datosCompletos where idUser = ?", [id]);
	const nombre = await CryptoJS.AES.decrypt(list[0].namesUser, "secret");
	list[0].namesUser = nombre.toString(CryptoJS.enc.Utf8);
	const email = await CryptoJS.AES.decrypt(list[0].emailUser, "secret");
	list[0].emailUser = email.toString(CryptoJS.enc.Utf8);
	const celular = await CryptoJS.AES.decrypt(list[0].phoneUser, "secret");
	list[0].phoneUser = celular.toString(CryptoJS.enc.Utf8);
	const tipo = await CryptoJS.AES.decrypt(list[0].identificationCardUser, "secret");
	list[0].identificationCardUser = tipo.toString(CryptoJS.enc.Utf8);
	res.render("login/perfil", { list });
};

registerCtl.logout = (req, res, next) => {
	req.logout(function (err) {
		if (err) {
			return next(err);
		}
		req.flash("success", "La cuenta ha sido creada con exito.");
		res.redirect("/");
	});
};

module.exports = registerCtl;
