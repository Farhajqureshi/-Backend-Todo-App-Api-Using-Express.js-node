const Todo = require('../model/Todo');

exports.getTodo = async (req,res) => {
    try{
        const {title,discription} = req.body;
        const response = await Todo.find({});
        res.status(200).json({
            success : true,
            data : response,
            massage : 'Entry Created Successfully',
        })
    }
    catch(err){
        console.error(err);
        console.log(err.message);
        res.status(500).json({
            success : false,
            data : "Internal server error",
            message : err.message
        })
    }
}


exports.getTodoid = async (req, res) => {
    try{
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});
        
        if(!todo){
            return res.status(404).json({
                success : false,
                massage : 'No Data Found woth Given Id'
            })
        }

        res.status(200).json({
            success : true,
            data : todo,
            massage : `Todo data ${id} was fached successfully`,
        });

    }
    catch(err){
        console.error(err);
        console.log(err.message);
        res.status(500).json({
            success : false,
            data : "internal server error",
            message : err.message
        })
    }
}