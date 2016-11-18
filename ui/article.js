console.log("loaded article.js");
var catbtn=document.getElementById('catbtn');
catbtn.onclick=function () {/*
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var categories = document.getElementById('categories');
            if (request.status === 200) {
                var content =  "<ul class='list-group' style='width:320px'>";
                var CategoryList = JSON.parse(this.responseText);
                for (var i=0; i< CategoryList.length; i++) {
                    content += `<li>
                     <li class="list-group-item">${CategoryList[i].name}<span class="badge">12</span></li>
                   </li>`;
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
    */
    alert("hello");
};
