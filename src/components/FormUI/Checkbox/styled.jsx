import styled, { css } from 'styled-components';

export const Input = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  bottom: 0;
  cursor: pointer;
  height: 100%;
  left: 0;
  opacity: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 10;
`;

export const Label = styled.label`
  margin-left: 5px;
`;

export const Cell = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 5px !important;
  cursor: pointer;
  flex-shrink: 0;
  height: 25px;
  position: relative;
  width: 25px;

  &:after {
    border-color: transparent;
    border-style: solid;
    border-width: 0 2px 2px 0;
    content: '';
    height: 14px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -60%) rotate(45deg);
    width: 8px;
  }
`;

export const Wrapper = styled.label`
  align-items: center;
  display: inline-flex;
  position: relative;
  ${props =>
    props.inline &&
    css`
      margin-right: 20px;
    `}

  ${props =>
    props.width &&
    css`
      width: ${props.width}px;
    `}

  ${props =>
    props.active &&
    css`
      ${Cell} {
        background-color: #17e;
        &:after {
          border-color: #fff;
        }
      }
    `}

  > .input {
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  > .cell {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 5px !important;
    cursor: pointer;
    flex-shrink: 0;
    height: 25px;
    position: relative;
    width: 25px;

    &:after {
      border-color: transparent;
      border-style: solid;
      border-width: 0 2px 2px 0;
      content: '';
      height: 14px;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -60%) rotate(45deg);
      width: 8px;
    }
  }
`;
