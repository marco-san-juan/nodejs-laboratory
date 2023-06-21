import express, { Request, Response } from 'express';
import environment from '../environment';

const router = express.Router();

router.get('/__gtg', (req: Request, resp: Response) => {
    const jsonResponse = {
        version: '1.0.0',
        environtment: environment.APP_ENVIRONMENT,
        status: 'up',
    };
    resp.status(200).json(jsonResponse);
});

export default router;
