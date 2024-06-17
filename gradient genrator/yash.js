
let btn1 = document.getElementById ("mybutton");
let btn2 = document.getElementById ("mybutton2");
let copyDiv = document.querySelector( ".copycode");
let rgb1 = "#000";
let rgb2 = "#fff";
const hexvalue = () => {
    let myHexValue = "0123456789abcdef";
    let color="#";
    for (let i=0; i<6 ; i++){
    color = color + myHexValue [ Math.floor(Math.random () *16)];
}
  return color;
};
const handleButton1 = ()=>{  
    rgb1 =hexvalue();
    console.log(rgb1);
document.body.style.backgroundImage = ` linear-gradient( to right, ${rgb1},${rgb2})`;
copyDiv.innerHTML = `background-image: linear-gradient(to right ,${rgb1},${rgb2})` ;
btn1.innerText = rgb1;
   } 
const handleButton2 = ()=>{  
    rgb2 =hexvalue();
    console.log(rgb2);
    document.body.style.backgroundImage = ` linear-gradient( to right, ${rgb1},${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right ,${rgb1},${rgb2})` ;
    btn2.innerText = rgb2;
   } 
btn1.addEventListener('click',handleButton1 );
btn2.addEventListener('click',handleButton2 );
copyDiv.addEventListener('click',() =>{
    navigator.clipboard.writeText(copyDiv.innerText);
})