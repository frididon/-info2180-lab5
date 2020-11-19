
document.addEventListener("DOMContentLoaded", ()=>{
    var x = document.getElementById("lookup");

if (x.addEventListener) {
    x.addEventListener("click", myLookUp);
} else if (x.attachEvent) {
  x.attachEvent("onclick", myLookUp);
}
function myLookUp() {
let val = document.querySelector('#country').textContent;
const params = new URLSearchParams({country: val});
const url = 'http://localhost/info2180-lab5/world.php?${params.toString()}';
fetch(url, {method: 'GET'})
    .then(response => response.json())
    .then(data => console.log(data));

}})
