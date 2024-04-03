import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <a href='/'>صفحه اصلی</a>
            </li>
            <li>
              <a href='#'>صفحه اصلی</a>
            </li>
            <li>
              <a href='#'>صفحه اصلی</a>
            </li>
            <li>
              <a href='#'>صفحه اصلی</a>
            </li>
            <li>
              <a href='/about'>درباره ما</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
