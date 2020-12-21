import { css } from 'styled-components';
import { icons } from 'components/FontIcon';

export default css`
  #toast-container {
    &.toast-top-center {
      left: 50%;
      top: 15px;
      transform: translateX(-50%);
      right: auto;
      width: auto;
    }

    .toast {
      font-size: 15px;
      font-weight: 700;
      border-radius: 8px;
      padding: 34px 63px;
      padding-left: 83px;
      width: auto !important;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
    }

    > .toast-success {
      background-color: rgb(85, 204, 204);
      background-image: none !important;
      &:before {
        content: '${icons['check-circle']}';
        font-size: 22px;
        font-family: 'font-icons' !important;
        position: absolute;
        top: 30px;
        left: 50px;
      }
    }

    > .toast-error {
      background-color: rgb(255, 0, 0);
      background-image: none !important;
      &:before {
        content: '${icons.warning}';
        font-size: 19px;
        font-family: 'font-icons' !important;
        position: absolute;
        left: 50px;
        top: 32px;
      }
    }

    > .toast-warning {
      background-position-x: 50px;
    }

    > .toast-info {
      background-color: rgba(0, 0, 0, 0.3);
      opacity: 1;
      padding: 34px 73px;
      background-image: none !important;
      &:hover {
        background-color: rgba(0, 0, 0, 0.8);
      }
    }
  }
`;
