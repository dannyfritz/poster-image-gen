var webPage = require('webpage');
var page = webPage.create();

page.viewportSize = {
  width: 4800,
  height: 8000
};

page.open('http://www.reddit.com/r/technology/comments/27ypih/netflix_responds_to_verizon_to_try_to_shift_blame/', function () {
  page.render('asdf.png');
  phantom.exit();
});
