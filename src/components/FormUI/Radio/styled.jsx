import styled from 'styled-components';

export const Label = styled.label`
  display: inline-flex;
  position: relative;
  padding-left: 25px;
  margin: 0;
  cursor: pointer;
  font-size: 14px;
  height: 36px;
  color: #010101;
  margin-right: 10px;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Text = styled.span`
  vertical-align: bottom;
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 7px;
  left: 0;
  height: 19px;
  width: 19px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 50% !important;

  &:after {
    content: '';
    position: absolute;
    display: none;
    top: 2px;
    left: 2px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #17e;
  }
`;

export const Input = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked ~ ${Checkmark} {
    background-color: #fff;
    border: 1px solid #e0e0e0;
  }

  &:checked ~ ${Checkmark}:after {
    display: block;
  }
`;
