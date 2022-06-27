
function uploadPup(element){
    console.log("wazzza", element);
    element.innerText = "Uploaded! Thank you."
}

function removeElement(element){
    console.log("trying to remove something......wazzzza");
    element.remove();
}

function playVideo(element){
    console.log("playing video");
    element.play();
}

function pauseVideo(element){
    element.pause()
}

function changeImg(element){
    console.log("wazzzza",element);
    element.src = "./resources/anothapuppy.jpeg";
}

function cookieMonster(){
    console.log("cookie monsta!");
    var element=document.querySelector("#cookieBox");
    element.remove();
}