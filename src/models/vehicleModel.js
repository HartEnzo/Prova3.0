
import { Schema, model } from "mongoose";

const vehicleSchema = new Schema({
  plate: {
    type: String,
    required: true,
    unique: true,
    maxLength: 7,
    minLength: 7
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
},
owner: {
    type: String,
    required: true
},
maintenances: {
    type: String,
    enum :["MOTOR, SUSPENSAO"],
    required: true
    
}
});

const vehicle = model("vehicle", vehicleSchema);

export default vehicle;