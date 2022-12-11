$(document).ready(function (e) {
  $('.copyright').html(
    '©2022 <i class="fa-fw fas fa-heartbeat card-announcement-animation cc_pointer" style="color:red"></i> By Lichlaughing'
  )
})
$(document).ready(function (e) {
  showDateTime()
})
$(document).ready(function (e) {
  customText()
})
//本站运行时间
function showDateTime() {
  $('.framework-info').html(
    '本站已运行 <span id="span_dt_dt" style="color: #fff;"></span> '
  )
  window.setTimeout('showDateTime()', 1000)
  BirthDay = new Date('1/1/2022 0:0:0')
  today = new Date()
  timeold = today.getTime() - BirthDay.getTime()
  sectimeold = timeold / 1000
  secondsold = Math.floor(sectimeold)
  msPerDay = 24 * 60 * 60 * 1000
  e_daysold = timeold / msPerDay
  daysold = Math.floor(e_daysold)
  e_hrsold = (e_daysold - daysold) * 24
  hrsold = Math.floor(e_hrsold)
  e_minsold = (e_hrsold - hrsold) * 60
  minsold = Math.floor((e_hrsold - hrsold) * 60)
  seconds = Math.floor((e_minsold - minsold) * 60)
  span_dt_dt.innerHTML =
    '<font style="color:#afb4db">' +
    daysold +
    '</font> 天 <font style="color:#f391a9">' +
    hrsold +
    '</font> 时 <font style="color:#fdb933">' +
    minsold +
    '</font> 分 <font style="color:#a3cf62">' +
    seconds +
    '</font> 秒'
}
function customText() {
  $('.footer_custom_text').html(
    ' <img style="vertical-align:middle" src="https://blog.lichenghao.cn/upload/2022/04/beian.png"><a style="text-decoration: none;" target="_blank" href="https://beian.miit.gov.cn">京ICP备18059158号-4</a>. 辽公网安备21132102000028号.'
  )
}
