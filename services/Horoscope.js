const axios = require('axios');

async function GetHororscope(sign){
    try{
        const response = await axios.get(`https://ohmanda.com/api/horoscope/${sign}`);
        return response.data;
    }
    catch(e){
        return null;
    }
}

module.exports = {
    GetHororscope,
}