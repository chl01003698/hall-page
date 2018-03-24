(function (doc, win) {
  var dpr
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var refreshRem = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    var fz
    var maxWidth = 768
    var width = clientWidth
    if (clientWidth / dpr > maxWidth) {
      width = maxWidth * dpr
    }
    fz = 16 * (width / 375)
    docEl.style.fontSize = fz + 'px'
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, refreshRem, false)
  doc.addEventListener('DOMContentLoaded', refreshRem, false)
  refreshRem()
})(document, window)
