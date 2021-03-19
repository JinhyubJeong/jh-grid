import { createGlobalStyle, css } from "styled-components";

// css리셋

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Spoqa Han Sans', 'Sans-serif';
  }
  html{
    font-size: 10px;
    scroll-behavior: smooth;
  }
  ${({ theme }) => {
      const { fonts, device, colors } = theme;
      return css`
          body {
              font-family: ${fonts.family.base};
              font-weight: ${fonts.weight.normal};
              font-size: ${fonts.size.f14};
              color: ${colors.white};
              background-color: ${colors.black};
              word-break: keep-all;
              letter-spacing: 0.2rem;
          }
          .grid-container {
              max-width: 1390px;
          }
          .gird {
              margin-left: auto;
              margin-right: auto;
              grid-column-gap: 24px;
              grid-row-gap: 24px;
              padding-left: 24px;
              padding-right: 24px;
              padding-top: 0;
              padding-bottom: 0;
              display: grid;
              grid-template-columns: repeat(12, minmax(0, 1fr));
          }
          .gird-item {
              display: flex;
              flex-direction: column;
              position: relative;
              overflow: hidden;
              border: 1px solid #fff;
          }
          .large-span-12 {
              grid-column: span 12;
          }
          .large-span-11 {
              grid-column: span 11;
          }
          .large-span-10 {
              grid-column: span 10;
          }
          .large-span-9 {
              grid-column: span 9;
          }
          .large-span-8 {
              grid-column: span 8;
          }
          .large-span-7 {
              grid-column: span 7;
          }
          .large-span-6 {
              grid-column: span 6;
          }
          .large-span-5 {
              grid-column: span 5;
          }
          .large-span-4 {
              grid-column: span 4;
          }
          .large-span-3 {
              grid-column: span 3;
          }
          .large-span-2 {
              grid-column: span 2;
          }
          .large-span-1 {
              grid-column: span 1;
          }
          ${device.tablet} {
              .medium-span-12 {
                  grid-column: span 12;
              }
              .medium-span-11 {
                  grid-column: span 11;
              }
              .medium-span-10 {
                  grid-column: span 10;
              }
              .medium-span-9 {
                  grid-column: span 9;
              }
              .medium-span-8 {
                  grid-column: span 8;
              }
              .medium-span-7 {
                  grid-column: span 7;
              }
              .medium-span-6 {
                  grid-column: span 6;
              }
              .medium-span-5 {
                  grid-column: span 5;
              }
              .medium-span-4 {
                  grid-column: span 4;
              }
              .medium-span-3 {
                  grid-column: span 3;
              }
              .medium-span-2 {
                  grid-column: span 2;
              }
              .medium-span-1 {
                  grid-column: span 1;
              }
          }
          ${device.mobile} {
              .small-span-12 {
                  grid-column: span 12;
              }
              .small-span-11 {
                  grid-column: span 11;
              }
              .small-span-10 {
                  grid-column: span 10;
              }
              .small-span-9 {
                  grid-column: span 9;
              }
              .small-span-8 {
                  grid-column: span 8;
              }
              .small-span-7 {
                  grid-column: span 7;
              }
              .small-span-6 {
                  grid-column: span 6;
              }
              .small-span-5 {
                  grid-column: span 5;
              }
              .small-span-4 {
                  grid-column: span 4;
              }
              .small-span-3 {
                  grid-column: span 3;
              }
              .small-span-2 {
                  grid-column: span 2;
              }
              .small-span-1 {
                  grid-column: span 1;
              }
          }
      `;
  }}

ol, ul, li {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
 `;

export default GlobalStyle;
