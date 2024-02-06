const Todo = require('../model/Todo');

exports.deleteTodo = async (req,res) => {
    try{
           const {id} = req.params;
           const delet = await Todo.findByIdAndDelete(id);

           res.status(200).json({
            success : true,
            data : delet,
            message : "User entry are successfully deleted"
           })
    }
    catch(err) {
        console.error(err);
        console.log(err.message);
        res.status(500).json({
            success : false,
            data : err.message,
            message :  "internal server error"
        })

    }
}