"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var html_pdf_1 = require("html-pdf");
var cors_1 = require("cors");
var pdfTemplate_1 = require("./pdfTemplate");
var app = (0, express_1.default)();
var port = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.post('/create-pdf', function (req, res) {
    var _a = req.body, lastname = _a.lastname, firstname = _a.firstname;
    var pdfFileName = "".concat(lastname, "_").concat(firstname, "_diplome.pdf");
    html_pdf_1.default.create((0, pdfTemplate_1.default)(req.body), {}).toFile(pdfFileName, function (err) {
        if (err) {
            res.status(500).send('Error');
        }
        else {
            res.status(200).send('created');
        }
    });
});
app.get('/fetch-pdf', function (req, res) {
    res.sendFile("".concat(__dirname, "/diplome.pdf"));
});
app.listen(port, function () { return console.log("Server is running on port ".concat(port)); });
