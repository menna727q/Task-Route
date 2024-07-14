import  mongoose from'mongoose';

export const connectDB=()=>{
    mongoose.connect('mongodb://localhost:27017/tasks_db')
  .then(() => console.log('Connected to the database'));
}