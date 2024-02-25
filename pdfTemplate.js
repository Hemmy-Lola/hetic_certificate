"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generatePdfTemplate = function (_a) {
    var lastname = _a.lastname, firstname = _a.firstname, birthday = _a.birthday, birthplace = _a.birthplace, option = _a.option, mention = _a.mention;
    var today = new Date();
    return "\n    <!DOCTYPE html>\n    <html lang=\"fr\">\n    <head>\n      <meta charset=\"UTF-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <title>Certificate</title>\n      <style>\n        @font-face {\n          font-family: \"Dystopian Black\";\n          src: url(\"https://db.onlinewebfonts.com/t/20af36ba0a52c9a46fe2963f400bd77c.eot\");\n          src: url(\"https://db.onlinewebfonts.com/t/20af36ba0a52c9a46fe2963f400bd77c.eot?#iefix\")format(\"embedded-opentype\"),\n          url(\"https://db.onlinewebfonts.com/t/20af36ba0a52c9a46fe2963f400bd77c.woff2\")format(\"woff2\"),\n          url(\"https://db.onlinewebfonts.com/t/20af36ba0a52c9a46fe2963f400bd77c.woff\")format(\"woff\"),\n          url(\"https://db.onlinewebfonts.com/t/20af36ba0a52c9a46fe2963f400bd77c.ttf\")format(\"truetype\"),\n          url(\"https://db.onlinewebfonts.com/t/20af36ba0a52c9a46fe2963f400bd77c.svg#Dystopian Black\")format(\"svg\");\n        }\n    \n        @font-face {\n          font-family: \"Open Sans\";\n          src: url(\"https://db.onlinewebfonts.com/t/629a55a7e793da068dc580d184cc0e31.eot\");\n          src: url(\"https://db.onlinewebfonts.com/t/629a55a7e793da068dc580d184cc0e31.eot?#iefix\")format(\"embedded-opentype\"),\n          url(\"https://db.onlinewebfonts.com/t/629a55a7e793da068dc580d184cc0e31.woff2\")format(\"woff2\"),\n          url(\"https://db.onlinewebfonts.com/t/629a55a7e793da068dc580d184cc0e31.woff\")format(\"woff\"),\n          url(\"https://db.onlinewebfonts.com/t/629a55a7e793da068dc580d184cc0e31.ttf\")format(\"truetype\"),\n          url(\"https://db.onlinewebfonts.com/t/629a55a7e793da068dc580d184cc0e31.svg#Open Sans\")format(\"svg\");\n        }\n    \n        *{\n            margin: 15px;\n        }\n        .container {\n            position: relative;\n            text-align: center; \n            align-items: center;\n          }\n      \n          .certificate {\n            position: relative;\n            z-index: 1; \n          }\n      \n          .logo {\n            margin: 15px;\n            width: 160px;\n            height: 69px;\n            background-image: url('logo_hetic.svg');\n          }\n        \n        h1 {\n          font-size: 150px;\n          font-family: \"Dystopian Black\";\n          color: #14F5AA;\n        }\n\n        h2{\n            font-family:30px;\n            color: #181818;\n            font-family: \"Open Sans\";\n        }\n    \n        p {\n          font-size: 25px;\n          font-family: \"Open Sans\";\n          color: #181818;\n        }\n\n        strong{\n            font-family: \"Dystopian Black\";\n            color: #181818;\n        }\n        \n        >\n      </style>\n    </head>\n    <body>\n      <div class=\"container\">\n      <div class=\"logo\"></div>\n        <div class=\"certificate\">\n          <h2><i>Comit\u00E9 des Heticiens</i></h2>\n          <h1>CERTIFICATE</h1>\n          <p>Le comit\u00E9 national des d\u00E9veloppeurs d'Hetic \n          \u00E0 l'honneur apr\u00E8s d\u00E9lib\u00E9ration d'attribuer \u00E0 <strong>".concat(lastname, " ").concat(firstname, "</strong>, \n          n\u00E9(e) le <strong>").concat(birthday, "</strong> \n          \u00E0 <strong>").concat(birthplace, "</strong>, \n          le dipl\u00F4me de <strong>").concat(option, "</strong> \n          avec la mention <strong>").concat(mention, "</strong>.</p>\n          <p>Fait \u00E0 Paris</p>\n          <p>Le ").concat(today.toLocaleDateString('fr-FR'), " </p>\n          <div class=\"president_signature\">\n          <p>Signature de la Pr\u00E9sidente</p>\n          <div class=\"signature\">\n           <div>\n          </div>\n          <div class=\"diplome_signature\">\n          <p>Signature du/de la Dipl\u00F4m\u00E9(e)</p>\n          </div>\n        </div>\n      </div>\n    </body>\n    </html>\n    ");
};
exports.default = generatePdfTemplate;
