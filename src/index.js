function createIframe() {
  var payload = document.getElementById("payload").value;
  payload = payload.replace(/\\r/g, "");
  payload = payload.replace(/\\n/g, "");
  payload = payload.replace(/\\/g, "");

  // Initial iframe
  var iframe = document.createElement("iframe");
  iframe.setAttribute("id", "my-iframe"); // assign an id

  // Set position
  document.getElementById("wrapper").innerHTML = "";
  document.getElementById("wrapper").appendChild(iframe);

  // Set iframe properties
  var iFrameObj = document.getElementById("my-iframe");
  iFrameObj.src = "data:text/html;charset=utf-8," + encodeURI(payload);
}
