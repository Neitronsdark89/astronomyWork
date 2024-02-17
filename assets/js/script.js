function startTime() {
  let date = new Date(); 
  let hh = ('0'+date.getHours()).slice(-2);
  let mm = ('0'+date.getMinutes()).slice(-2);
  let ss = ('0'+date.getSeconds()).slice(-2);
  let time = "Pašreizējais laiks ir " + hh + ":" + mm + ":" + ss;
  document.getElementById("clock").innerText = time; 
  setTimeout(function() {startTime()}, 1000);
}
currentTime();