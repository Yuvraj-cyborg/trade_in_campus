import mongoose from "mongoose";

const CATEGORIES = [
  "Book",
  "Engineering",
  "Equipment",
  "Stationary",
  "Electronics",
  "Sports",
  "Clothing",
  "Others",
];
const STATUSES = ["Available", "Sold"];
const CONDITIONS = ["New", "Good", "Poor"];

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: CATEGORIES,
  },
  description: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
    enum: CONDITIONS,
  },
  price: {
    type: String,
    required: true,
  },
  imageName: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
    enum: STATUSES,
    default: "Available",
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

let List = mongoose.model("List", listSchema);
export default List;
