let showdate =document.querySelector("#showdate");
let showtime =document.querySelector("#showtime");
let hrs =document.querySelector("#hours");    
let min =document.querySelector("#minutes");
let sec =document.querySelector("#seconds");


setInterval(() => {
   let date = new Date();

let disdate = date.getDate() + " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear();
showdate.innerHTML = disdate;
hrs.innerHTML = date.getHours().toString().padStart(2, '0');
min.innerHTML = date.getMinutes().toString().padStart(2, '0');
sec.innerHTML = date.getSeconds().toString().padStart(2, '0');
}, 1000);