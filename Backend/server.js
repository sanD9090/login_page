const express = require("express");
const bodyparser = require("body-parser");
const sql = require("mssql/msnodesqlv8");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const nodemailer = require('nodemailer');
const { info } = require("console");
const SMTPTransport = require("nodemailer/lib/smtp-transport");
const { body } = require("express-validator");

const app = express();
const port = 8080;
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.listen(port, function () {
  console.log(`server started on port ${port}`);
});

//   test !!!!!!!!!!!!!!!!!
// app.use(express.static(path.join(__dirname + "/uploads")));

var fileStorageEngine = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },

  filename: function (req, file, cb) {
    cb(null, "uploaded_file");
  },
});

//upload function
var upload = multer({ storage: fileStorageEngine });



// database config case 1!
// const config = {
//   user: "sa",
//   password: "sandeep6969",
//   database: "customer_webportal",
//   server: "KISHAN\\SQLEXPRESS",
//   options: {
//     trustedConenction: true,
//     trustServerCertificate: true,
//     encrypt: false,
//   },
// };

//db config 2
var config = {
  server: "KISHAN\\SQLEXPRESS",
  database:  "customer_webportal",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
    encrypt: false,
  }
}




// app.use("/first",firstroute);

// //index page
// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

app.post("/login", function (req, res) {
  sql.connect(config, function (err) {
    if (err) {
      console.log(err);
    }
    var sqlRequest = new sql.Request();
    for (var i = 0; i < Object.keys(req.body).length; i++) {
      console.log(Object.keys(req.body)[i], Object.values(req.body)[i]);
      sqlRequest.input(Object.keys(req.body)[i], Object.values(req.body)[i]);
    }
    sqlRequest.execute(`spCheckEmail  `, function (err, recordset) {
      if (err) {
        res.status(400);
        res.send(err);
        console.log(err);
      } else {
        console.dir(recordset);
        res.status(200);
        res.send(recordset);
      }
    });
  });
});

app.get("/userdata", function (req, res) {
  sql.connect(config, function (err) {
    if (err) {
      console.log(err);
    }
    var sqlRequest = new sql.Request();
    for (var i = 0; i < Object.keys(req.body).length; i++) {
      console.log(Object.keys(req.body)[i], Object.values(req.body)[i]);
      sqlRequest.input(Object.keys(req.body)[i], Object.values(req.body)[i]);
    }
    sqlRequest.execute(`spGetUsers `, function (err, recordset) {
      if (err) {
        res.status(400);
        res.send(err);
        console.log(err);
      } else {
        console.dir(recordset);
        res.status(200);
        res.send(recordset);
      }
    });
  });
});

app.post("/userdatapost", function (req, res) {
  sql.connect(config, function (err) {
    if (err) {
      console.log(err);
    }
    var sqlRequest = new sql.Request();
    for (var i = 0; i < Object.keys(req.body).length; i++) {
      console.log(Object.keys(req.body)[i], Object.values(req.body)[i]);
      sqlRequest.input(Object.keys(req.body)[i], Object.values(req.body)[i]);
    }
    sqlRequest.execute(`spNew`, function (err, recordset) {
      if (err) {
        res.status(400);
        res.send(err);
        console.log(err);
      } else {
        console.dir(recordset);
        res.status(200);
        res.send(recordset);
      }
    });
  });
});

app.post("/deleteuser", function (req, res) {
  sql.connect(config, function (err) {
    if (err) {
      console.log(err);
    }
    var sqlRequest = new sql.Request();
    for (var i = 0; i < Object.keys(req.body).length; i++) {
      console.log(Object.keys(req.body)[i], Object.values(req.body)[i]);
      sqlRequest.input(Object.keys(req.body)[i], Object.values(req.body)[i]);
    }
    sqlRequest.execute(`spDeleteRow`, function (err, recordset) {
      if (err) {
        res.status(400);
        res.send(err);
        console.log(err);
      } else {
        console.dir(recordset);
        res.status(200);
        res.send(recordset);
      }
    });
  });
});

app.post("/edituser", function (req, res) {
  sql.connect(config, function (err) {
    if (err) {
      console.log(err);
    }
    var sqlRequest = new sql.Request();
    for (var i = 0; i < Object.keys(req.body).length; i++) {
      console.log(Object.keys(req.body)[i], Object.values(req.body)[i]);
      sqlRequest.input(Object.keys(req.body)[i], Object.values(req.body)[i]);
    }
    sqlRequest.execute(`spEdit`, function (err, recordset) {
      if (err) {
        res.status(400);
        res.send(err);
        console.log(err);
      } else {
        console.dir(recordset);
        res.status(200);
        res.send(recordset);
      }
    });
  });
});







///csv upload

app.post("/single",upload.single("file"), function (req, res)  {
sql.connect(config, function (err) {
  if (err) {
    console.log(err);
  }

  var sqlRequest = new sql.Request();

  sqlRequest.query(`BULK INSERT [dbo].[category]
  FROM "C:/Users/Sandeep Pradhan/Documents/practice_space/angular_space/login/node/uploads/uploaded_file"
  WITH(
  FIELDTERMINATOR = ','
  )`);
});
//end


  
});

//nodemailer 💥

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure:true,
    auth:{
      user:'dummymail15152@gmail.com',
      pass:'vzqgclawipjxezzn'
    },
    tls: {
      rejectUnauthorized: false
  }
  });

  

  app.post("/postmail", function(req, res){
    var email = JSON.stringify(req.body.emailid);

    const options = {
      from:"dummymail15152@gmail.com",
      to:email,
      subject:"subject 1234",
      html:`<p> Firstname:${req.body.firstname} </p> <br/> <p> Lastname:${req.body.lastname}</p><br/>  <p> Email: ${req.body.emailid}</p> <br/> <p> Password:${req.body.password}</p>`,
    };
    transporter.sendMail(options, function(err){
      if(err){
        console.log(err);
      }
      console.dir("sent " );
      console.log(email);
    });
    //databse push
    sql.connect(config, function (err) {
      if (err) {
        console.log(err);
      }
      var sqlRequest = new sql.Request();
      for (var i = 0; i < Object.keys(req.body).length; i++) {
        console.log(Object.keys(req.body)[i], Object.values(req.body)[i]);
        sqlRequest.input(Object.keys(req.body)[i], Object.values(req.body)[i]);
      }
      sqlRequest.execute(`spNew`, function (err, recordset) {
        if (err) {
          res.status(400);
          res.send(err);
          console.log(err);
        } else {
          console.dir(recordset);
          res.status(200);
          res.send(recordset);
        }
      });
    });

});





