"use strict";

const report = document.getElementById("video_name");

let nickName = sessionStorage.getItem("pick");

let msg = report.textContent;
msg = msg.replace('userInput', nickName);

report.textContent = msg;