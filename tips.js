/*
  tips插件:
    @author HuangJingJing
    @param  {String}
*/
;
(function(global) {
  var tips = function(tipStr) {
    if (!tipStr) {
      throw new Error('param is empty');
    }
    var tipsEle = document.createElement('span');
    var _style = {
      position:'absolute',
      fontSize:'12px',
      background:'#333',
      color:'#fff',
      padding:'2px 6px 4px 6px',
      WebkitBorderRadius:'2px',
      opacity:'0',
      zIndex:'999',
      WebkitTransition:'opacity 0.5s',
      left:'50%',
      bottom:'8px',
      WebkitTransform:'translate3d(-50%,0,0)'
    }
    tipsEle.innerHTML = tipStr;
    for (var variable in _style) {
      tipsEle.style[variable] = _style[variable];
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
