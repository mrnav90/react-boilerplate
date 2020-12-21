import styled, { createGlobalStyle } from 'styled-components';
import callingIconEOT from 'assets/fonts/callingicon.eot';
import callingIconTTF from 'assets/fonts/callingicon.ttf';
import callingIconWOFF from 'assets/fonts/callingicon.woff';

export const MasterLayoutWrapper = styled.div`
  ul,
  ol {
    list-style: none;
  }

  input::placeholder {
    color: #ccc;
    font-weight: 200;
  }

  /* NOTE: Fix ie flex container min-height not work */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    display: flex;
    flex-direction: column;
  }
`;

export const FontIconLoader = createGlobalStyle`
  @charset "UTF-8";

  @font-face {
    font-family: 'font-icons';
    font-weight: normal;
    font-style: normal;
    src: url(${callingIconEOT});
    src:
      url(${callingIconEOT}) format('embedded-opentype'),
      url(${callingIconTTF}) format('truetype'),
      url(${callingIconWOFF}) format('woff');
  }
`;
