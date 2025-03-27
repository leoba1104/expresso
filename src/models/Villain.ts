import mongoose, { Schema, Document } from 'mongoose';

interface IVillain extends Document {
    name: string;
    universe: string;
    powers: string[];
    evilPlan?: string;
    rival?: string;
    motivation?: string;
    backstory?: string;
}

const villainSchema = new Schema<IVillain>({
    name: { type: String, required: true },
    universe: { type: String, required: true },
    powers: { type: [String], required: true },
    evilPlan: { type: String },
    rival: { type: String },
    motivation: { type: String },
    backstory: { type: String },
});

const Villain = mongoose.model<IVillain>('IVillain', villainSchema);

export default Villain;
