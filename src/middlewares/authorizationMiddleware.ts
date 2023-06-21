import { Request, Response, NextFunction } from 'express';

function authorizationMiddleware(
    req: Request,
    resp: Response,
    next: NextFunction
) {
    const urlPath = req.url;
    console.log(`~~ url path:${urlPath}`);

    const authorizationToken = req.headers['Authorization'];

    if (!authorizationToken) {
        resp.status(401).json({ message: 'Invalid authorization' });
    } else {
        console.log('simple middleware', authorizationToken);
        next();
        console.log('simple middleware end');
    }
}

export default authorizationMiddleware;
