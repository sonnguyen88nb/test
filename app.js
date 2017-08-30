var request = require('request');  
var cheerio = require('cheerio');

var url = 'http://vnexpress.net/tin-tuc/the-gioi/quan-su/ly-do-ten-lua-trieu-tien-bay-qua-nhat-ban-khong-bi-ban-ha-3634179.html';

request(url, function(err, response, body){  
  if (!err && response.statusCode == 200) {
    var $ = cheerio.load(body);
    console.log($('.block_col_480 h1').text());
  }
  else console.log('Error');
})