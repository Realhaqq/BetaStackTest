const jsonplaceholderApi = require('../apiHandlers/jsonplaceholderApi');


exports.getAllTodos = async (req, res) => {
    try {
        const response = await jsonplaceholderApi.getAllTodos();
        res.status(200).json(response);
    } 
    catch (error) {
        res.status(500).json(error);
    }
}

exports.createTodo = async (req, res) => {
    if (!req.body.title) {
        return res.status(400).send({
            message: "Todo title can not be empty"
        });
    }
    try {
        const response = await jsonplaceholderApi.createTodo(req.body.title);
        res.status(201).json({"message":"Todo Added Successfully", "id":response.id});
    } 
    catch (error) {
        res.status(500).json(error);
    }

}

exports.deleteTodo = async (req, res) => {
    if (!req.params.id) {
        return res.status(400).send({
            message: "Todo id can not be empty"
        });
    }

    try {
        const response = await jsonplaceholderApi.deleteTodo(req.params.id);
        res.status(200).json({"message":"Todo Deleted Successfully!"});
    }
    catch (error) {
        res.status(500).json(error);
    }
}

exports.updateTodo = async (req, res) => {
    if (!req.params.id) {
        return res.status(400).send({
            message: "Todo id can not be empty"
        });
    }

    if (!req.body.title) {
        return res.status(400).send({
            message: "Todo title can not be empty"
        });
    }

    try {
        const response = await jsonplaceholderApi.updateTodo(req.params.id, req.body.title);
        res.status(200).json({"message":"Todo Updated Successfully!", id: response.id});
    }
    catch (error) {
        res.status(500).json(error);
    }
}


