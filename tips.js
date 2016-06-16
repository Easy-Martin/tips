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
    tipsEle.style.padding = '2px 6px 4px 6px';
    tipsEle.style.borderRadius = '2px';
    tipsEle.style.opacity = '0';
    tipsEle.style.zIndex = '9999';
    tipsEle.style.transition = 'opacity 0.5s';
    tipsEle.style.left = '50%';
    tipsEle.style.WebkitTransform = 'translate3d(-50%,0,0)';
    if (local == 'top') {
      tipsEle.style.top = '8px';
    } else if (local == 'center') {
      tipsEle.style.top = yT / 2 + 'px';
    } else {
      tipsEle.style.bottom = '8px';
    }
    document.body.appendChild(tipsEle);
    setTimeout(function() {
      tipsEle.style.opacity = '1';
    }, 50);
    setTimeout(function() {
      tipsEle.style.opacity = '0';
    }, 2000);
    setTimeout(function() {
      document.body.removeChild(tipsEle);
    }, 2500);
  }
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return tips;
    })
  } else {
    global.tips = tips;
  }
})(this)
