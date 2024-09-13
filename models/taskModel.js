import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
);
export const Task = mongoose.model('Task',taskSchema)