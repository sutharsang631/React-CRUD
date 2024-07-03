const TaskModel =require("../models/TaskModel");

module.exports.getTasks = async(req,res)=>{
    const tasks = await TaskModel.find();
    res.send(tasks);
}

module.exports.saveTask = async(req,res)=>{
    const {task} =req.body;
    TaskModel.create({task})
    .then(data=>{console.log("Saved Successfully...");
    res.status(201).send(data);
    })
    .catch(err=>{console.log("Error in saving task");
    res.send({error:err , msg: "something went wrong!"})    
    })
}



module.exports.updateTask = async(req,res)=>{
    const {id} =req.params;
    const {task} =req.body;
    TaskModel.findByIdAndUpdate(id,{task})
    .then(()=> res.send("Updated Successfully"))
    .catch((err)=>
    {console.log("Error in updating task");
        res.send({error:err , msg: "something went wrong!"})
    });
}

module.exports.deleteTask = async(req,res)=>{
    const {id} =req.params;
    TaskModel.findByIdAndDelete(id)
    .then(()=> res.send("Deleted Successfully"))
    .catch((err)=>
            {console.log("Error in deleting task");
                res.send({error:err , msg: "something went wrong!"})
            }
    )
}