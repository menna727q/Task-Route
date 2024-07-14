import { Category } from "../../../db/models/category.model.js";

export const getcategories =async(req,res,next)=>{
    try {
        const categories = await Category.find().populate('user', 'name email');
        res.json(categories);
      } catch (err) {
        res.status(500).json({ message: 'Server error' });
      }
}
export const addcategories =async(req,res,next)=>{
    try {
        const { name, userId } = req.body;
        const category = await Category.create({ name, user: userId });
        res.status(201).json(category);
      } catch (err) {
        res.status(500).json({ message: 'Server error' });
      }
}
