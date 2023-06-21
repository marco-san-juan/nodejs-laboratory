import express, {
    Request,
    Response,
    RequestHandler,
    NextFunction,
} from 'express';

import EmployeeService from '../services/employeeService';

const router = express.Router();

router.get('/', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const employees = await EmployeeService.getInstance().findAll();
        resp.status(200).json(employees);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const existingEmployee =
            await EmployeeService.getInstance().findById(
                req.params.id
            );

        if (existingEmployee) {
            resp.status(200).json(existingEmployee);
        } else {
            resp.status(404).json({
                message: `employee not_found: ${req.params.id}`,
            });
        }
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const payload =req.body;
        const newEmployee = await EmployeeService.getInstance().save(
            payload
        );
        resp.status(201).json({ ...newEmployee.dataValues });
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const EmployeeId = req.params.id;
        const data = await EmployeeService.getInstance().update(
            EmployeeId,
            {
                ...req.body,
            }
        );

        res.status(201).json(data);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const EmployeeId = req.params.id;
        await EmployeeService.getInstance().deleteByPrimaryKey(req.params.id);

        res.status(200).json({
            message: `Employee_successfully_deleted: ${EmployeeId}`,
        });
    } catch (err) {
        next(err);
    }
});
export default router;
