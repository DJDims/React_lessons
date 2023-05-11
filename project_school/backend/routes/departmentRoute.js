import express from 'express';

import {
    findAllDepartments,
    findDepartmentById,
    createDepartment,
    updateDepartment,
    deleteDepartment
} from '../controllers/departmentController.js';

const departmentRouter = express.Router();

departmentRouter.get('/', findAllDepartments);
departmentRouter.get('/:id', findDepartmentById);
departmentRouter.post('/', createDepartment);
departmentRouter.put('/:id', updateDepartment);
departmentRouter.delete('/:id', deleteDepartment);

export default departmentRouter;