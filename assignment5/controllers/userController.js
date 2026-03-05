const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// صفحة التسجيل
exports.registerPage = (req, res) => {
    res.render("register", { error: "" });
};

// صفحة تسجيل الدخول
exports.loginPage = (req, res) => {
    res.render("login", { error: "" });
};

// تنفيذ التسجيل
exports.registerUser = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.render("register", { error: "Passwords do not match" });
    }

    const exists = await User.findOne({ email });
    if (exists) {
        return res.render("register", { error: "Email already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    await User.create({
        firstName,
        lastName,
        email,
        password: hashed,
    });

    res.redirect("/login");
};

// تنفيذ تسجيل الدخول باستخدام JWT
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.render("login", { error: "Invalid email or password" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.render("login", { error: "Invalid email or password" });
    }

    const token = jwt.sign(
        {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
        },
        "SECRET_KEY",
        { expiresIn: "1d" }
    );

    res.cookie("token", token, { httpOnly: true });
    res.redirect("/timeline");
};

// تسجيل الخروج باستخدام JWT
exports.logout = (req, res) => {
    res.clearCookie("token");
    res.redirect("/login");
};
