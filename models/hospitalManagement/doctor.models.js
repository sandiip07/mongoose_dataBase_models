import mongoose from 'mongoose';

const hospitalInWorkAndHours = new mongoose.Schema({
  workHours: {
    type: Number,
    required: true,
  },
  workInHospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
  },
});

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experinceInYears: {
      type: Number,
      default: 0,
    },
    work: [hospitalInWorkAndHours],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
