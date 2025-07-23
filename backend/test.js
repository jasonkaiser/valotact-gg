require('dotenv').config();
const axios = require('axios');

(async () => {
  try {
    const response = await axios.get(
      'https://api.henrikdev.xyz/valorant/v1/account/Operator Freak/11FEB',
      {
        headers: {
          Authorization: process.env.HENRIK_API_KEY, // your API key here
        },
      }
    );
    console.log('API response:', response.data);
  } catch (err) {
    console.error('Error:', err.response?.data || err.message);
  }
})();
