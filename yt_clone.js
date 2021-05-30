var API_KEY = "AIzaSyAiQSLHy9QnvOUXwd4C4rJbGwVYnP9Hbro";



function search(){
    var results_div = document.getElementById("Results");
    results_div.innerHTML="";
    var key = document.getElementById("keyword");
    var keyword = key.value;
    var URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&key="+API_KEY+"&type=video&q="+keyword;
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        for(var i of data.items)
        {
            console.log(i.id.videoId);
            
            let object = document.createElement("iframe");
            object.src = "https://www.youtube.com/embed/"+i.id.videoId;
            results_div.append(object);
            
        }
    });

}