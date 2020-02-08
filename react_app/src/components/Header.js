import React from 'react';
import '../css/header.scss';
import '../App.scss';

function Header() {
  return (
    <div>
      <div className="header-contain">
        <h1 class="header-title">Budget Up</h1>
        <h2 class="header-sub">Take charge of YOUR finances</h2>
      </div>
      <header>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      </header>
    </div>
  );
}

export default Header;
