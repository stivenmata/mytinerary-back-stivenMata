import mongoose from "mongoose";
import Itinerary from "../../models/Itinerary.js";
import "dotenv/config.js";
import "../../config/database.js";

// City IDs
const berlinId = "67e2339968be1806aa028c02";
const romeId = "67e2339968be1806aa028bfe";
const sydneyId = "67e2339968be1806aa028c00";
const parisId = "67e2339968be1806aa028bfb";
const bangkokId = "67e2339968be1806aa028c07";
const capeTownId = "67e2339968be1806aa028c06";
const tokyoId = "67e2339968be1806aa028bfc";
const buenosAiresId = "67e2339968be1806aa028c04";
const amsterdamId = "67e2339968be1806aa028c03";
const barcelonaId = "67e2339968be1806aa028bff";
const dubaiId = "67e2339968be1806aa028c01";
const newYorkId = "67e2339968be1806aa028bfa";
const losAngelesId = "67e2339968be1806aa028c05";
const londonId = "67e2339968be1806aa028bfd";
const torontoId = "67e2339968be1806aa028c08";

const itineraries = [
  {
    city: new mongoose.Types.ObjectId(newYorkId),
    title: "Explore Central Park",
    authorName: "Maria Lopez",
    authorPhoto: "https://randomuser.me/api/portraits/women/32.jpg",
    placePhoto: "https://cdn.britannica.com/14/77414-050-A38746FA/Central-Park-New-York-City.jpg",
    price: 2,
    duration: 3,
    likes: 0,
    hashtags: ["nature", "relaxing"],
    comments: [
      { user: "Tom", text: "Amazing place to chill!" },
      { user: "Sara", text: "Loved the walk." }
    ]
  },
  {
    city: new mongoose.Types.ObjectId(losAngelesId),
    title: "Sunset at Santa Monica",
    authorName: "John Carter",
    authorPhoto: "https://randomuser.me/api/portraits/men/21.jpg",
    placePhoto: "https://www.santamonica.com/wp-content/uploads/2022/01/sunset-santa-monica.jpg",
    price: 3,
    duration: 2,
    likes: 0,
    hashtags: ["beach", "sunset"],
    comments: [{ user: "Emily", text: "So beautiful!" }]
  },
  {
    city: new mongoose.Types.ObjectId(romeId),
    title: "Historic Rome Tour",
    authorName: "Giulia Romano",
    authorPhoto: "https://randomuser.me/api/portraits/women/33.jpg",
    placePhoto: "https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/020/588/slideshow/4c4a627aa7eb277d7d21684d1475c072/slide-tour-news-slideshow-epr-day-12-13-italy-rome-forum-gal.jpg",
    price: 4,
    duration: 4,
    likes: 0,
    hashtags: ["history", "architecture"],
    comments: [{ user: "Luca", text: "Bellissimo!" }]
  },
  {
    city: new mongoose.Types.ObjectId(bangkokId),
    title: "Street Food in Bangkok",
    authorName: "Anan Chai",
    authorPhoto: "https://randomuser.me/api/portraits/men/74.jpg",
    placePhoto: "https://media.cnn.com/api/v1/images/stellar/prod/180206142508-bangkok-street-food-6.jpg",
    price: 1,
    duration: 2,
    likes: 0,
    hashtags: ["foodie", "local"],
    comments: [{ user: "Leo", text: "Best pad thai ever!" }]
  },
  {
    city: new mongoose.Types.ObjectId(capeTownId),
    title: "Climb Table Mountain",
    authorName: "Thandi Zuma",
    authorPhoto: "https://randomuser.me/api/portraits/women/23.jpg",
    placePhoto: "https://media.cntraveler.com/photos/5d8a8e0e7efdcf0009df13c3/16:9/w_2560,c_limit/TableMountain-GettyImages-147847451.jpg",
    price: 2,
    duration: 5,
    likes: 0,
    hashtags: ["adventure", "nature"],
    comments: [{ user: "Nick", text: "Incredible views!" }]
  },
  {
    city: new mongoose.Types.ObjectId(parisId),
    title: "Tour the Louvre Museum",
    authorName: "Claire Dubois",
    authorPhoto: "https://randomuser.me/api/portraits/women/64.jpg",
    placePhoto: "https://cdn.britannica.com/35/94535-050-BE26ED73/Louvre-Museum-Paris.jpg",
    price: 3,
    duration: 3,
    likes: 0,
    hashtags: ["art", "culture"],
    comments: [{ user: "Max", text: "Loved the Mona Lisa!" }]
  },
  {
    city: new mongoose.Types.ObjectId(torontoId),
    title: "CN Tower & Harbourfront",
    authorName: "Kevin Singh",
    authorPhoto: "https://randomuser.me/api/portraits/men/52.jpg",
    placePhoto: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_500,q_75,w_800/v1/clients/toronto/CNTower_Credit_CityofToronto_9b8e7a2d-2397-4565-9f8a-4c6bda73e0ac.jpg",
    price: 2,
    duration: 3,
    likes: 0,
    hashtags: ["skyline", "views"],
    comments: [{ user: "Jess", text: "Stunning!" }]
  },
  {
    city: new mongoose.Types.ObjectId(tokyoId),
    title: "City Walk in Tokyo",
    authorName: "Haruki Tanaka",
    authorPhoto: "https://randomuser.me/api/portraits/men/38.jpg",
    placePhoto: "https://media.timeout.com/images/105240238/750/422/image.jpg",
    price: 3,
    duration: 4,
    likes: 0,
    hashtags: ["modern", "urban"],
    comments: [{ user: "Nina", text: "Felt like anime!" }]
  },
  {
    city: new mongoose.Types.ObjectId(amsterdamId),
    title: "Van Gogh Museum Tour",
    authorName: "Sofie De Vries",
    authorPhoto: "https://randomuser.me/api/portraits/women/48.jpg",
    placePhoto: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Van_Gogh_Museum_Amsterdam_2018.jpg",
    price: 2,
    duration: 2,
    likes: 0,
    hashtags: ["art", "museums"],
    comments: [{ user: "Alex", text: "Very inspiring." }]
  },
  {
    city: new mongoose.Types.ObjectId(sydneyId),
    title: "Sydney Opera House Show",
    authorName: "Liam Johnson",
    authorPhoto: "https://randomuser.me/api/portraits/men/36.jpg",
    placePhoto: "https://www.australia.com/content/australia/en/places/sydney/guide-to-sydney-opera-house/_jcr_content/image.adapt.1200.HIGH.jpg",
    price: 5,
    duration: 2,
    likes: 0,
    hashtags: ["music", "experience"],
    comments: [{ user: "Hannah", text: "Once in a lifetime!" }]
  },
  {
    city: new mongoose.Types.ObjectId(londonId),
    title: "The London Eye & Big Ben",
    authorName: "Oliver Smith",
    authorPhoto: "https://randomuser.me/api/portraits/men/18.jpg",
    placePhoto: "https://cdn.getyourguide.com/img/location/5ffeb9ec7bd45.jpeg/88.jpg",
    price: 3,
    duration: 3,
    likes: 0,
    hashtags: ["landmarks", "sightseeing"],
    comments: [{ user: "Laura", text: "Amazing view of the city!" }]
  },
  {
    city: new mongoose.Types.ObjectId(barcelonaId),
    title: "Barcelona Gaudí Tour",
    authorName: "Ana García",
    authorPhoto: "https://randomuser.me/api/portraits/women/26.jpg",
    placePhoto: "https://media.timeout.com/images/105658195/image.jpg",
    price: 4,
    duration: 4,
    likes: 0,
    hashtags: ["architecture", "culture"],
    comments: [{ user: "Carlos", text: "Sagrada Familia was breathtaking!" }]
  },
  {
    city: new mongoose.Types.ObjectId(berlinId),
    title: "Discover Berlin’s Wall Art",
    authorName: "Felix Müller",
    authorPhoto: "https://randomuser.me/api/portraits/men/59.jpg",
    placePhoto: "https://upload.wikimedia.org/wikipedia/commons/e/e2/East_Side_Gallery_berlin.jpg",
    price: 2,
    duration: 2,
    likes: 0,
    hashtags: ["history", "streetart"],
    comments: [{ user: "Marta", text: "Such powerful stories in the murals." }]
  },
  {
    city: new mongoose.Types.ObjectId(dubaiId),
    title: "Dubai Desert Safari",
    authorName: "Aisha Al-Farsi",
    authorPhoto: "https://randomuser.me/api/portraits/women/12.jpg",
    placePhoto: "https://www.visitdubai.com/-/media/gathercontent/poi/d/desert-safari/fallback-image/desert-safari-visit-dubai.jpg",
    price: 5,
    duration: 6,
    likes: 0,
    hashtags: ["adventure", "desert"],
    comments: [{ user: "Nico", text: "Unforgettable!" }]
  },
  {
    city: new mongoose.Types.ObjectId(buenosAiresId),
    title: "Recoleta Cemetery & Café",
    authorName: "Lucía Fernández",
    authorPhoto: "https://randomuser.me/api/portraits/women/55.jpg",
    placePhoto: "https://www.welcomeargentina.com/fotos/recoleta/galeria10.jpg",
    price: 1,
    duration: 2,
    likes: 0,
    hashtags: ["culture", "historic"],
    comments: [{ user: "Franco", text: "A must-see in Buenos Aires!" }]
  }
];

const seedItineraries = async () => {
  try {
    await Itinerary.insertMany(itineraries);
    console.log("Itineraries inserted successfully with 0 likes!");
  } catch (error) {
    console.error("Error inserting itineraries:", error);
  } finally {
    mongoose.disconnect();
  }
};

seedItineraries();
