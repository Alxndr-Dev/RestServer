
const getUsers = (req, res) => {

    res.json({
        msg: 'get API - controller'
    });
}

const postUsers = (req, res) => {

    // const body = req.body;
    const {name, age} = req.body;

    res.status(201).json({
        msg: 'post API - controller',
        name, 
        age
    });
}

const putUsers = (req, res) => {

    res.status(500).json({
        msg: 'put API - controller'
    });
}

const patchUsers = (req, res) => {
    
    res.json({
        msg: 'patch API - controller'
    });
}

const deleteUsers = (req, res) => {

    res.json({
        msg: 'delete API - controller'
    });
}

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    patchUsers,
    deleteUsers
};