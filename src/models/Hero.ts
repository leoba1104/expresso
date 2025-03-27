import mongoose, { Schema, Document } from 'mongoose';

interface IHero extends Document {
    name: string;
    universe: string;
    powers: string[];
    origin?: string;
    weakness?: string;
    backstory?: string;
}

const heroSchema = new Schema<IHero>({
    name: { type: String, required: true },
    universe: { type: String, required: true },
    powers: { type: [String], required: true },
    origin: { type: String },
    weakness: { type: String },
    backstory: { type: String },
});

const Hero = mongoose.model<IHero>('Hero', heroSchema);

export default Hero;
