let text = document.querySelector('#text');
let image = document.querySelector(".image");
let qrimage = document.querySelector(".qrimage");
let btn = document.querySelector(".btn");

const animation = [
    { transform: " scale(0.5)" },
    { transform: " scale(1)" },
];

const time = {
    duration: 1000,
    iterations: 1,
};
btn.addEventListener('click',()=>{
    console.log(text.value)
    qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value;
    image.animate(animation, time);
    text.value="";
})
// https://goqr.me/api/ -->qrcode api
