import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Hero from '../models/Hero';
import Villain from '../models/Villain';

dotenv.config();

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URL as string)
    .then(async () => {
        console.log('Connected to MongoDB');

        // Delete existing heroes and villains
        await Hero.deleteMany({});
        await Villain.deleteMany({});

        // Create some initial heroes with more data
        await Hero.create([
            {
                name: 'Naruto Uzumaki',
                universe: 'Naruto',
                powers: ['Rasengan', 'Shadow Clone Jutsu', 'Kurama'],
                origin: 'Hidden Leaf Village',
                weakness: 'Rash decisions, lack of control over chakra',
                backstory:
                    'Naruto is an orphan with dreams of becoming the Hokage.',
            },
            {
                name: 'Spider-Man',
                universe: 'Marvel',
                powers: ['Web-Slinging', 'Spider Sense', 'Super Strength'],
                origin: 'New York City',
                weakness: 'Guilt from losing loved ones',
                backstory:
                    'Peter Parker gained spider-like abilities after being bitten by a radioactive spider.',
            },
            {
                name: 'Iron Man',
                universe: 'Marvel',
                powers: ['High-tech Armor', 'Genius-level intellect'],
                origin: 'Malibu, California',
                weakness: 'His heart condition and dependence on the suit',
                backstory:
                    'Tony Stark is a genius inventor who creates a suit of armor to escape captivity.',
            },
            {
                name: 'Goku',
                universe: 'Dragon Ball',
                powers: ['Kamehameha', 'Super Saiyan', 'Instant Transmission'],
                origin: 'Earth',
                weakness: 'Naivety, overconfidence',
                backstory:
                    'A Saiyan warrior sent to Earth, Goku becomes Earth’s protector.',
            },
            {
                name: 'Wonder Woman',
                universe: 'DC',
                powers: ['Super Strength', 'Flight', 'Lasso of Truth'],
                origin: 'Themyscira',
                weakness: 'Bound by the Lasso of Truth',
                backstory:
                    'Diana, an Amazonian princess, fights for justice and equality.',
            },
        ]);

        // Create some initial villains with more data
        await Villain.create([
            {
                name: 'Madara Uchiha',
                universe: 'Naruto',
                powers: ['Susanoo', 'Rinnegan'],
                evilPlan:
                    'To cast the Infinite Tsukuyomi on the world and control it.',
                rival: 'Hashirama Senju',
                motivation: 'Revenge on the world that betrayed him.',
                backstory:
                    'Madara was once a leader of the Uchiha clan and sought absolute control.',
            },
            {
                name: 'Green Goblin',
                universe: 'Marvel',
                powers: ['Super Strength', 'Goblin Glider'],
                evilPlan:
                    'To destroy Spider-Man and prove he is the superior genius.',
                rival: 'Spider-Man',
                motivation:
                    'Jealousy of Spider-Man’s success and anger over the death of his son.',
                backstory:
                    'Norman Osborn becomes the Green Goblin after a failed experiment.',
            },
            {
                name: 'Darth Vader',
                universe: 'Star Wars',
                powers: [
                    'Force abilities',
                    'Lightsaber combat',
                    'Enhanced strength',
                ],
                evilPlan:
                    'To destroy the Rebel Alliance and control the galaxy.',
                rival: 'Obi-Wan Kenobi, Luke Skywalker',
                motivation:
                    'Revenge for the death of his wife, power, and control.',
                backstory:
                    'Once a Jedi Knight, Anakin Skywalker turned to the dark side and became Darth Vader after a tragic turn of events.',
            },
            {
                name: 'Frieza',
                universe: 'Dragon Ball Z',
                powers: [
                    'Energy blasts',
                    'Extreme durability',
                    'Flight',
                    'Transformation',
                ],
                evilPlan:
                    'To conquer the universe and destroy any who oppose him.',
                rival: 'Goku',
                motivation:
                    'To prove his superiority and dominate the universe.',
                backstory:
                    'Frieza is one of the most powerful beings in the universe, feared for his cruelty and desire for galactic conquest.',
            },
            {
                name: 'Loki',
                universe: 'Marvel Cinematic Universe',
                powers: ['God-like strength', 'Illusion creation', 'Magic'],
                evilPlan: 'To rule Earth and gain ultimate power.',
                rival: 'Thor',
                motivation:
                    'Desire for power, resentment toward his brother Thor.',
                backstory:
                    'Adopted son of Odin, Loki constantly seeks to overthrow his brother Thor and take control of the Nine Realms.',
            },
            {
                name: 'Shredder',
                universe: 'Teenage Mutant Ninja Turtles',
                powers: [
                    'Expert martial artist',
                    'Enhanced strength',
                    'Strategic mastermind',
                ],
                evilPlan:
                    'To conquer New York City and defeat the Teenage Mutant Ninja Turtles.',
                rival: 'The Teenage Mutant Ninja Turtles',
                motivation:
                    'Power, domination, and revenge on the Turtles for interfering with his plans.',
                backstory:
                    'The leader of the Foot Clan, Shredder is a master of martial arts and the archenemy of the Teenage Mutant Ninja Turtles.',
            },
        ]);

        console.log('Initial heroes and villains created!');
        process.exit();
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    });
