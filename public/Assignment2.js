"use strict";

//adding event listener for when continue button is clicked
let continueButton = document.getElementById("continue");
continueButton.addEventListener("click", buttonAction_Continue);

//two callbacks for POST request, one for success and one for failure
async function sendPostRequest(url,data) {
    let response = await fetch(url, {method: 'POST', headers: {'Content-Type': 'text/plain'}, body: data });
    
    if (response.ok) {
      let data = await response.text();
      return data;
    } 
    else {
      throw Error(response.status);
    }
  }

//function for continue button
function buttonAction_Continue() {
  let userName = document.getElementById("username").value;
  let url = document.getElementById("url").value;
  let nickName = document.getElementById("nick").value;
  let UN_URL_NN = userName + url + nickName;

  //send POST request to server
  sendPostRequest('/videoData', UN_URL_NN)
    .then(function(data) {
    sessionStorage.setItem("pick",data);
    window.location = "/submission.html";  })
    .catch(function(error) {
    console.log("Error occurred:", error)
  });
}