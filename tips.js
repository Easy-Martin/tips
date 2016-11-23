'use strict'
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
    var num = 0;
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
      WebkitTransform:'translate3d(-50%,0,0)',
    }
    tipsEle.innerHTML = tipStr;
    for (var variable in _style) {
      tipsEle.style[variable] = _style[variable];
    }
    document.body.appendChild(tipsEle);
    setTimeout(function(){
      tipsEle.style.opacity = '1';
    },50)
    
    tipsEle.addEventListener('webkitTransitionEnd',function(){
        num++;
        switch (num) {
          case 1:
            setTimeout(function() {
              tipsEle.style.opacity = '0';
            }, 1000);
            break;
          case 2:
            document.body.removeChild(tipsEle);
            num = null;
            tipsEle = null;
            _style = null;
            break;
          default:
            break;
        }
    },false)
  };
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return tips;
    })
  } else {
    global.tips = tips;
  }
})(this);
