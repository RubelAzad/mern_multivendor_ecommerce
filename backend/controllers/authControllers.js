


const adminModel = require('../models/adminModel');
const bcrypt = require('bcrypt');
const { responseReturn } = require('../utiles/response');
const { createToken } = require('../utiles/tokenCreate');

class authControllers {
    admin_login = async (req, res) => {
        const { email, password } = req.body;
        try {
            const admin = await adminModel.findOne({ email }).select('+password');
            //console.log(admin)

            if (admin) {
                const match = await bcrypt.compare(password, admin.password);
                if (match) {
                    const token = await createToken({
                        id: admin._id,
                        role: admin.role
                    });
                    res.cookie('accessToken', token, {
                        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                    });
                    return responseReturn(res, 200, { token, message: "Login Successful" });
                } else {
                    return responseReturn(res, 401, { error: "Invalid Password" });
                }
            } else {
                return responseReturn(res, 404, { error: "Email Not Found" });
            }

        } catch (error) {
            return responseReturn(res, 500, { error: error.message });
        }
    }

    //End Method

    getUser = async (req, res) => {
        const {id, role} = req;

        try{
            
            if(role === 'admin'){
                const user = await adminModel.findById(id)
                return responseReturn(res, 200, {userInfo: user})

            }else{
                console.log('Seller Info')
            }
        }catch{
            console.log(error.message);
        }

    }
}//end getUser Method

module.exports = new authControllers();
