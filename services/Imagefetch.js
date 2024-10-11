const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const key = process.env.ACCESS_KEY;

async function Imagefetcher(object){
    try{
        const images = await axios.get(`https://api.unsplash.com/search/photos?query=${object}&client_id=${key}`)
        const i = Math.floor(Math.random() * 10);
        const imageurl = images.data.results[i].urls.raw;
        return imageurl;

    }
    catch(e){
        return "No images found";
    }
}

module.exports = {
    Imagefetcher,
}