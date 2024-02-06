
const Todo = require('../model/Todo');

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const response = await Todo.create({ title, description });

        res.status(200).json(
            {
                success: true,
                data: response,
                massage: "Entry are Created Successfully"

            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err.message);
        res.status(500).json({
           success : false,
           data : "Internal Server Error",
           massage : err.message,
        })
    }
}


