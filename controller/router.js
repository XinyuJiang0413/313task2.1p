var formidable = require("formidable");
const sgMail = require("@sendgrid/mail");


const SENDGRID_API_KEY =
    "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";
sgMail.setApiKey(SENDGRID_API_KEY);


exports.openhomepage = function (req, res) {
    res.render("index");
};
exports.welcomeuser = function (req, res) {
    var form = new formidable.IncomingForm();
    console.log(form);
    var email="";
    form.parse(req, function (err, fields, files) {
        email=fields.useremail
    });



    var msg = {
      to: email,
      from: "samonjiang@gmail.com",
      subject: "Welcome to DEV@Deakin platform",
      html: "<h3>Welcome to DEV@Deakin platform</h3> <p>You will recieve my project update when i post a new project</p>",
  };
    sgMail.send(msg);
    res.json("send email success");
  };