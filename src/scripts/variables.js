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

var kidNotificationMessage = [
    "BREAKFAST TIME!",
    "LUNCH TIME!",
    "DINNER TIME!",
    "BEDTIME!"
];

tdata =  [
    {
        "calculated_bgl": 6.6,
        "timestamp": "2017-09-01 07:00:00"
    },
    {
        "calculated_bgl": 8.1,
        "timestamp": "2017-09-01 12:00:10"
    },
    {
        "calculated_bgl": 9.1,
        "timestamp": "2017-09-01 18:00:10"
    },
    {
        "calculated_bgl": 6.0,
        "timestamp": "2017-09-01 21:00:10"
    },
    {
        "calculated_bgl": 7.4,
        "timestamp": "2017-09-02 07:00:01"
    },
    {
        "calculated_bgl": 6.3,
        "timestamp": "2017-09-02 12:00:10"
    },
    {
        "calculated_bgl": 8.0,
        "timestamp": "2017-09-02 18:00:10"
    },
    {
        "calculated_bgl": 8.9,
        "timestamp": "2017-09-02 21:00:10"
    },
    {
        "calculated_bgl": 9.3,
        "timestamp": "2017-09-03 07:00:10"
    },
    {
        "calculated_bgl": 11.8,
        "timestamp": "2017-09-03 12:00:10"
    }
];