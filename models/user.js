const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchemaStructure = {
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
};
const userSchema = new Schema(userSchemaStructure, { timestamps: true });

module.exports = mongoose.model("user", userSchema);
