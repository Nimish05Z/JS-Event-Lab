// Challenge 1 code
const user = document.getElementById("user");
function print_name(){
  user.innerHTML = "Nimish Garg";
};


// Challenge 2 code
const bgButton = document.getElementById("btn-click");
function bg_color_change(){
  document.body.style.backgroundColor = "lightblue";
};


// Challenge 3 code
const buildBtn = document.getElementById("build-button");
function makeSentence(){
  const noun = document.getElementById("noun").value;
  const verb = document.getElementById("verb").value;
  const adverb = document.getElementById("adverb").value;
  const sentence = `${noun} ${verb} ${adverb}`;
  document.getElementById("statement").innerText = sentence;
}
buildBtn.addEventListener("click", makeSentence);


// Challenge 4.1 code
const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener("click", function(){
  console.log("Grandparent Clicked");
});

parent.addEventListener("click", function(){
  console.log("Parent Clicked");
});

child.addEventListener("click", function(){
  console.log("Child Clicked");
});



//Challenge 4.2 code (Target method comes first in order as compared to bubbling concept)
grandparent.addEventListener("click", function() {
  console.log("Grandparent clicked");
}, true);

parent.addEventListener("click", function() {
  console.log("Parent clicked");
}, true);

child.addEventListener("click", function() {
  console.log("Child clicked");
}, true);


//Challenge 5 code
const category_ul = document.getElementById("category");
category_ul.addEventListener("click", function(event){
  if (event.target.tagName === "LI") {
    const clickedItem = event.target.id;
    console.log(clickedItem);
  };
});
