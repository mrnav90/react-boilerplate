import styled, { css } from 'styled-components';
import FontIcon from 'components/FontIcon';
import Button from 'components/FormUI/Button';

export const RightIcon = styled(FontIcon)`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 7px;
`;

export const LeftIcon = styled(FontIcon)`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 7px;
`;

export const Input = styled.input`
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  color: #010101;
  display: block;
  outline: none;
  padding: 6px 12px;
  position: relative;
  width: ${props => (props.width ? `${props.width}px` : '100%')};

  &:focus {
    border: 1px solid #17e;
  }

  &:disabled {
    opacity: .7;
    cursor: not-allowed;
    background: #f2f2f2;
  }
  ${props =>
    props.size === 'large' &&
    css`
      padding: 10px 16px;
    `}
  ${props =>
    props.size === 'x-large' &&
    css`
      padding: 13px 20px;
    `}
  ${props =>
    props.empty &&
    css`
      background: #fbfcfd;

      &::placeholder {
        color: #c5c5c5;
      }
    `}
`;

export const InputControl = styled.div`
  position: relative;
  ${props =>
    props.success &&
    props.showStateIcon &&
    css`
      > ${Input} {
        border: 1px solid #17e;
      }
    `}
  ${props =>
    props.error &&
    props.showStateIcon &&
    css`
      > ${Input} {
        border: 1px solid #d90909;
      }
    `}
  ${props =>
    props.showStateIcon &&
    css`
      > ${Input} {
        padding-right: 30px !important;
      }
    `}
`;

export const FormGroup = styled.div`
  width: ${props => (props.width ? `${props.width}px` : '100%')};
`;

export const MessageErrors = styled.div`
  color: #d90909;
  font-size: 14px;
  text-align: left;
`;

export const MessageErrorItem = styled.div`
  white-space: pre-wrap;
  margin-top: 5px;
`;

export const InputIconWrap = styled.div`
  position: relative;
`;

export const InputIcon = styled.input`
  border-radius: 5px;
  border: 1px solid #ccc;
  color: #555;
  outline: none;
  background: #fff;
  width: ${props => (props.width ? `${props.width}px` : '250px')};
  padding: 9px;
  padding-left: 25px;
  font-size: 14px;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ButtonCopy = styled(Button).attrs({
  type: 'button',
})`
  background: #fff;
  border: none;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  color: #49e;
  padding: 0 15px;
  width: 60px;
  height: 42px;

  > span:first-child {
    font-size: 16px;
  }

  > span:last-child {
    display: block;
    font-size: 10px;
    margin-top: 3px;
  }
`;
