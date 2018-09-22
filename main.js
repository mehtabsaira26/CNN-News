function initialize(){
    
    $.ajax({
		url:`https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=41c2ad6c37e74485abf99a3e04a0f8e0`,
		success: function(data){
			console.log(data);
			for(i=0; i < 7; i++){
				document.querySelector(".main-details").innerHTML +=
				// `<div class="details">
				// <h1 class="haeding"> ${data.articles[i].author}</h1>
				// <p> ${data.articles[i].description}</p>
				// </div>
				// <div class="head-line">
				// <span class="news-image" style="background-image:url(${data.articles[i].urlToImage});"><span>
                // <div class="border-set"></div>
                
               ` <div class="details">
                <h1 class="haeding">${data.articles[i].author}</h1>
                <a href="${data.articles[i].url}">
                <img class="detail-img" src="${data.articles[i].urlToImage}" height="150px" width="25%">
                </a>
                <h4 class="title">${data.articles[i].title}</h3>
                <p class="paragrah">${data.articles[i].description}</p>
                </div>
				</div>`

			}
		}

	});
}