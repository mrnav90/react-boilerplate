import styled, { css } from 'styled-components';
import LaddaButton from '@zumper/react-ladda';
import { Link } from 'react-router-dom';
import { margin } from 'styles/mixins';

const variantStyles = {
  warning: `
    background: #eebb00;
    border: 1px solid #eebb00;
    color: white;
  `,
  danger: `
    background: #d90909;
    border: 1px solid #d90909;
    color: white;
  `,
  dangerReverse: `
    background: white;
    border: 1px solid #d90909;
    color: #d90909;
  `,
  orange: `
    background-image: linear-gradient(90deg, rgba(255, 119, 35, 0.88) 0%, #d90909 100%);
    border: 1px solid rgba(255, 119, 35, 0.88);
    color: #fff;
  `,
  default: `
    background: #999;
    border: 1px solid #999;
    color: white;
  `,
  defaultReverse: `
    background: white;
    border: 1px solid #808080;
    color: #808080;
  `,
  primary: `
    background: #1177ee;
    border: 1px solid #1177ee;
    color: white;
  `,
  primaryReverse: `
    background: white;
    border: 1px solid #4499ee;
    color: #4499ee;
  `,
  gray: `
    background: #6f7276;
    border: 1px solid #6f7276;
    color: #fff;
  `,
};

const mixin = css`
  border-radius: 5px;
  border: 1px solid transparent;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  padding: 13px 20px;
  text-align: center;
  outline: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:disabled {
    opacity: .7;
    cursor: not-allowed;
  }

  &:not(:disabled) {
    cursor: pointer;
  }
  ${props => variantStyles[props.variant]}
  ${props =>
    props.wide &&
    css`
      display: block;
      width: 100%;
    `}
  ${props =>
    props.transparent &&
    css`
      background: transparent;
      border-color: transparent;
      outline: transparent;
    `}
  ${props =>
    props.small &&
    css`
      padding: 6px 12px;
    `}
  ${props => props.width && `width: ${props.width};`}
  ${props => props.height && `height: ${props.height};`}
`;

export const Button = styled.button`
  ${margin}
  ${mixin}
`;

export const ButtonLink = styled(Link)`
  ${margin}
  ${mixin}
  text-decoration: none;
`;

export const StyledLadda = styled(LaddaButton)`
  line-height: 10px;
  ${margin}
  ${mixin}
`;
