function showHide() {
  document.getElementById("asking").style.display = "none";
  document.getElementById("yeppie").style.display = "block";
}
let count = 0;
function slide() {
  count++;
  console.log("noooo");
  let no = document.getElementById("no");
  console.log(no.offsetLeft);
  if (count % 2 != 0) no.style.left = "75px";
  else no.style.left = "";
}
