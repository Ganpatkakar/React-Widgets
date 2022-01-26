_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"6jD+":function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return l}));t("q1tI");var a=t("uUdh"),r=t("c2c2"),o=t("5Yp1"),d=t("nKUr");function l(){return Object(d.jsxs)(o.a,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Calendar Component, check at git repo"}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"https://github.com/Ganpatkakar/Calendar",target:"_blank",rel:"noopener noreferrer",children:"Calendar repo"})}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"http://ganpatkakar.github.io/Calendar/",target:"_blank",rel:"noopener noreferrer",children:"Calendar Sample"})})]}),Object(d.jsx)("h3",{children:"Note: This is a HTML CSS and jQuery code sample and it can be further modified and used"}),Object(d.jsx)(a.a,{language:"html",style:r.materialOceanic,children:'\n  <!DOCTYPE html>\n  <html>\n  <head>\n    <title>Calendar page</title>\n    <link rel="stylesheet" href="style.css">\n  </head>\n  <body>\n  \n    <div id="calendar-container">\n        <div id="calendar-header">\n          <span class="prev" style="float: left;"> &lang; </span>\n          <span id="calendar-month-year"></span>\n          <span class="next" style="float: right;"> &rang; </span>\n        </div>\n        <div id="calendar-dates">\n  \n        </div>\n    </div>\n  \n    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"><\/script>\n    <script src="js/script.js"><\/script>\n  \n  </body>\n  </html>\n  \n  '}),Object(d.jsx)("h3",{children:"Style code"}),Object(d.jsx)(a.a,{language:"css",style:r.materialOceanic,children:'\n  #calendar-container{\n      -moz-box-shadow:0px 3px 3px rgba(0, 0, 0, 0.25); \n      -webkit-box-shadow:0px 3px 3px rgba(0, 0, 0, 0.25); \n      margin:50px auto; \n      font: 13px/1.5 "Helvetica Neue", Helvatica, Arial, san-serif; \n      display:table; \n  }\n  #calendar-header {\n      cursor:default; \n      background: #cd310d; \n      background: -moz-linear-gradient(top, #b32b0c, #cd310d); \n      background: -webkit-gradient(linear, left top, left bottom, from(#b32b0c), to(#cd310d)); \n      height: 34px; \n      position: relative; \n      color:#fff; \n      -webkit-border-top-left-radius: 5px; \n      -webkit-border-top-right-radius: 5px; \n      -moz-border-radius-topleft: 5px; \n      -moz-border-radius-topright: 5px; \n      border-top-left-radius: 5px; \n      border-top-right-radius: 5px; \n      font-weight:bold; \n      text-shadow:0px -1px 0 #87260C; \n      text-transform: uppercase; \n  }\n  #calendar-header span { \n      display:inline-block; \n      line-height:34px; \n  }\n  .prev {\n      left:0; \n      -webkit-border-top-left-radius: 5px; \n      -moz-border-radius-topleft: 5px; \n      border-top-left-radius: 5px; \n      border-right:1px solid #ae2a0c;\n  }\n  .next {\n      right:0; \n      top:0; \n      border-left:1px solid #ae2a0c; \n      -webkit-border-top-right-radius: 5px; \n      -moz-border-radius-topright: 5px; \n      border-top-right-radius: 5px; \n  }\n  .prev , .next {\n      width:24px; \n      text-align:center; \n      position:absolute; \n  }\n  #calendar-month-year{\n      letter-spacing: 1px;\n      width: 100%;\n      text-align: center;\n  }\n  #calendar-dates table { \n      background:#fff; \n      border-collapse:collapse; \n  } \n  #calendar-dates td { \n      color:#2b2b2b; \n      width:30px; \n      height:30px; \n      line-height:30px; \n      text-align:center; \n      border:1px solid #e6e6e6; \n      cursor:default; \n  } \n  #calendar-dates td { \n      font-size:90%; \n      color:#9e9e9e; \n  } \n  #calendar-dates .days { \n      text-transform: uppercase;\n      font-size: 90%;\n      color: #424040;\n      font-weight: bold;\n  } \n  #calendar-dates table tr td{\n      padding: 5px;\n  }\n  #calendar-dates .current{\n    color: red;\n  }\n    '}),Object(d.jsx)("h3",{children:"Javascript Code"}),Object(d.jsx)(a.a,{language:"javascript",style:r.materialOceanic,children:"\n  (function(){\n    var date = new Date();\n    month_name = ['Jan', 'Feb', 'Mar', 'Aprl', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];\n    day_name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];\n    month = date.getMonth();\n    //console.log(month);\n    year = date.getFullYear();\n    //console.log(year);\n\n    $('.prev').on('click', function(){\n      //alert('prev');\n      var prev = 'prev';\n      siwtchMonth(prev);\n    })\n\n    $('.next').on('click', function(){\n      //alert('next');\n      var next = 'next';\n      siwtchMonth(next);\n    })\n\n    /*On next and previous button click calendar for prevois months*/\n    function siwtchMonth(next_prev){\n      //console.log(next_prev);\n      if(next_prev == 'prev'){\n        if(month == 0){\n          month = 11;\n          year = year - 1;\n        }else {\n          month = month - 1;\n          year = year;\n        }\n      }else{\n        if(month == 11){\n          month = 0;\n          year = year + 1;\n        }else {\n          month = month + 1;\n          year = year;\n        }\n      }\n\n      first_date = month_name[month] + \" \" + 1 + \" \" + year;\n      //console.log(first_date);\n      tempdate = new Date(first_date).toDateString();\n      //console.log(tempdate);\n      first_day = tempdate.substring(0, 3);\n      //console.log(first_day);\n      day_no = day_name.indexOf(first_day);\n      //console.log(day_no);\n      days = new Date(year, month+1, 0).getDate();\n      //console.log(days);\n\n      month_year = month_name[month] + \" \" + year;\n\n      $('#calendar-month-year').html(month_year);\n\n      var calendar = get_calendar(day_no, days, month, year);\n\n      $('#calendar-dates').html(calendar);\n\n    }\n\n    /*On page load calendar*/\n    first_date1 = month_name[month] + \" \" + 1 + \" \" + year;\n    tempdate1 = new Date(first_date1).toDateString();\n    first_day1 = tempdate1.substring(0, 3);\n    day_no1 = day_name.indexOf(first_day1);\n    days1 = new Date(year, month+1, 0).getDate();\n    var calendar = get_calendar(day_no1, days1, month, year);\n    $('#calendar-dates').html(calendar);\n    month_year = month_name[month] + \" \" + year;\n    $('#calendar-month-year').html(month_year);\n\n    function get_calendar(day_no, days, month, year){\n\n      var date = new Date();\n      var mon = date.getMonth()\n      var y = date.getFullYear();\n\n      var table = '<table id=\"calendar\">';\n      var tr = '<tr>';\n\n      //create first row as day first name\n      for (var c = 0; c < 7 ; c++){\n        tr +='<td>' + \"SMTWTFS\"[c] +'</td>';\n      }\n      tr += '</tr>'\n      table += tr;\n\n      tr = '<tr>';\n      var c;\n      for(c = 0; c < 7; c++){\n        if(c == day_no){\n          break;\n        }\n        tr +='<td >' + \"\" +'</td>';\n      }\n\n      var count = 1;\n      for( ; c < 7; c++){\n        if(count == date.getDate() && month == mon && year == y){\n          tr +='<td id=\"' + count+ \"-\" + (month + 1) + \"-\"+ year +'\" class=\"current days\">' + count +'</td>';\n        }else{\n          tr +='<td id=\"' + count+ \"-\" + (month + 1) + \"-\"+ year +'\" class=\" days\">' + count +'</td>';\n        }\n        count++;\n      }\n      tr += '</tr>'\n      table += tr;\n\n      for(var c = 3; c < 8; c++){\n        var tr = '<tr>';\n        for (var i = 0; i < 7; i++) {\n\n          if(count > days){\n            tr += '</tr>'\n            table += tr + '</table>';\n            return table;\n          }\n          \n          if(count == date.getDate() && month == mon && year == y){\n            tr +='<td id=\"' + count+ \"-\" + (month + 1) + \"-\"+ year +'\" class=\"current days\">' + count +'</td>';\n          }else{\n            tr +='<td id=\"' + count+ \"-\" + (month + 1) + \"-\"+ year +'\" class=\"days\">' + count +'</td>';\n          }\n          count ++;\n        }\n        tr += '</tr>'\n        table += tr;\n      }\n\n      table += '</table>';\n      return table;\n      }\n\n    })();\n  "})]})}},LdHh:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home/calendar",function(){return t("6jD+")}])}},[["LdHh",0,2,1,3,4]]]);