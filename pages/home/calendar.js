import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Layout from "../../components/Layout";

export default function calendar() {
  return (
    <Layout>
      <div>
        <h2>Calendar Component, check at git repo</h2>
        <p><a href="https://github.com/Ganpatkakar/Calendar" target="_blank" rel="noopener noreferrer">Calendar repo</a></p>
        <p><a href="http://ganpatkakar.github.io/Calendar/" target="_blank" rel="noopener noreferrer">Calendar Sample</a></p>
      </div>

      <h3>Note: This is a HTML CSS and jQuery code sample and it can be further modified and used</h3>
      <SyntaxHighlighter language="html" style={materialOceanic}>
  {`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Calendar page</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
  
    <div id="calendar-container">
        <div id="calendar-header">
          <span class="prev" style="float: left;"> &lang; </span>
          <span id="calendar-month-year"></span>
          <span class="next" style="float: right;"> &rang; </span>
        </div>
        <div id="calendar-dates">
  
        </div>
    </div>
  
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script src="js/script.js"></script>
  
  </body>
  </html>
  
  `
  }
      </SyntaxHighlighter>

      <h3>Style code</h3>
      <SyntaxHighlighter language="css" style={materialOceanic}>
  {
    `
  #calendar-container{
      -moz-box-shadow:0px 3px 3px rgba(0, 0, 0, 0.25); 
      -webkit-box-shadow:0px 3px 3px rgba(0, 0, 0, 0.25); 
      margin:50px auto; 
      font: 13px/1.5 "Helvetica Neue", Helvatica, Arial, san-serif; 
      display:table; 
  }
  #calendar-header {
      cursor:default; 
      background: #cd310d; 
      background: -moz-linear-gradient(top, #b32b0c, #cd310d); 
      background: -webkit-gradient(linear, left top, left bottom, from(#b32b0c), to(#cd310d)); 
      height: 34px; 
      position: relative; 
      color:#fff; 
      -webkit-border-top-left-radius: 5px; 
      -webkit-border-top-right-radius: 5px; 
      -moz-border-radius-topleft: 5px; 
      -moz-border-radius-topright: 5px; 
      border-top-left-radius: 5px; 
      border-top-right-radius: 5px; 
      font-weight:bold; 
      text-shadow:0px -1px 0 #87260C; 
      text-transform: uppercase; 
  }
  #calendar-header span { 
      display:inline-block; 
      line-height:34px; 
  }
  .prev {
      left:0; 
      -webkit-border-top-left-radius: 5px; 
      -moz-border-radius-topleft: 5px; 
      border-top-left-radius: 5px; 
      border-right:1px solid #ae2a0c;
  }
  .next {
      right:0; 
      top:0; 
      border-left:1px solid #ae2a0c; 
      -webkit-border-top-right-radius: 5px; 
      -moz-border-radius-topright: 5px; 
      border-top-right-radius: 5px; 
  }
  .prev , .next {
      width:24px; 
      text-align:center; 
      position:absolute; 
  }
  #calendar-month-year{
      letter-spacing: 1px;
      width: 100%;
      text-align: center;
  }
  #calendar-dates table { 
      background:#fff; 
      border-collapse:collapse; 
  } 
  #calendar-dates td { 
      color:#2b2b2b; 
      width:30px; 
      height:30px; 
      line-height:30px; 
      text-align:center; 
      border:1px solid #e6e6e6; 
      cursor:default; 
  } 
  #calendar-dates td { 
      font-size:90%; 
      color:#9e9e9e; 
  } 
  #calendar-dates .days { 
      text-transform: uppercase;
      font-size: 90%;
      color: #424040;
      font-weight: bold;
  } 
  #calendar-dates table tr td{
      padding: 5px;
  }
  #calendar-dates .current{
    color: red;
  }
    `
  }
      </SyntaxHighlighter>

      <h3>Javascript Code</h3>

      <SyntaxHighlighter language="javascript" style={materialOceanic}>
  {`
  (function(){
    var date = new Date();
    month_name = ['Jan', 'Feb', 'Mar', 'Aprl', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    day_name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    month = date.getMonth();
    //console.log(month);
    year = date.getFullYear();
    //console.log(year);

    $('.prev').on('click', function(){
      //alert('prev');
      var prev = 'prev';
      siwtchMonth(prev);
    })

    $('.next').on('click', function(){
      //alert('next');
      var next = 'next';
      siwtchMonth(next);
    })

    /*On next and previous button click calendar for prevois months*/
    function siwtchMonth(next_prev){
      //console.log(next_prev);
      if(next_prev == 'prev'){
        if(month == 0){
          month = 11;
          year = year - 1;
        }else {
          month = month - 1;
          year = year;
        }
      }else{
        if(month == 11){
          month = 0;
          year = year + 1;
        }else {
          month = month + 1;
          year = year;
        }
      }

      first_date = month_name[month] + " " + 1 + " " + year;
      //console.log(first_date);
      tempdate = new Date(first_date).toDateString();
      //console.log(tempdate);
      first_day = tempdate.substring(0, 3);
      //console.log(first_day);
      day_no = day_name.indexOf(first_day);
      //console.log(day_no);
      days = new Date(year, month+1, 0).getDate();
      //console.log(days);

      month_year = month_name[month] + " " + year;

      $('#calendar-month-year').html(month_year);

      var calendar = get_calendar(day_no, days, month, year);

      $('#calendar-dates').html(calendar);

    }

    /*On page load calendar*/
    first_date1 = month_name[month] + " " + 1 + " " + year;
    tempdate1 = new Date(first_date1).toDateString();
    first_day1 = tempdate1.substring(0, 3);
    day_no1 = day_name.indexOf(first_day1);
    days1 = new Date(year, month+1, 0).getDate();
    var calendar = get_calendar(day_no1, days1, month, year);
    $('#calendar-dates').html(calendar);
    month_year = month_name[month] + " " + year;
    $('#calendar-month-year').html(month_year);

    function get_calendar(day_no, days, month, year){

      var date = new Date();
      var mon = date.getMonth()
      var y = date.getFullYear();

      var table = '<table id="calendar">';
      var tr = '<tr>';

      //create first row as day first name
      for (var c = 0; c < 7 ; c++){
        tr +='<td>' + "SMTWTFS"[c] +'</td>';
      }
      tr += '</tr>'
      table += tr;

      tr = '<tr>';
      var c;
      for(c = 0; c < 7; c++){
        if(c == day_no){
          break;
        }
        tr +='<td >' + "" +'</td>';
      }

      var count = 1;
      for( ; c < 7; c++){
        if(count == date.getDate() && month == mon && year == y){
          tr +='<td id="' + count+ "-" + (month + 1) + "-"+ year +'" class="current days">' + count +'</td>';
        }else{
          tr +='<td id="' + count+ "-" + (month + 1) + "-"+ year +'" class=" days">' + count +'</td>';
        }
        count++;
      }
      tr += '</tr>'
      table += tr;

      for(var c = 3; c < 8; c++){
        var tr = '<tr>';
        for (var i = 0; i < 7; i++) {

          if(count > days){
            tr += '</tr>'
            table += tr + '</table>';
            return table;
          }
          
          if(count == date.getDate() && month == mon && year == y){
            tr +='<td id="' + count+ "-" + (month + 1) + "-"+ year +'" class="current days">' + count +'</td>';
          }else{
            tr +='<td id="' + count+ "-" + (month + 1) + "-"+ year +'" class="days">' + count +'</td>';
          }
          count ++;
        }
        tr += '</tr>'
        table += tr;
      }

      table += '</table>';
      return table;
      }

    })();
  `
  }
      </SyntaxHighlighter>
    </ Layout>
  )
}
