import { createGlobalStyle } from 'styled-components';
import ToastAlert from './ToastAlert';
import ToolTip from './ToolTip';
import ReactModal from './ReactModal';

export const AppStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 14px;

    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: "Noto Sans JP", sans-serif;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    line-height: normal;
  }

  ${ToolTip}
  ${ToastAlert}
  ${ReactModal}
`;
