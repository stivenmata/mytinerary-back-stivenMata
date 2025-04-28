import mongoose from "mongoose";
import Itinerary from "../../models/Itinerary.js";
import "dotenv/config.js";
import "../../config/database.js";

// City IDs
const berlinId = "67f9eef2dfc170aa2bb037a3";
const romeId = "67f9eef2dfc170aa2bb0379f";
const sydneyId = "67f9eef2dfc170aa2bb037a1";
const parisId = "67f9eef2dfc170aa2bb0379c";
const bangkokId = "67f9eef2dfc170aa2bb037a8";
const capeTownId = "67f9eef2dfc170aa2bb037a7";
const tokyoId = "67f9eef2dfc170aa2bb0379d";
const buenosAiresId = "67f9eef2dfc170aa2bb037a5";
const amsterdamId = "67f9eef2dfc170aa2bb037a4";
const barcelonaId = "67f9eef2dfc170aa2bb037a0";
const dubaiId = "67f9eef2dfc170aa2bb037a2";
const newYorkId = "67f9eef2dfc170aa2bb0379b";
const losAngelesId = "67f9eef2dfc170aa2bb037a6";
const londonId = "67f9eef2dfc170aa2bb0379e";
const torontoId = "67f9eef2dfc170aa2bb037a9";

