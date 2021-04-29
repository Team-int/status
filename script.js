
function main() {
	var root = document.getElementById("root");
  var value = '<div class="App"><iframe src="https://teamint.statuspage.io/{{page}}"></iframe></div>';
	root.innerHTML = value;
}
window.onload = function() {main();}

if (window.navigator.userAgent.match(/MSIE|Internet Explorer|Trident/i)) {
  console.warn("IE 멈춰!")
  window.location = "microsoft-edge:" + window.location.href;
}
