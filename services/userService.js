const userRepository = require('../repositories/userRepository')
const addUser = (user) => {
    return userRepository.add(user)
}

const getAllUsers = () => {
    return userRepository.all()
}

const getUser = (id) => {
    return userRepository.get(id)
}

module.exports = {
    addUser,
    getAllUsers,
    getUser,
}
