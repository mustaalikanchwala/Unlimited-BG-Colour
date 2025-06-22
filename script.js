const randomcolour = function(){
  const  hex = '0123456789ABCDEF' // hexadecimal value start from 0 to 9 then till F.
  let colour = "#";
  for(let i = 0;i<6;i++){
    colour += hex[Math.floor(Math.random()*16)]; // here math.floor generates a randoum number betwwen 0 to 15 
// hex = "0123456789ABCDEF" → This string has 16 characters.

// Indexing starts from 0 to 15:

// hex[0] = "0", hex[15] = "F"
  } 
  return colour;
};
let intervalid;
let changetext = document.querySelector('h2');
function startColour(str){
function Bg(){
    document.body.style.backgroundColor = randomcolour();
}
    intervalid = setInterval(Bg,200);
    changetext.innerHTML = "Click to Stop Unlimited colour change "
}
function stopColour(){
    clearInterval(intervalid)
    changetext.innerHTML = "Click on Start,For Unlimited BG"
    document.body.style.backgroundColor = "white"

}
document.querySelector('#start').addEventListener('click',startColour)
document.querySelector('#stop').addEventListener('click',stopColour)
