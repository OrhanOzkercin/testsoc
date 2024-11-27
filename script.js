console.log(navigator);

window.onload = function () {
  fetch("http://localhost:4000")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));

  const pre = document.createElement("pre");
  pre.textContent = JSON.stringify(navigator.userAgent, null, 2);
  document.body.appendChild(pre);
};
