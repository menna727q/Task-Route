import { Schema,model } from "mongoose";
const taskSchema = new Schema({
    title: String,
    body: String,
    type: { type: String, enum: ['text', 'list'] },
    shared: { type: Boolean, default: false },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
  });
  export const Task = model('Task', taskSchema);
