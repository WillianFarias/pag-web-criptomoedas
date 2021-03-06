//My api key
var apiKey = {
  key: 'b0e7be44-1b78-4a12-a870-69017598a84d'
};

//GET fetch requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='
  + apiKey.key)
  .then((response) => {
    if (!response.ok) throw new Error('Erro ao executar a requisição ' + response.
      status);
    return response.json();
  })
  .then((api) => {
    console.log(api);
    var texto = "";

    for (let i = 0; i < 10; i++) {
      //Show API information
      texto = texto + `
                  
      <div class="media">
          <img src="coin.png" class="align-self-center mr-3" alt="coin" width="45" height="30">
          <div class="media-body">
          <h5 class="mt-2">${api.data[i].name}</h5>
          <p>${api.data[i].symbol}</p>
          <p>${api.data[i].first_historical_data}</p>
          </div>
      </div>
 
      `;

      document.getElementById("coins").innerHTML = texto;
    }
  })
  .catch((error) => {
    console.error(error.message);
  })