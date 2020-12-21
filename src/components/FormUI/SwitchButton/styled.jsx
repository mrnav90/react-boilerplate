import styled, { css } from 'styled-components';

export const Input = styled.input`
  height: 0;
  position: absolute;
  visibility: hidden;
  width: 0;
`;

export const Slider = styled.div`
  background-color: #ccc;
  border: 2px solid #c5c5c5;
  border-radius: 30px;
  cursor: pointer;
  font-size: 14px;
  height: 30px;
  position: relative;
  transition: all 0.4s ease;
  width: 60px;
`;

export const Wrapper = styled.label`
  align-items: center;
  display: inline-flex;
  margin: 0;
  position: relative;

  ${Slider} {
    &:before {
      content: 'OFF';
      color: white;
      font-weight: bold;
      font-size: 10px;
      left: auto;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 8px;
    }

    &:after {
      background-color: #fff;
      border: 1px solid #c5c5c5;
      border-radius: 50% !important;
      content: '';
      height: 24px;
      left: 0;
      position: absolute;
      top: 50%;
      transform: translate(1px, -50%);
      transition: all 0.3s ease;
      width: 24px;
    }
  }

  ${props =>
    props.active &&
    css`
      > ${Slider} {
        background-color: #fff;
        border: 2px solid #17e;

        &:before {
          color: #17e;
          content: 'ON';
          left: 8px;
          right: auto;
        }

        &:after {
          background-color: #17e;
          border-color: #17e;
          transform: translate(30px, -50%);
        }
      }
    `}

  ${props => props.disabled && `pointer-events: none;`}

  > .left-label {
    margin-right: 10px;
  }

  > .right-label {
    margin-left: 10px;
  }
`;
