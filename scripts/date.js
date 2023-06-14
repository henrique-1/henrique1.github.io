$(document).ready(function () {
  $('span[id^="currentYear"').text(function () {
    let d = new Date();
    return d.getFullYear();
  });
});
