// backend/models/FormModel.js
import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  data: String,
});

const FormModel = mongoose.model('Form', formSchema);

module.exports = FormModel;
