var urlInput = document.querySelector("#url");
var saveBtn = document.querySelector("#saveBtn");
var apiUrl = "http://localhost:3000/youtube";

saveBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(`URL: ${urlInput.value}`);
  sendUrl(urlInput.value);
});

function sendUrl(videoLink) {
  window.location.href = `${apiUrl}?url=${videoLink}`;
}
