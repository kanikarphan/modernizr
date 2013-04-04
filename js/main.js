var modz = (function ($, window, document, undefined) {
  $(document).ready(function () {
    modz.run();
  });
  return {
    run: function () {
      var i, j = this.init;
      for (i in j) {
        j.hasOwnProperty(i) && j[i]();
      }
    },
    init: {
      isBrowser: function() {
        Modernizr.load({
          test: Modernizr.generatedcontent,
          nope: 'css/ie7-icon.css'
        });
        if(!Modernizr.geolocation) {
          modz.util.isOutdated();
        }

      }
    }, 
    util: {
      isOutdated: function() {
        var _out = $('.outdated');
        _out.fadeIn(800);
      }
    }
  };
  // parameters: jQuery, window, document.
})(jQuery, window, document);