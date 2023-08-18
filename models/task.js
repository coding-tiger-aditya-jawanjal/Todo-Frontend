import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:String,
    desc:String
},{timestamps:true});

const Task = mongoose.model("Task",taskSchema);
export default Task;