var request = require('request');

function main() {
	var url = 'https://tmpnb.kimstebel.com:8000/api/stats';
  request.get(url, function(error, response, body) {
    var available = JSON.parse(body).available;
    var options = {
      url: 'https://api.postmarkapp.com/email',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': 'AAAPOSTMARKTOKENAAA'
      },
      json: true,
      body: { From: 'mail@kimstebel.com', To: 'kim.stebel@gmail.com', Subject: 'Postmark test', HtmlBody: '<html><body>Only ' + available + ' available.</body></html>' }
    };
    if (available < 20) {
      request.post(options, function(error, response, body) {});
    }
    whisk.done({available: available});
  });

  return whisk.async();
}


