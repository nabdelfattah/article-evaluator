require('dotenv').config();

function processData(data){
  return data.response
}

async function fetchDataFromAPI(url) {
  const formdata = new FormData();
  formdata.append("key", process.env.API_KEY);
  formdata.append("url", url);
  formdata.append("lang", "en");

  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  try {
    const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions);
    const data = await response.json();
    return data; // Return the resolved data
  } catch (error) {
    throw error; // Re-throw the error for the caller to handle if needed
  }
}

module.exports = fetchDataFromAPI;