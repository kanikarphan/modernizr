Modernizr
=====================
Modernizr does not enable HTML5 and CSS3 functionalities in browsers that do not support them. Modernizr's primary purpose is to allow you to offer "backup" styling in browsers that do not support certain HTML5 and CSS3 features. Afterward Modernizr will add classes for every feature it detects, prefixing them with "no-" if the browser doesn't support it. 

* Modernizr includes the <a herf="http://remysharp.com/2009/01/07/html5-enabling-script/" target="_blank">HTML5 "shim" script</a>. 
* Modernizr also creates a JavaScript object, simply called Modernizr, which has a list of properties that contain boolean values for each feature.
* Modernizr.load can be used for loading polyfills scripts only in the browsers that need it.

## Getting started with Modernizr
Include 'modernizr-2.6.2.min.js' in the page's `<head>` section or <a href="http://modernizr.com/download/" target="_blank">build your own</a>.

This is the <a href="http://modernizr.com/download/#-fontface-backgroundsize-borderradius-boxshadow-opacity-rgba-textshadow-cssanimations-generatedcontent-cssgradients-csstransforms-csstransforms3d-csstransitions-canvas-canvastext-draganddrop-hashchange-history-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-geolocation-svg-touch-printshiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load" target="_blank">development version that is being used</a>.

When Modernizr is loaded the `<html>` element will look something like this:
```
<html class="js canvas canvastext no-touch geolocation postmessage hashchange history draganddrop websockets rgba backgroundsize borderradius boxshadow textshadow opacity cssanimations cssgradients csstransforms csstransforms3d csstransitions fontface generatedcontent localstorage sessionstorage svg">
```

## How to use it
CSS to style things differently, depending on whether a feature is supported or not. Might do something like this with the CSS:
```
.no-borderradius .box {
  border: solid 1x black;
}
.borderradius .box {
  border: solid 1px black;
  border-radius: 100%;
} 
```

Options to use conditional branching inside an already existing script. For example, Using HTML5's new placeholder feature, you might have the following in your JavaScript:
```
if (!Modernizr.input.placeholder) {
  // placeholder not supported;
  // do stuff to mimic it here } 
```

Conditionally loading scripts, this feature of Modernizr is called Modernizr.load(). It's included as an option in the Modernizr build, but can also be used as a standalone script called yepnope.js instead of Modernizr. In the javascript file you might have something like this:
```
Modernizr.load({
  test: Modernizr.cssanimations,
  yep : 'animations.css',
  nope: 'animations-polyfill.js' }); 
```

## What's the extra code for?
The included build of Modernizr has custom code for device, browser, and dpi detection. This will test for  `android`, `chrome`, `firefox`, `iemobile`, `ie10`, `ios`, `mobile`, `retina`, and `safari`.
```
Modernizr.addTest('android',function(){return!!navigator.userAgent.match(/Android/i)});
Modernizr.addTest('chrome',function(){return!!navigator.userAgent.match(/Chrome/i)});
Modernizr.addTest('firefox',function(){return!!navigator.userAgent.match(/Firefox/i)});
Modernizr.addTest('iemobile',function(){return!!navigator.userAgent.match(/IEMobile/i)});
Modernizr.addTest('ie10',function(){return!!navigator.userAgent.match(/MSIE 10/)});
Modernizr.addTest('ios',function(){return!!navigator.userAgent.match(/iPhone|iPad|iPod/i)});
Modernizr.addTest('mobile',function(){return!!navigator.userAgent.match(/android.+mobile|avantgo|bada\/|MeeGo|NokiaN9|blackberry|BlackBerry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|pad|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i)});
Modernizr.addTest('retina',function(){var ratio="2.99/2";var num="1.499";var mqs=["only screen and (-o-min-device-pixel-ratio:"+ratio+")","only screen and (min--moz-device-pixel-ratio:"+ratio+")","only screen and (-webkit-min-device-pixel-ratio:"+num+")","only screen and (min-device-pixel-ratio:"+num+")"];var isRetina=false;for(var i=mqs.length-1;i>=0;i--){isRetina=Modernizr.mq(mqs[i]);if(isRetina)return isRetina}return isRetina});
Modernizr.addTest('safari',function(){return!navigator.userAgent.match(/Chrome/i)&&!navigator.userAgent.match(/iPhone|iPad|iPod/i)&&!!navigator.userAgent.match(/Safari/i)});
```

Why is there a test for ie10 (Lack of trust in MSIE)?
Microsoft has decided to <a href="http://www.sitepoint.com/microsoft-drop-ie10-conditional-comments/" target="_blank">remove conditional comments from Internet Explorer 10</a> so the test is a fallback for this.