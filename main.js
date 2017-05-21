console.log("Hello");

var txt = document.getElementById("text");
var btn = document.getElementById("submit");
var dav = document.getElementById("outputarea");

btn.addEventListener("click", addcard);

function addcard(event) {

    var newCard = `<div class="card">${text.value}<button class="del">Delete</button></div>`;
    dav.innerHTML += newCard;


    var delbtn = document.getElementsByClassName("del");
    //for(i = 0; i < delbtn.length; i++){
    //delbtn[i].addEventListener("click",function(){
    //this.parent.Node.remove()

    //});
    //	}
    for (var i = 0; i < delbtn.length; i++) {
        delbtn[i].addEventListener("click", function() {




            //remove the parentnode containing inner html and button
            this.parentNode.remove()
        });
    }
}
