console.log("loaded article.js");

var catbtn=document.getElementById('catbtn');
catbtn.onclick=function () {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var categories = document.getElementById('categories');
            if (request.status === 200) {
                var content =  "<ul class='list-group' style='width:300px'>";
                var CategoryList = JSON.parse(this.responseText);
                for (var i=0; i< CategoryList.length; i++) {
                    content += `
                     <li class="list-group-item">${CategoryList[i].name}<span class="badge">12</span></li>
                   `;
                }
                content += "</ul>";
                categories.innerHTML = content;
            } else {
                categoriess.innerHTML('Oops! Could not load all articles!');
            }
        }
    };
    
    request.open('GET', "/get-categories", true);
    request.send();
 
};

function loadTags(articles){
    
    
}




window.onload=function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var heading = document.getElementById('heading');
            var category = document.getElementById('category');
            var author = document.getElementById('author');
            var tags  = document.getElementById('tags');
            var content  = document.getElementById('content');
            var date  = document.getElementById('date');
              content.innerHTML=articleData[0].content;
            if (request.status === 200) {
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                 
                }
               
            } else {
                articles.innerHTML('Oops! Could not load all articles!');
            }
        }
    };
    
    request.open('GET', '/blog', true);
    request.send(null);
};





