import express from 'express';

import {
    findAllProfessions,
    findProfessionById,
    findProfessionByDepartmentId,
    createProfession,
    updateProfession,
    deleteProfession
} from '../controllers/professionController.js';

const professionRouter = express.Router();

professionRouter.get('/', findAllProfessions);
professionRouter.get('/:id', findProfessionById);
professionRouter.get('/department/:id', findProfessionByDepartmentId);
professionRouter.post('/', createProfession);
professionRouter.put('/:id', updateProfession);
professionRouter.delete('/:id', deleteProfession);

export default professionRouter;