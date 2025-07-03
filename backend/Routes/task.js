
const express = require("express");
const router = express.Router();
const Task = require("../Models/task");

router.post("/:id/addTask", async (req, res) => {
    const userId = req.params.id;
    const taskData = req.body;
  
    const newTask = new Task({
      title: taskData.topic,
      user: userId,
      deadline: taskData.date,
      time: taskData.time
    });
    await newTask.save();
    res.status(201).json({ message: "Task created", task: newTask });
  });

  router.get("/:id/getTask" , async (req , res) => {
      const {id} = req.params;
      let tasks = await Task.find({user : id});
      if(tasks){
        res.status(200).send(tasks);
      }
      else{
        res.status(204).send({message : null});
      }
  });
  
module.exports = router;