const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    min: 1,
    max: 50,
  },
  date: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
    min: 1,
    max: 50,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: String,
  },
  updatedAt: {
    type: String,
  },
});

schema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Template = model("Template", schema);

module.exports = Template;
