import express from 'express';

import {
    findAllProfessions,
    findProfessionById,
    createProfession,
    updateProfession,
    deleteProfession
} from '../controllers/professionController.js';

const professionRouter = express.Router();

professionRouter.get('/', findAllProfessions);
professionRouter.get('/:id', findProfessionById);
professionRouter.post('/', createProfession);
professionRouter.put('/:id', updateProfession);
professionRouter.delete('/:id', deleteProfession);

export default professionRouter;