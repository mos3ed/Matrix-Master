const api_key=" my api key"

function searchgif(){


    let url = "https://api.giphy.com/v1/gifs/search?api_key="

    let query = document.getElementById('searchText').value;

    
              + query 
              + '&limit=1';

    let http = new XMLHttpRequest();

    http.open('GET', url);

    http.onload = function () {

        if (http.status === 200) {

            let data = JSON.parse(http.responseText);

            if (data.data.length > 0) {
                let gifUrl = data.data[0].images.original.url;

                document.getElementById('result').innerHTML =
                    "<img src='" + gifUrl + "' width='300'>";
            } else;
