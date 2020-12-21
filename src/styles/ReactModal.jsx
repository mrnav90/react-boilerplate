import { css } from 'styled-components';

export default css`
  .ReactModalPortal {
    .ReactModal {
      opacity: 0;

      &__Overlay {
        background-color: rgba(51, 51, 51, 0.5);
        transition: opacity 0.15s linear;

        &--after-open {
          opacity: 1;
          z-index: 10;
        }

        &--before-close {
          opacity: 0;
        }
      }

      &__Body {
        &--open {
          overflow: hidden;
        }
      }

      &__Content {
        margin: 30px auto;
        min-width: 750px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
        transition: transform 0.3s ease-out;

        &--after-open {
          transform: translate(-50%, -50%) !important;
        }
      }

      &__Close {
        background: none;
        border: none;
        color: #333;
        cursor: pointer;
        display: block;
        font-size: 2.57rem;
        line-height: 30px;
        margin-left: auto;
        outline: none;
        padding: 0;
        position: relative;
        z-index: 10;
      }
    }
  }
`;
