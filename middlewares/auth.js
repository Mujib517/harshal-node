
module.exports = function middleware(req, res, next) {
    if (req.headers["auth"]) next();
    else res.status(401).send("Unauthorized");
};

