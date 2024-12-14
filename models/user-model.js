const db = require('../config/db')

const getAllUser = async () => {
    const[rows] = await db.query('select * from siswa')
    return rows
}

const getUserById = async (id) => {
    const [row] = await db.query('select * from siswa where id=?',id)
    return row
}

const updateUser = async(id, user) =>{
    const{name, email, phone} = user
    const[result] = await db.query(' insert  into siswa (name, email, phone) values (?,?,?)',[name,email,phone])
    return result.insertId
}

module.exports ={getAllUser, getUserById}