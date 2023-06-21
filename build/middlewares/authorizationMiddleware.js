"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function authorizationMiddleware(req, resp, next) {
    const urlPath = req.url;
    console.log(`~~ url path:${urlPath}`);
    const authorizationToken = req.headers['Authorization'];
    if (!authorizationToken) {
        resp.status(401).json({ message: 'Invalid authorization' });
    }
    else {
        console.log('simple middleware', authorizationToken);
        next();
        console.log('simple middleware end');
    }
}
exports.default = authorizationMiddleware;
