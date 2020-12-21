import styled, { css } from 'styled-components';
import { FormGroup } from '../styled';

const cssAddon = css`
  align-items: stretch;
  background-color: #e9ecef;
  display: inline-flex;
  flex-shrink: 0;
  overflow: hidden;
  white-space: nowrap;
`;

const borderWithRightSideThin = css`
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  border-right: 0.5px solid #ccc;
`;

const borderWithLeftSideThin = css`
  border-bottom: 1px solid #ccc;
  border-left: 0.5px solid #ccc;
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
`;

const borderRadiusRightTopBottom = css`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const borderRadiusLeftTopBottom = css`
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;

const InputGroupPrepend = styled.div`
  ${cssAddon}
  ${borderWithRightSideThin}
  ${borderRadiusLeftTopBottom}
`;

const InputGroupAppend = styled.div`
  ${cssAddon}
  ${borderWithLeftSideThin}
  ${borderRadiusRightTopBottom}
`;

const InputGroup = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  input {
    box-shadow: none;
    border: none;
  }

  ${props =>
    props.hasPrepend &&
    css`
      ${FormGroup} {
        ${borderWithLeftSideThin}
        ${borderRadiusRightTopBottom}
      }

      input {
        ${borderRadiusLeftTopBottom}
      }
    `}

  ${props =>
    props.hasAppend &&
    css`
      ${FormGroup} {
        ${borderWithRightSideThin}
        ${borderRadiusLeftTopBottom}
      }

      input {
        ${borderRadiusRightTopBottom}
      }
    `}
`;

export { InputGroup, InputGroupPrepend, InputGroupAppend };
