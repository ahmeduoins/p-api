
var allLink=document.getElementsByClassName("nav-link")

for(i=0;i<allLink.length;i++){

allLink[i].addEventListener("click",function(e){

var type=e.target.textContent
getData(type)
})


}


var dat=[]

getData("pasta")
function getData(ordar){


var http=new XMLHttpRequest()
http.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${ordar}`)
http.send()

http.addEventListener("readystatechange",function(){



if(http.readyState==4&&http.status==200){
dat =JSON.parse(http.response).recipes
show()
}


})

}


function show(){

var cartone=""
for(i=0;i<dat.length;i++){
cartone+=`



    <div class="col-md-4">
        <div class="post position-relative">
            <img class="w-100" src="${dat[i].image_url}"  alt="">    
            <h3>${dat[i].title}</h3>
            <div class="allLink d-flex justify-content-around align-items-end">
            <a href="${dat[i].source_url}" class="btn btn-info" >source</a>
            <a href="${dat[i].publisher_url}" class="btn btn-warning"  >details</a>
            </div>
        
        </div>
    </div>

`
}


document.getElementById("row").innerHTML=cartone
}




