//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use("/public", express.static(__dirname + "/public")); //لتفعيل ملفات السي اس اس


var items = []; // هنا سوينه متغير اسمه ايتيمز يخزن بيه قيم الدخلناه بالبوست  الي هي اسمه ايتيم




app.get("/", function (req, res) {


  var D = new Date();
  options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };
  var date = D.toLocaleDateString("ar-iq", options);

  var totalItems = items.length
  if (totalItems === 0) {
   var a = "nothing"
  } else {
    a = totalItems;
  }
  res.render("list", {
    dateee: date,
    total_i: a,
    s: items //هنا المصفوفة الفارغه بعد ما ضفنه بيه عناصر راح نكدر ندزه للصفحة مال ي ج س
  });
  
});

app.post("/", function (req, res) {

  var item = req.body.toDoItem;
  console.log(item);
  items.push(item); //هنا ندز قيم الايتيم لل مصفوفة الفارغه فوك
  res.redirect("/"); //هنا استخدمنه توجيه للرووت حتى لمن نسوي بوش للايتيمز راح يصعد فوك وراه ينزل لل اب دوت كيت يلكه الايتيمز بيه قيمه مو مثل اول مره فارغه

});





app.listen( process.env.PORT || 4000, function () {
  console.log("Server started on port 4000.");
});