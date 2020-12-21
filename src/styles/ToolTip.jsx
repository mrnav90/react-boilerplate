import { css } from 'styled-components';

const $block = '.calling-tooltip';
export default css`
  ${$block} {
    opacity: 1;

    &--hidden {
      display: none;
    }

    &--top {
      .rc-tooltip-content {
        .rc-tooltip-arrow {
          bottom: -3px;
          border-width: 12px 7px 0;
        }
      }

      &${$block}--dark {
        .rc-tooltip-content {
          .rc-tooltip-arrow {
            border-top-color: #111;
          }
        }
      }
    }

    &--right {
      .rc-tooltip-content {
        .rc-tooltip-arrow {
          left: -3px;
          border-width: 7px 12px 7px 0;
        }
      }

      &${$block}--dark {
        .rc-tooltip-content {
          .rc-tooltip-arrow {
            border-right-color: #111;
          }
        }
      }

      &${$block}--light {
        .rc-tooltip-content {
          .rc-tooltip-arrow {
            border-right-color: #fff;
          }
        }
      }
    }

    &--left {
      .rc-tooltip-content {
        .rc-tooltip-arrow {
          right: -3px;
          border-width: 7px 0 7px 12px;
        }
      }

      &${$block}--dark {
        .rc-tooltip-content {
          .rc-tooltip-arrow {
            border-left-color: #111;
          }
        }
      }

      &${$block}--light {
        .rc-tooltip-content {
          .rc-tooltip-arrow {
            border-left-color: #fff;
          }
        }
      }
    }

    &--bottom {
      .rc-tooltip-content {
        .rc-tooltip-arrow {
          top: -3px;
          border-width: 0 7px 12px;
        }
      }

      &${$block}--dark {
        .rc-tooltip-content {
          .rc-tooltip-arrow {
            border-bottom-color: #111;
          }
        }
      }

      &${$block}--light {
        .rc-tooltip-content {
          .rc-tooltip-arrow {
            border-bottom-color: #fff;
          }
        }
      }
    }

    &--dark {
      .rc-tooltip-inner {
        padding: 6px 12px;
        min-height: 50px;
        background: #111;
        display: flex;
        flex-direction: column;
        justify-content: center;
        white-space: pre-wrap;
      }
    }

    &--light {
      .rc-tooltip-inner {
        padding: 6px 12px;
        min-height: 50px;
        background: #fff;
      }
    }

    &--dark-light {
      .rc-tooltip-inner {
        padding: 6px 12px;
        min-height: 50px;
        background: #283347;
      }
    }

    &--no-arrow {
      .rc-tooltip-content {
        .rc-tooltip-arrow {
          display: none;
        }
      }
    }
  }
`;
