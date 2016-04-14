var request = require('request'); // request library for making http requests

function main() {
	var url = 'https://tmpnb.kimstebel.com:8000/api/stats'; // stats endpoint telling you how many docker containers are available in tmpnb server
  request.get(url, function(error, response, body) {
    var available = JSON.parse(body).available; // number of available docker containers
    var options = { // http request to send an email via postmark
      url: 'https://api.postmarkapp.com/email',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': 'AAAPOSTMARKTOKENAAA' //auth token gets inserted here
      },
      json: true,
      body: { From: 'mail@kimstebel.com', To: 'kim.stebel@gmail.com', Subject: 'Postmark test', HtmlBody: '<html><body>Only ' + available + ' available.</body></html>' }
    };
    if (available < 20) { //not enough containers available?
      request.post(options, function(error, response, body) {}); //email me
    }
    whisk.done({available: available}); // include number of available containers in action result
  });

  return whisk.async();
}


