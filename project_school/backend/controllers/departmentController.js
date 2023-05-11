import Department from '../models/department.js';

export const findAllDepartments = async(req, res) => {
    try {
        const departments = await Department.findAll();
        res.json(departments);
    } catch(error) {
        res.json({message: error.message});
    }
}

export const findDepartmentById = async(req, res) => {
    try {
        const department = await Department.findByPk(req.params.id);
        res.json(department);
    } catch(error) {
        res.json({message: error.message});
    }
}

export const createDepartment = async(req, res) => {
    try {
        const department = await Department.create(req.body);
        res.json(department);
    } catch(error) {
        res.json({message: error.message});
    }
}

export const updateDepartment = async(req, res) => {
    try {
        const department = await Department.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json(department);
    } catch(error) {
        res.json({message: error.message});
    }
}

export const deleteDepartment = async(req, res) => {
    try {
        const department = await Department.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(department);
    } catch(error) {
        res.json({message: error.message});
    }
}
