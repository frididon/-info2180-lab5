
document.addEventListener("DOMContentLoaded", ()=>{
    var x = document.getElementById("lookup");

if (x.addEventListener) {
    x.addEventListener("click", myLookUp);
} else if (x.attachEvent) {
  x.attachEvent("onclick", myLookUp);
}
function myLookUp() {
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
let entry = document.querySelector('#country').value;
const params = new URLSearchParams({country: entry});
const url = `http://localhost/info2180-lab5/world.php?${params.toString()}`;
    fetch(url ,{ method:'GET'})
    .then(response => response.json())
    .then(data => console.log(data));

}});
