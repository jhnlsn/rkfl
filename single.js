var nl = require('nodeload');

var rocketfuel = nl.run({
  host: '20501671p.rfihub.com',
  port: 80,
  timeLimit: 30,
  targetRps: 500,
  numClients: 10,
  stats: ['latency','result-codes','concurrency',{ name: 'http-errors', successCodes: [200,301,302], log: 'http-errors.log' }],
  requestGenerator: function(client) {
    var request = client.request('GET', "/ca.gif?rb=3035&ca=20501671&ra=" + Math.floor(Math.random()*10000));
    request.end();
    return request;
  }
});

rocketfuel.on('end', function() { console.log('Load test done.'); });