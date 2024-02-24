import { useState } from "react";
import { css } from "@emotion/react";

import config from "../../data/data";

const headerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: #fff;
  z-index: 1000;

  .container {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .logo {
    a {
      color: #222;
      font-size: 1.8rem;
      font-weight: bold;
      letter-spacing: 0.1em;
      text-decoration: none;
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

const gnav = css`
  a {
    display: block;
    color: #222;
    padding: 0.5em 0;
    font-size: 1.5rem;
    line-height: 1.5;
    letter-spacing: 0.05em;
    overflow: hidden;
    white-space: nowrap;
    text-decoration: none;
    &:hover {
      opacity: 0.7;
    }
  }
  @media screen and (max-width: 899px) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    height: 100vh;
    background-color: #fff;
    z-index: 8000;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      visibility 0s ease 0.4s;
    &.is-open {
      opacity: 1;
      visibility: visible;
      transition:
        opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
        visibility 0s;
    }
    ul {
      height: 100%;
      margin: auto;
      padding: 32px;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
  @media screen and (min-width: 900px) {
    margin-left: auto;
    ul {
      display: flex;
      align-items: center;
    }
    li {
      flex-shrink: 1;
      margin: 0 0 0 2em;
      white-space: nowrap;
    }
  }
`;

const hamburger = css`
  position: relative;
  width: 48px;
  height: 48px;
  margin-left: auto;
  z-index: 9000;
  @media screen and (min-width: 900px) {
    display: none;
  }

  .icon {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    border: 0;
    position: absolute;
    left: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;

    span {
      position: absolute;
      top: calc(50% - 1px);
      right: 0;
      left: 0;
      display: block;
      width: 18px;
      height: 2px;
      margin: 0 auto;
      background: #000;
      transition: all 0.3s;

      &:before,
      &:after {
        position: absolute;
        top: 50%;
        right: 0;
        left: 0;
        content: "";
        display: block;
        width: 18px;
        height: 2px;
        margin: 0 auto;
        background: #000;
        transition: all 0.3s;
      }

      &:before {
        margin-top: -8px;
      }

      &:after {
        margin-top: 6px;
      }
    }
    &.is-active {
      span {
        background: transparent;

        &:before {
          margin-top: 0;
          transform: rotate(-45deg);
        }

        &:after {
          margin-top: 0;
          transform: rotate(-135deg);
        }
      }
    }
  }
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header css={headerStyle}>
      <div className="container">
        <h1 className="logo">
          <a href="/react-landing-page-template/">
            {config.sitename ? config.sitename : "Loading"}
          </a>
        </h1>
        <nav id="gnav" css={gnav} className={isOpen ? "is-open" : ""}>
          <ul>
            {config.menus &&
              config.menus.map((menu) => (
                <li key={menu.title}>
                  <a href={menu.path} onClick={handleClick}>
                    {menu.title}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
        <div id="hamburger" css={hamburger}>
          <button
            type="button"
            className={isOpen ? "icon is-active" : "icon"}
            onClick={handleClick}
            aria-label="menu"
          >
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
