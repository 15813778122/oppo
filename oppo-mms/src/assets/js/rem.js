/* 移动端适配 */
;(function(doc, win, width){
    var docEl = doc.documentElement;
    var head = doc.getElementsByTagName("head")[0];
    var hFirst = head.firstChild || head.firstElementChild; 
    var cssEl = doc.createElement('style');
    //手机横屏，竖屏可在此处设置 
    var resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';
    var recalc = function() {   
      var x; 
      var n = win.devicePixelRatio;      
      if (n >= 3) {                
          x = 3;                    
      } else if (n >= 2){
          x = 2;
      } else {
          x = 1;
      }
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      var pxPerRem = 100*(clientWidth / width);
      cssEl.innerHTML = 'html{ font-size:' + pxPerRem + 'px!important; }';
      docEl.setAttribute("data-dpr", x);   //x 限制范围取值 1,2,3
      head.appendChild(cssEl);   
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window,750)
  // 若初始化为 375px, 此时整个屏幕宽度为 3.75rem
  // 若初始化为 750px, 此时整个屏幕宽度为 7.5rem
  // 若初始化为 640px,(document, window,640), 此时整个屏幕宽度为 6.4rem  
  // 本例以 750 的设计稿为例， 最终结果 1rem = 100px