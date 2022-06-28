function likes(num){
    // console.log("kjfvhsdakj", (id));
    var element = document.querySelector(num);
    console.log("element looks like this", element.innerText);
    var likeCount=Number(element.innerText);
    console.log(likeCount)
    likeCount+=1;
    element.innerText=likeCount
}

function simple(){

}