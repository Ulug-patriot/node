const Admin = require('./admin.model')

async function addAdmin(req,res) {
    try {
        return res.status(200).json({
            "username":"admin",
            "password":'admin'
        })
        // const admin =  await Admin.create(req.body)
        // console.log(req.body)
        // res.status(200).send(admin)
    }
    catch(err){
        return res.status(400).send('malumot notogri')
    }
}
async function  getAdmin(req , res) {
    try {
        const AdminList = await Admin.find({})
        return res.status(200).json(AdminList)
    } catch (err){
        return res.status(400).send(err)
    }
}


module.exports = {
    addAdmin,
    getAdmin
}

