import Profession from '../models/profession.js';

export const findAllProfessions = async(req, res) => {
    try {
        const professions = await Profession.findAll({
            include: 'department',
            where: {},
            order: [['name', 'ASC']]
        });
        res.json(professions);
    } catch(error) {
        res.json({message: error.message});
    }
}

export const findProfessionById = async(req, res) => {
    try {
        const profession = await Profession.findOne({
            include: 'department',
            where: {
                id: req.params.id
            },
            order: [['name', 'ASC']]
        });
        res.json(profession);
    } catch(error) {
        res.json({message: error.message});
    }
}

export const findProfessionByDepartmentId = async(req, res) => {
    try {
        const profession = await Profession.findAll({
            include: 'department',
            where: {
                department_id: req.params.id
            },
            order: [['name', 'ASC']]
        });
        res.json(profession);
    } catch(error) {
        res.json({message: error.message});
    }
}

export const createProfession = async(req, res) => {
    try {
        const profession = await Profession.create(req.body);
        res.json(profession);
    } catch(error) {
        res.json({message: error.message});
    }
}

export const updateProfession = async(req, res) => {
    try {
        const profession = await Profession.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json(profession);
    } catch(error) {
        res.json({message: error.message});
    }
}

export const deleteProfession = async(req, res) => {
    try {
        const profession = await Profession.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(profession);
    } catch(error) {
        res.json({message: error.message});
    }
}
