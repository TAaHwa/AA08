// dbtest.js
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var SensorSchema = new mongoose.Schema({
  data: String,
  created: String,
});

// data model
var Sensor = mongoose.model("Sensor", SensorSchema);

var sensor1 = new Sensor({ data: "124", created:getDateSring() });
sensor1.save();

var sensor2 = new Sensor({ data: "573", created:getDateSring() });
sensor2.save();

console.log("[dbtest2.js]: Sensor data were saved in MongoDB");

function getDateSring(){
    var time = new Date().getTime();
    var datestr = new Date(time + 32400000)
    .toISOString()
    .replace(/T/," ")
    .replace(/Z/,"");
    return datestr;
}
