const taskskModal = require('../models/tasksModel')

const getAll = async (request, response) => {  

    const tasks = await tasksModal.getAll();

    return response.status(200).json(tasks)
};

module.exports = {
    getAll
};

