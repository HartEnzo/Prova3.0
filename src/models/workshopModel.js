
import { Schema, model } from "mongoose";

const workshopSchema = new Schema({
  name: {
    type:String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  specialties: {
    type: String,
    enum: ["MOTOR, SUSPENSAO"],
    required: true
}
});

const workshop = model("workshop", workshopSchema);

export default workshop;