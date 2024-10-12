
const options = {
	method: 'GET',
	headers: {
        'x-rapidapi-key': 'cdbb19f9a8msh3fe90f38752dc9cp1854b2jsn83eb63afac9f',
		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
	}
};
const btn = document.querySelector(".btn")
const summary = document.querySelector(".summary")

btn.addEventListener("click", (e) =>{
    e.preventDefault()
    
    const input = document.querySelector("#url").value
    const url = 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${input}&lang=en&engine=2';
  

    fetch(url,options)
    .then(data => data.json())
    .then(data =>{
        summary.innerText = data?.summary
    })
    .catch(error =>{
        console.log(error)
    })
        
    
})




