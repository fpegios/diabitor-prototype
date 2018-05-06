kidHistoryMeasurement = 0;
parentHistoryMeasurement = 0;
currentMode = "parent";

// Kid details
var kid = {
    active: false,
    name:"",
    age:"",
    regimenType:"",
    icRatio:"",
    breakfastTime: "",
    lunchTime: "",
    dinnerTime: "",
    bedTime: "",
    breakfastDose: "",
    lunchDose: "",
    dinnerDose: "",
    bedDose: "",
    isTeen: false,
    hasNewMeasurement: false
};

var measurements = [];
var measurement = []

var measurementFace = [
    "assets/face-low.png",
    "assets/face-high.png",
    "assets/face-ok.png"
];

var measurementImage = [
    "assets/tube-low.png",
    "assets/tube-high.png",
    "assets/tube-ok.png"
];

var measurementMessage = [
    "NEED SUGAR!",
    "MEDICINE!",
    "OK!"
];

var measurementFeedbackImg = [
    "assets/sugar.png",
    "assets/dose.png",
    "assets/ok.png"
];

var measurementAction = [
    "DRINK JUICE!",
    "DOSE!",
    "OK!",
    "DOSES!",
];