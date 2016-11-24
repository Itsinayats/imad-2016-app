console.log("loaded article.js");

function fetchArticles(cat){
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
                 var data = JSON.parse(this.responseText); 
                 for (var i=0; i< data.length; i++) {
                
               heading.innerHTML=`<h1>${data[i].heading}</h1>`;
               category.innerHTML=`${data[i].category}`;
             //  author.innerHTML=`<span class="glyphicon glyphicon-time"></span> Post By, <b>${data[i].name}</b>`;   
               content.innerHTML=`${data[i].content}`;
               time.innerHTML=`${data[i].time.split('T')[0]}`;
                 }
                }
               
             else {
            alert("Sorry No!articles In this category!!!");
               
            }
        }
    };
    
        request.open('POST', '/getArticles', true);
        request.setRequestHeader('Content-Type', 'application/json');

        request.send(JSON.stringify({category:cat}));     
}






//load categories
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
                     <li class="list-group-item"><a id="${CategoryList[i].name}" onclick="getArticles(this.id)" href="#" >${CategoryList[i].name}</a><span id="badge" class="badge"></span></li>
                   `;
                
                }
                    content += "</ul>";
                 categories.innerHTML = content;
                }
              
             else {
                categories.innerHTML('Oops! Could not load all articles!');
            }
        }
    
    request.open('GET', "/get-categories", true);
    request.send();
 };

};




           
//load initially latest article
            function loadBlogData(articleData,i) {
            var heading = document.getElementById('heading');
            var category = document.getElementById('category');
            var author = document.getElementById('author');
            var tags  = document.getElementById('tags');
            var content  = document.getElementById('content');
            var time  = document.getElementById('time');
             heading.innerHTML=`<h1>${articleData[i].heading}</h1>`;
               category.innerHTML=`${articleData[i].category}`;
               author.innerHTML=`<span class="glyphicon glyphicon-time"></span> Post By, <b>${articleData[i].name}</b>`;   
               content.innerHTML=`${articleData[i].content}`;
               time.innerHTML=`${articleData[i].time.split('T')[0]}`;
           var x="";
               for(var j=0;j<articleData.length;j++){
                   x+=`<span class="label label-success">${articleData[j].tag}</span>&nbsp;`;
               }
               tags.innerHTML=x;
            
              
    }


//perform on windows start.
window.onload=function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
             var content  = document.getElementById('content');
            if (request.status === 200) {
                var articleData = JSON.parse(this.responseText);
               loadBlogData(articleData,0);
             
            } else {
             content.innerHTML=`<b>Error Fetching Content</b>`;
            }
        }
    };
    
    request.open('GET', '/get-blog-data', true);
    request.send();
};



