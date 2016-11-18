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

function mysqlTimeStampToDate(date) {
    var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
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
            var time  = document.getElementById('time');
            
            if (request.status === 200) {
                var articleData = JSON.parse(this.responseText);
             
               heading.innerHTML=`<h1>${articleData[0].heading}</h1>`;
               category.innerHTML=`${articleData[0].category}`;
               author.innerHTML=`${articleData[0].name}`;
               content.innerHTML=`${articleData[0].content}`;
               time.innerHTML=`<h1>${mysqlTimeStampToDate(articleData[0].time)}</h1>`;
              
            } else {
             
            }
        }
    };
    
    request.open('GET', '/get-blog-data', true);
    request.send();
};



