
import { Schema, model } from "mongoose";

const maintenanceSchema = new Schema({
    workshop: {
    type: Schema.Types.ObjectId,
    ref: "workshop",
    required: true
  },
  vehicle: {
    type: Schema.Types.ObjectId,
    ref: "vehicle",
    required: true
  },
  services: {
    type: Schema.Types.String,
    enum: ["MOTOR, SUSPENSAO"],
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  totalCost: {
    type:Number,
    require: true
  }
 
});

const maintenance = model("maintenance", maintenanceSchema);

export default maintenance;