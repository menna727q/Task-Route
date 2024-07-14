import { Schema ,model} from "mongoose";
const categorySchema = new Schema({
    name: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  });
export const Category = model('Category', categorySchema);
