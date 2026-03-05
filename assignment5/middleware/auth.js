const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
    const token = req.cookies.token;

    // إذا ما فيه توكن → المستخدم غير مسجل
    if (!token) {
        req.user = null;
        return next();
    }

    try {
        const decoded = jwt.verify(token, "SECRET_KEY");
        req.user = decoded; // يحتوي id + firstName + lastName
        next();
    } catch (err) {
        req.user = null;
        next();
    }
};
