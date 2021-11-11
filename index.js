const express = require('express');
const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
 res.render("main");
});
app.get("/barcodelabels", function(req, res) {
 res.render("barcodelabels");
});
app.get("/thermalribbons", function(req, res) {
 res.render("thermalribbons");
});
app.get("/gunlabels", function(req, res) {
 res.render("gunlabels");
});
app.get("/computerlabels", function(req, res) {
 res.render("computerlabels");
});
app.get("/hololabels", function(req, res) {
 res.render("hololabels");
});
app.get("/adhesivelabels", function(req, res) {
 res.render("adhesivelabels");
});
app.get("/taglabels", function(req, res) {
 res.render("taglabels");
});
app.get("/barcodeprinters", function(req, res) {
 res.render("barcodeprinters");
});
app.get("/barcodescanners", function(req, res) {
 res.render("barcodescanners");
});
app.get("/billingprinters", function(req, res) {
 res.render("billingprinters");
});
app.get("/scannersoftware", function(req, res) {
 res.render("scannersoftware");
});
app.get("/scannerhardware", function(req, res) {
 res.render("scannerhardware");
});
app.listen(3000);
