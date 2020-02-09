import React from 'react';
import '../css/viewSpending.scss';
import '../App.scss';
import './piechart.png';

function ViewSpending() {
  return (

    <div style={{backgroundColor: 'white'}}>
    <center>
    <font size = "7"> Spending Page </font></center>

      <header>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      </header><br></br><br></br>

      <div align="left"> Choose from the drop down menu to see your spending per month.</div><br></br>

      <div class="dropdown is-hoverable" align="left">
      <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4" align="left">
        <span>Hover me</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
        </button>
      </div>

      <div class="dropdown-menu" id="dropdown-menu4" role="menu" align="left">
        <div class="dropdown-content">
        <a href="#" class="dropdown-item">January</a>
        <a href="#" class="dropdown-item">February</a>
        <a href="#" class="dropdown-item">March</a>
        <a href="#" class="dropdown-item">April</a>
        <a href="#" class="dropdown-item">May</a>
        <a href="#" class="dropdown-item">June</a>
        <a href="#" class="dropdown-item">July</a>
        <a href="#" class="dropdown-item">August</a>
        <a href="#" class="dropdown-item">September</a>
        <a href="#" class="dropdown-item">October</a>
        <a href="#" class="dropdown-item">November</a>
        <a href="#" class="dropdown-item">December</a>
        </div>
      </div>
      </div>
      <br></br>
      <center><img src={require('./piechart.png')}/></center>
    </div>


  );
}

export default ViewSpending;
