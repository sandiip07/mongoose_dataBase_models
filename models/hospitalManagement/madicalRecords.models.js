import mongoose from 'mongoose';

const madicalRecordSchema = new mongoose.Schema({}, { timestamps: true });

export const MadicalRecords = mongoose.model('MadicalRecords', madicalRecordSchema);