const itineraries = [
  {
    city: new mongoose.Types.ObjectId(newYorkId),
    title: "Explore Central Park",
    authorName: "Maria Lopez",
    authorPhoto: "https://randomuser.me/api/portraits/women/32.jpg",
    placePhoto: "https://i0.wp.com/www.yayforvacay.com/wp-content/uploads/2019/11/DSC_2934.jpg?resize=1140%2C761&ssl=1",
    price: 2,
    duration: 3,
    likes: 0,
    hashtags: ["nature", "relaxing"]
  },
  {
    city: new mongoose.Types.ObjectId(losAngelesId),
    title: "Sunset at Santa Monica",
    authorName: "John Carter",
    authorPhoto: "https://randomuser.me/api/portraits/men/21.jpg",
    placePhoto: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-visitors-enjoy-sunset-above-santa-monica-pier-in-los-angeles-miroslav-liska.jpg",
    price: 3,
    duration: 2,
    likes: 0,
    hashtags: ["beach", "sunset"]
  },
  {
    city: new mongoose.Types.ObjectId(romeId),
    title: "Historic Rome Tour",
    authorName: "Giulia Romano",
    authorPhoto: "https://randomuser.me/api/portraits/women/33.jpg",
    placePhoto: "https://www.costsavertour.com/media/ye2p4otb/jewels-italy-guided-tour-2.jpg",
    price: 4,
    duration: 4,
    likes: 0,
    hashtags: ["history", "architecture"]
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
    hashtags: ["foodie", "local"]
  },
  {
    city: new mongoose.Types.ObjectId(capeTownId),
    title: "Climb Table Mountain",
    authorName: "Thandi Zuma",
    authorPhoto: "https://randomuser.me/api/portraits/women/23.jpg",
    placePhoto: "https://insideguide.co.za/cape-town/app/uploads/2018/05/india-venster.png",
    price: 2,
    duration: 5,
    likes: 0,
    hashtags: ["adventure", "nature"]
  },
  {
    city: new mongoose.Types.ObjectId(parisId),
    title: "Tour the Louvre Museum",
    authorName: "Claire Dubois",
    authorPhoto: "https://randomuser.me/api/portraits/women/64.jpg",
    placePhoto: "https://robbreport.com/wp-content/uploads/2019/02/louvre-c.jpg?w=1000",
    price: 3,
    duration: 3,
    likes: 0,
    hashtags: ["art", "culture"]
  },
  {
    city: new mongoose.Types.ObjectId(torontoId),
    title: "CN Tower & Harbourfront",
    authorName: "Kevin Singh",
    authorPhoto: "https://randomuser.me/api/portraits/men/52.jpg",
    placePhoto: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/49000/49575-Harbourfront-Centre.jpg",
    price: 2,
    duration: 3,
    likes: 0,
    hashtags: ["skyline", "views"]
  },
  {
    city: new mongoose.Types.ObjectId(tokyoId),
    title: "City Walk in Tokyo",
    authorName: "Haruki Tanaka",
    authorPhoto: "https://randomuser.me/api/portraits/men/38.jpg",
    placePhoto: "https://i.ytimg.com/vi/rFcwx-sIMA8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDq54aM6Z03cqnNxnXem77l7c8Dpg",
    price: 3,
    duration: 4,
    likes: 0,
    hashtags: ["modern", "urban"]
  },
  {
    city: new mongoose.Types.ObjectId(amsterdamId),
    title: "Van Gogh Museum Tour",
    authorName: "Sofie De Vries",
    authorPhoto: "https://randomuser.me/api/portraits/women/48.jpg",
    placePhoto: "https://aws-tiqets-cdn.imgix.net/images/content/d01f0b8405794a388628a1f8b5fa0da9.jpeg?auto=format&fit=crop&q=75&w=900",
    price: 2,
    duration: 2,
    likes: 0,
    hashtags: ["art", "museums"]
  },
  {
    city: new mongoose.Types.ObjectId(sydneyId),
    title: "Sydney Opera House Show",
    authorName: "Liam Johnson",
    authorPhoto: "https://randomuser.me/api/portraits/men/36.jpg",
    placePhoto: "https://images.adsttc.com/media/images/592b/3a1e/e58e/ce97/f600/0211/medium_jpg/VividLIVE_LightingtheSails_creditYayaStempler1.jpg?1496005142",
    price: 5,
    duration: 2,
    likes: 0,
    hashtags: ["music", "experience"]
  },
  {
    city: new mongoose.Types.ObjectId(londonId),
    title: "The London Eye & Big Ben",
    authorName: "Oliver Smith",
    authorPhoto: "https://randomuser.me/api/portraits/men/18.jpg",
    placePhoto: "https://media01.stockfood.com/largepreviews/MjE3ODAyNzg4NA==/70258964-Big-Ben-and-London-Eye-London-UK-England.jpg",
    price: 3,
    duration: 3,
    likes: 0,
    hashtags: ["landmarks", "sightseeing"]
  },
  {
    city: new mongoose.Types.ObjectId(barcelonaId),
    title: "Barcelona Gaudí Tour",
    authorName: "Ana García",
    authorPhoto: "https://randomuser.me/api/portraits/women/26.jpg",
    placePhoto: "https://catalonia.com/documents/176177/209064/catalonia-trade-and-investment-barcelona-ranked-8th-best-city-in-the-world.jpg/bfab1a81-b42b-fc40-4a2d-73034301fb02?t=1717594354035",
    price: 4,
    duration: 4,
    likes: 0,
    hashtags: ["architecture", "culture"]
  },
  {
    city: new mongoose.Types.ObjectId(berlinId),
    title: "Discover Berlin’s Wall Art",
    authorName: "Felix Müller",
    authorPhoto: "https://randomuser.me/api/portraits/men/59.jpg",
    placePhoto: "https://prod-ymm-us-east-1-global-yo-landing.s3.amazonaws.com/wp-content/uploads/2024/05/23145639/e3d63e6b-3df8-4425-86ca-96938d85be32.png",
    price: 2,
    duration: 2,
    likes: 0,
    hashtags: ["history", "streetart"]
  },
  {
    city: new mongoose.Types.ObjectId(dubaiId),
    title: "Dubai Desert Safari",
    authorName: "Aisha Al-Farsi",
    authorPhoto: "https://randomuser.me/api/portraits/women/12.jpg",
    placePhoto: "https://dubaitickets.tours/wp-content/uploads/2023/04/dubai-desert-safari-tour-6.jpg",
    price: 4,
    duration: 6,
    likes: 0,
    hashtags: ["adventure", "desert"]
  },
  {
    city: new mongoose.Types.ObjectId(buenosAiresId),
    title: "Recoleta Cemetery & Café",
    authorName: "Lucía Fernández",
    authorPhoto: "https://randomuser.me/api/portraits/women/55.jpg",
    placePhoto: "https://cdn.getyourguide.com/img/tour/f2cd3d97b3efd16ea99cfd823da4b281355caeb6f750e5748b3b67ed603399b3.jpg/146.jpg",
    price: 1,
    duration: 2,
    likes: 0,
    hashtags: ["culture", "historic"]
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
