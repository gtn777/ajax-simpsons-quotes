// This function loads pokemon data from the Pokemon API
function simpsonQuoteDisplay() {
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data; 
      })
      .then(function(data) {
        const quoteHtml = `
          <p>${data[0].character} :</p>
          <p><strong>"${data[0].quote}"</strong></p>
          <img src="${data[0].image}" />
        `;
        document.getElementById('quotes').innerHTML = quoteHtml;
      });
  }  
const quoteButton = document.getElementById('button1') ;
quoteButton.addEventListener ('click', () => {simpsonQuoteDisplay()});
