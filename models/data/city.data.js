import mongoose from "mongoose";
import City from "../../models/City.js";
import "dotenv/config.js";
import "../../config/database.js";

const cities = [
  {
    
    name: "New York",
    country: "USA",
    continent: "North America",
    currency: "USD",
    phone: "+1",
    population: 8419600,
    area: 783.8,
    timezone: "UTC-5",
    description: "The city that never sleeps, known for its skyline, Broadway, and Times Square.",
    image: "/images/cities/new-york.jpg",
  },
  {
    
    name: "Paris",
    country: "France",
    continent: "Europe",
    currency: "Euro",
    phone: "+33",
    population: 2148000,
    area: 105.4,
    timezone: "UTC+1",
    description: "The city of love, famous for the Eiffel Tower, Louvre Museum, and exquisite cuisine.",
    image: "/images/cities/Paris.jpg",
  },
  {
    
    name: "Tokyo",
    country: "Japan",
    continent: "Asia",
    currency: "Yen",
    phone: "+81",
    population: 13929286,
    area: 2194,
    timezone: "UTC+9",
    description: "A blend of modern technology and tradition, home to Shibuya, Akihabara, and Mount Fuji.",
    image: "/images/cities/Tokyo.jpg",
  },
  {
    
    name: "London",
    country: "United Kingdom",
    continent: "Europe",
    currency: "Pound Sterling",
    phone: "+44",
    population: 8982000,
    area: 1572,
    timezone: "UTC+0",
    description: "A historic city known for Big Ben, Buckingham Palace, and the Thames River.",
    image: "/images/cities/London.jpg",
  },
  {
    
    name: "Rome",
    country: "Italy",
    continent: "Europe",
    currency: "Euro",
    phone: "+39",
    population: 2873000,
    area: 1285,
    timezone: "UTC+1",
    description: "The Eternal City, home to the Colosseum, Vatican City, and delicious pasta.",
    image: "/images/cities/Rome.jpg",
  },
  {
    
    name: "Barcelona",
    country: "Spain",
    continent: "Europe",
    currency: "Euro",
    phone: "+34",
    population: 1664182,
    area: 101.9,
    timezone: "UTC+1",
    description: "A vibrant city famous for Gaudí's architecture, La Rambla, and its beaches.",
    image: "/images/cities/barcelona.jpg",
  },
  {
    
    name: "Sydney",
    country: "Australia",
    continent: "Australia",
    currency: "Australian Dollar",
    phone: "+61",
    population: 5312163,
    area: 12368,
    timezone: "UTC+10",
    description: "Known for the Sydney Opera House, Harbour Bridge, and beautiful beaches.",
    image: "/images/cities/sydney.jpg",
  },
  {
    
    name: "Dubai",
    country: "United Arab Emirates",
    continent: "Asia",
    currency: "Dirham",
    phone: "+971",
    population: 3331420,
    area: 4114,
    timezone: "UTC+4",
    description: "A luxurious city with futuristic skyscrapers, desert safaris, and the Burj Khalifa.",
    image: "/images/cities/Dubai.webp",
  },
  {
    
    name: "Berlin",
    country: "Germany",
    continent: "Europe",
    currency: "Euro",
    phone: "+49",
    population: 3769495,
    area: 891.8,
    timezone: "UTC+1",
    description: "A city with rich history, known for the Berlin Wall, Brandenburg Gate, and museums.",
    image: "/images/cities/Berlin.avif",
  },
  {
    
    name: "Amsterdam",
    country: "Netherlands",
    continent: "Europe",
    currency: "Euro",
    phone: "+31",
    population: 872757,
    area: 219.3,
    timezone: "UTC+1",
    description: "Famous for its canals, cycling culture, and the Van Gogh Museum.",
    image: "/images/cities/Amsterdam.jpeg",
  },
  {
    
    name: "Buenos Aires",
    country: "Argentina",
    continent: "South America",
    currency: "Argentine Peso",
    phone: "+54",
    population: 2891082,
    area: 203,
    timezone: "UTC-3",
    description: "The birthplace of tango, with vibrant nightlife, rich history, and delicious steaks.",
    image: "/images/cities/buenosaires.jpg",
  },
  {
    
    name: "Los Angeles",
    country: "USA",
    continent: "North America",
    currency: "USD",
    phone: "+1",
    population: 3980400,
    area: 1302,
    timezone: "UTC-8",
    description: "The entertainment capital of the world, home to Hollywood and stunning beaches.",
    image: "/images/cities/Losangeles.jpg",
  },
  {
    
    name: "Cape Town",
    country: "South Africa",
    continent: "Africa",
    currency: "South African Rand",
    phone: "+27",
    population: 433688,
    area: 2460,
    timezone: "UTC+2",
    description: "A breathtaking coastal city known for Table Mountain, stunning beaches, and its vibrant culture.",
    image: "/images/cities/capeTown.jpg",
  },
  {
    name: "Bangkok",
    country: "Thailand",
    continent: "Asia",
    currency: "Thai Baht",
    phone: "+66",
    population: 10539000,
    area: 1568.7,
    timezone: "UTC+7",
    description: "A bustling metropolis known for its ornate temples, floating markets, and vibrant nightlife.",
    image: "/images/cities/Bangkok.jpg",
  },
  {
    
    name: "Toronto",
    country: "Canada",
    continent: "North America",
    currency: "Canadian Dollar",
    phone: "+1",
    population: 2930000,
    area: 630.2,
    timezone: "UTC-5",
    description: "A diverse and multicultural city, home to the CN Tower, beautiful waterfront, and thriving arts scene.",
    image: "/images/cities/Toronto.avif",
  },
];


City.insertMany(cities)
  .then(() => {
    console.log("Cities inserted successfully!");
    process.exit();
  })
  .catch((error) => {
    console.error("Error inserting cities:", error);
    process.exit(1);
  });
