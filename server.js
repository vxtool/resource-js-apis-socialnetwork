var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var successTwitter = function (data) {
    console.log('%s', data );
};

var Twitter = require('twitter-node-client').Twitter;

var config = {
    "consumerKey": "37Ir6ZrnAgj45E1ljtkRKg",
    "consumerSecret": "cgic9Zk51ZmtWNEFol9c3Nc9DBtJCfKqOrl93cUXM",
    "accessToken": "18233169-58uKOUni77ZeDnkBQTHvVdjRDiQNJrBFKtcQ4dWSw",
    "accessTokenSecret": "QR9gSrp0xSKRCW1ssFr6coTGwy2tebfu7mlt241qSH3T2",
    "callBackUrl": ""
}

var twitter = new Twitter(config);

twitter.getCustomApiCall('/statuses/user_timeline.json',{ user_id: '39559643', count: 1}, error, successTwitter);


//$.get('https://graph.facebook.com/211507302250582?access_token=315317708826193|909a4d6b1d264e443897a5fa7b5ff947&fields=fan_count', function(data){ console.log(data.fan_count); });
//$.get('https://www.googleapis.com/plus/v1/people/112252148654825433693?key=AIzaSyC_RtYZ840FjpoX2MxeKitwMxcTdeKbhMw', function(data){ console.log(data.plusOneCount); });
//$.get('https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=CanalShoptime&key=AIzaSyBlSKDOCa5l0K58zpoc5Bv7am5asyWACec', function(data){ console.log(data.items[0].statistics.subscriberCount); });
