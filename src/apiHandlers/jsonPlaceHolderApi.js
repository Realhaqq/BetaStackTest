const request = require('request');


const baseUrl = 'https://jsonplaceholder.typicode.com';

async function getAllTodos() {
    const options = {
        url: `${baseUrl}/todos`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                resolve(JSON.parse(body));
            }
        });
    });

    return response??console.log('Error: no data returned!')
}
    

const createTodo = async (title) => {
    const options = {
        url: `${baseUrl}/todos`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            title: title,
            completed: false,
        },
    };

    const response = new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                resolve(JSON.parse(body));
            }
        });
    });

    return response ?? console.log('Error: no data returned!')
}


const deleteTodo = async (id) => {
    const options = {
        url: `${baseUrl}/todos/${id}`,
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                resolve(JSON.parse(body));
            }
        });
    });

    return response ?? console.log('Error: no data returned!')
}


const updateTodo = async (id, title) => {
    const options = {
        url: `${baseUrl}/todos/${id}`,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            title: title,
            completed: false,
        },
    };

    const response = new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                resolve(JSON.parse(body));
            }
        });
    });

    return response ?? console.log('Error: no data returned!')
}

module.exports = {
    getAllTodos,
    createTodo,
    deleteTodo,
    updateTodo
}