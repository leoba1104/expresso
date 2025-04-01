import { getHeroes, addHero, getHeroById } from '../controllers/heroesController'; // Import your controller methods
import { mockRequest, mockResponse } from 'jest-mock-req-res'; // To mock Request/Response
import Hero from '../models/Hero'; // The Hero model


// Mock the Hero model methods
jest.mock('../models/Hero'); // This will mock all methods of Hero

describe('Hero Controller', () => {
    describe('getHeroes', () => {
        it('should return a list of heroes', async () => {
            // Mock the Hero.find() method
            Hero.find = jest.fn().mockResolvedValue([
                {
                    "_id": "67e70523a776082fa62ba8e7",
                    "name": "Naruto Uzumaki",
                    "universe": "Naruto",
                    "powers": [
                        "Rasengan",
                        "Shadow Clone Jutsu",
                        "Kurama"
                    ],
                    "origin": "Hidden Leaf Village",
                    "weakness": "Rash decisions, lack of control over chakra",
                    "backstory": "Naruto is an orphan with dreams of becoming the Hokage.",
                    "__v": 0
                },
                {
                    "_id": "67e70523a776082fa62ba8ea",
                    "name": "Goku",
                    "universe": "Dragon Ball",
                    "powers": [
                        "Kamehameha",
                        "Super Saiyan",
                        "Instant Transmission"
                    ],
                    "origin": "Earth",
                    "weakness": "Naivety, overconfidence",
                    "backstory": "A Saiyan warrior sent to Earth, Goku becomes Earth’s protector.",
                    "__v": 0
                },
                {
                    "_id": "67e70523a776082fa62ba8eb",
                    "name": "Wonder Woman",
                    "universe": "DC",
                    "powers": [
                        "Super Strength",
                        "Flight",
                        "Lasso of Truth"
                    ],
                    "origin": "Themyscira",
                    "weakness": "Bound by the Lasso of Truth",
                    "backstory": "Diana, an Amazonian princess, fights for justice and equality.",
                    "__v": 0
                },
                {
                    "_id": "67e70523a776082fa62ba8e8",
                    "name": "Spider-Man",
                    "universe": "Marvel",
                    "powers": [
                        "Web-Slinging",
                        "Spider Sense",
                        "Super Strength"
                    ],
                    "origin": "New York City",
                    "weakness": "Guilt from losing loved ones",
                    "backstory": "Peter Parker gained spider-like abilities after being bitten by a radioactive spider.",
                    "__v": 0
                },
                {
                    "_id": "67e70523a776082fa62ba8e9",
                    "name": "Iron Man",
                    "universe": "Marvel",
                    "powers": [
                        "High-tech Armor",
                        "Genius-level intellect"
                    ],
                    "origin": "Malibu, California",
                    "weakness": "His heart condition and dependence on the suit",
                    "backstory": "Tony Stark is a genius inventor who creates a suit of armor to escape captivity.",
                    "__v": 0
                }
            ]);

            const req = mockRequest();
            const res = mockResponse();

            await getHeroes(req, res); // Call the controller method

            expect(res.status).toHaveBeenCalledWith(200); // Check if the response status is 200

            // Ensure that the response contains an array of heroes with correct fields
            expect(res.json).toHaveBeenCalledWith(
                expect.arrayContaining([
                    expect.objectContaining({
                        _id: expect.any(String),  // Ensure _id is a string
                        name: 'Naruto Uzumaki',   // Ensure name matches exactly
                        universe: 'Naruto',       // Ensure universe matches exactly
                        powers: expect.arrayContaining(['Rasengan', 'Shadow Clone Jutsu', 'Kurama']),
                        origin: 'Hidden Leaf Village',
                        weakness: 'Rash decisions, lack of control over chakra',
                        backstory: 'Naruto is an orphan with dreams of becoming the Hokage.',
                    }),
                    expect.objectContaining({
                        _id: expect.any(String),
                        name: 'Goku',
                        universe: 'Dragon Ball',
                        powers: expect.arrayContaining(['Kamehameha', 'Super Saiyan', 'Instant Transmission']),
                        origin: 'Earth',
                        weakness: 'Naivety, overconfidence',
                        backstory: 'A Saiyan warrior sent to Earth, Goku becomes Earth’s protector.',
                    }),
                    expect.objectContaining({
                        _id: expect.any(String),
                        name: 'Wonder Woman',
                        universe: 'DC',
                        powers: expect.arrayContaining(['Super Strength', 'Flight', 'Lasso of Truth']),
                        origin: 'Themyscira',
                        weakness: 'Bound by the Lasso of Truth',
                        backstory: 'Diana, an Amazonian princess, fights for justice and equality.',
                    }),
                    expect.objectContaining({
                        _id: expect.any(String),
                        name: 'Spider-Man',
                        universe: 'Marvel',
                        powers: expect.arrayContaining(['Web-Slinging', 'Spider Sense', 'Super Strength']),
                        origin: 'New York City',
                        weakness: 'Guilt from losing loved ones',
                        backstory: 'Peter Parker gained spider-like abilities after being bitten by a radioactive spider.',
                    }),
                    expect.objectContaining({
                        _id: expect.any(String),
                        name: 'Iron Man',
                        universe: 'Marvel',
                        powers: expect.arrayContaining(['High-tech Armor', 'Genius-level intellect']),
                        origin: 'Malibu, California',
                        weakness: 'His heart condition and dependence on the suit',
                        backstory: 'Tony Stark is a genius inventor who creates a suit of armor to escape captivity.',
                    }),
                ])
            );
        });

        it('should return an error if the database call fails', async () => {
            // Simulate an error during Hero.find()
            Hero.find = jest.fn().mockRejectedValue(new Error('Database error'));

            const req = mockRequest();
            const res = mockResponse();

            await getHeroes(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error fetching heroes', error: expect.any(Error) });
        });
    });

    describe('getHeroById', () => {
        it('should return a hero by id', async () => {

            const mockHero = {
                "_id": "67e70523a776082fa62ba8e7",
                "name": "Naruto Uzumaki",
                "universe": "Naruto",
                "powers": [
                    "Rasengan",
                    "Shadow Clone Jutsu",
                    "Kurama"
                ],
                "origin": "Hidden Leaf Village",
                "weakness": "Rash decisions, lack of control over chakra",
                "backstory": "Naruto is an orphan with dreams of becoming the Hokage.",
                "__v": 0
            };

            // Mock the Hero.findById method
            Hero.findById = jest.fn().mockResolvedValue(mockHero);

            const req = mockRequest({ params: { id: '67e70523a776082fa62ba8e7' } });
            const res = mockResponse();

            await getHeroById(req, res); // Call the controller method

            expect(res.status).toHaveBeenCalledWith(200); // Check if the response status is 200
            expect(res.json).toHaveBeenCalledWith(mockHero); // Ensure the correct hero is returned
        });

        it('should return an error if the hero is not found', async () => {
            // Simulate Hero.findById returning null (hero not found)
            Hero.findById = jest.fn().mockResolvedValue(null);

            const req = mockRequest({ params: { id: '67e70523a776082fa62ba8e7' } });
            const res = mockResponse();

            await getHeroById(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'Hero not found' });
        });
    });

    describe('addHero', () => {
        it('should add a new hero and return 201', async () => {
            const mockHero = {
                name: 'Batman',
                universe: 'DC',
                powers: ['Martial Arts', 'Gadgets', 'Intellect'],
                origin: 'Gotham City',
                weakness: 'No superpowers',
                backstory: 'Bruce Wayne fights crime as Batman using his intelligence and wealth.',
            };

            // Mock Hero.create() to return the mock hero
            Hero.prototype.save = jest.fn().mockResolvedValue({
                ...mockHero,
                _id: 'some-mock-id',
                __v: 0,
            });


            const req = mockRequest({ body: mockHero });
            const res = mockResponse();

            await addHero(req, res);

            expect(res.status).toHaveBeenCalledWith(201); // Expect 201 Created
            // expect(res.json).toHaveBeenCalledWith({
            //     message: 'Hero created successfully',
            //     hero: { ...mockHero, _id: 'some-mock-id', __v: 0 },
            // });
        });

        it('should return 400 if required fields are missing', async () => {
            const req = mockRequest({ body: {} }); // Missing fields
            const res = mockResponse();

            await addHero(req, res);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ message: 'Missing required fields' });
        });

        it('should return 500 if there is a database error', async () => {
            Hero.prototype.save = jest.fn().mockRejectedValue(new Error('Database error'));

            const req = mockRequest({
                body: {
                    name: 'Superman',
                    universe: 'DC',
                    powers: ['Flight', 'Super Strength', 'Laser Vision'],
                    origin: 'Krypton',
                    weakness: 'Kryptonite',
                    backstory: 'Sent to Earth as a baby, Clark Kent grows up to be Superman.',
                }
            });
            const res = mockResponse();

            await addHero(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({
                message: 'Failed to create hero',
                error: expect.any(Error),
            });
        });
    });
});
