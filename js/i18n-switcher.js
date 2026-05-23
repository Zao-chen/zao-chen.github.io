(function () {
  var links = document.querySelectorAll('link[rel="alternate"][hreflang]');
  if (!links.length) return;

  var targets = {};
  links.forEach(function (link) {
    targets[link.getAttribute('hreflang')] = link.getAttribute('href');
  });

  document.querySelectorAll('#navbar a[href]').forEach(function (anchor) {
    var text = (anchor.textContent || '').trim().toLowerCase();
    if (text === 'english' && targets.en) {
      anchor.href = targets.en;
    }
    if ((text === '中文' || text === 'chinese') && targets['zh-CN']) {
      anchor.href = targets['zh-CN'];
    }
  });
})();

