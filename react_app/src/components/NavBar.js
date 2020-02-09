import React from 'react';
import '../css/menu.scss';
import '../App.scss';

function NavBar() {
  return (
    <div style={{backgroundColor: 'blue'}}>
    <aside className="menu">
      <p className="menu-label">
      WELCOME
      </p>
      <ul className="menu-list">
      <li className="menu-listitem"><a>Upload Receipt</a></li>
      <li className="menu-listitem"><a>View Spending</a></li>
      <li className="menu-listitem"><a>Budget</a></li>
      <li className="menu-listitem"><a>Settings</a></li>
      </ul>
      </aside>

      <header>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      </header>
    </div>
  );
}

export default NavBar;
