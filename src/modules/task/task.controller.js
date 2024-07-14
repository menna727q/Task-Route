import { Task } from "../../../db/models/task.model.js";
import { Category } from "../../../db/models/category.model.js";
export const getTasks =async(req,res,next)=>{
    try {
        const { categoryName, sharedOption } = req.query;
        const query = {};
    
        if (categoryName) {
          query.category = await Category.findOne({ name: categoryName }).select('_id');
        }
    
        if (sharedOption === 'public') {
          query.shared = true;
        } else if (sharedOption === 'private') {
          query.shared = false;
        }
    
        const tasks = await Task.find(query).populate('category', 'name');
        res.json(tasks);
      } catch (err) {
        res.status(500).json({ message: 'Server error' });
      }
}
export const addtask =async(req,res,next)=>{
    try {
        const { title, body, type, shared, categoryId } = req.body;
        const task = await Task.create({ title, body, type, shared, category: categoryId });
        res.status(201).json(task);
      } catch (err) {
        res.status(500).json({ message: 'Server error' });
      }
}

