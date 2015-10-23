/*
  tips插件:
    @author HuangJingJing
    @param  {String}
*/
;
(function(global) {
  var tips = function(tipStr, place) {
    var tipsEle = document.createElement('span');
    var local = place || 'bottom';
    tipsEle.innerHTML = tipStr;
    tipsEle.style.position = 'absolute';
    tipsEle.style.fontSize = '12px';
    tipsEle.style.background = '#333';
    tipsEle.style.color = '#fff';
    tipsEle.style.padding = '2px 6px';
    tipsEle.style.borderRadius = '2px';
    tipsEle.style.opacity = '0';
    tipsEle.style.zIndex = '9999';
    tipsEle.style.transition = 'all 0.5s';
    document.body.appendChild(tipsEle);
    var xL = parseInt(document.body.clientWidth) - parseInt(tipsEle.clientWidth);
    var yT = parseInt(document.body.clientHeight) - parseInt(tipsEle.clientHeight);
    if (local == 'top') {
      tipsEle.style.top = '8px';
    } else if (local == 'center') {
      tipsEle.style.top = yT / 2 + 'px';
    } else {
      tipsEle.style.bottom = '8px';
    }
    tipsEle.style.left = xL / 2 + 'px';
    setTimeout(function() {
      tipsEle.style.opacity = '1';
      setTimeout(function() {
        tipsEle.style.opacity = '0';
        setTimeout(function() {
          document.body.removeChild(tipsEle);
        }, 1000)
      }, 800)
    }, 50);
  }
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return tips;
    })
  } else {
    global.tips = tips;
  }
})(this)
