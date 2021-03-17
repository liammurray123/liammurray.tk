// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

const fs = require("fs");

// cleardb();

// Contact Form Configs

// const nodemailer = require("nodemailer");
// const { google } = require("googleapis");
// const OAuth2 = google.auth.OAuth2;

// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// const path = require("path");


// function checkHttps(req, res, next) {
//     // protocol check, if http, redirect to https

//     if (req.get("X-Forwarded-Proto").indexOf("https") != -1) {
//         return next();
//     } else {
//         res.redirect("https://" + req.hostname + req.url);
//     }
// }

// app.all("*", checkHttps);

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/views/index.html");
    // response.sendFile(__dirname + "/views/working.html");
});

app.get("/home", function (request, response) {
    response.sendFile(__dirname + "/views/index.html");
    // response.sendFile(__dirname + "/views/working.html");
});

app.get("/contact", function (request, response) {
    response.sendFile(__dirname + "/views/contact.html");
});

app.get("/contact/success", function (request, response) {
    response.sendFile(__dirname + "/views/success.html");
});

app.get("/projects", (request, response) => {
    response.sendFile(__dirname + "/views/projects/projects.html");
});

app.get("/workoutjunkie", (request, response) => {
    response.sendFile(__dirname + "/views/projects/workoutjunkie.html");
});

app.get("/covidtracker", (request, response) => {
    response.sendFile(__dirname + "/views/projects/covidtracker.html");
});

app.get("/sitemap", (request, response) => {
    response.sendFile(__dirname + "/sitemap.json");
});

app.get("/ping", function (request, response) {
    response.sendStatus(200);
});

// app.get("/sitemap", (request, response) => {
//     response.sendFile(__dirname + "/sitemap.json");
// });
// listen for requests :)
const listener = app.listen(8000, function () {
    console.log("Your app is listening on port " + listener.address().port);
});