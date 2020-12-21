import styled, { keyframes, css } from 'styled-components';

export const TableWrapper = styled.div`
  position: relative;
  clear: both;
  zoom: 1;

  &:after {
    visibility: hidden;
    display: block;
    content: '';
    clear: both;
    height: 0;
  }
`;

export const Table = styled.table`
  min-width: 100%;
  margin: 0;
  margin-bottom: 0;
  background-color: #fff;
  clear: both;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 14px;
  width: auto;

  &:focus {
    outline: none;
  }
  ${props =>
    props.fixedLayout &&
    `
    table-layout: fixed;
  `}
`;

export const TR = styled.tr`
  background-color: #fff;

  &:nth-of-type(odd) {
    background-color: #fbfcfd;
  }
`;

export const TD = styled.td`
  border: none;
  padding: 18px 10px;
  vertical-align: middle;
  line-height: 1.42857143;
  text-align: ${props => props.align || 'left'};

  &:first-child {
    border-left: 0;
    padding-left: 30px;
  }
`;

export const TBody = styled.tbody`
  ${props =>
    !props.isLoading &&
    !props.isEmpty &&
    css`
      ${TR} {
        &:hover {
          background-color: #eef1f5;
        }
      }
    `}
  ${props =>
    props.isEmpty &&
    css`
      ${TR}, ${TD} {
        background: #fff;
      }
    `}
`;

export const TH = styled.th`
  border: none;
  border-bottom: 1px solid #dee2e6 !important;
  color: #808080;
  white-space: nowrap;
  padding: 8px;
  font-weight: 600;
  vertical-align: bottom;
  line-height: 1.42857143;
  box-sizing: content-box;
  text-align: ${props => props.align || 'left'};

  &:first-child {
    padding-left: 30px;
  }

  &:not(:first-child) {
    padding-left: 10px;
  }

  ${props =>
    props.isDisableHeading &&
    css`
      pointer-events: none;
    `}

  ${props =>
    props.sortable &&
    css`
      padding-right: 18px;
      position: relative;
      cursor: pointer;

      &:before,
      &:after {
        border: 5px solid transparent;
        content: '';
        display: block;
        height: 0;
        right: 5px;
        top: 50%;
        position: absolute;
        width: 0;
      }

      &:before {
        border-bottom-color: #c2c4c4;
        margin-top: -11px;
      }

      &:after {
        border-top-color: #c2c4c4;
        margin-top: 1px;
      }
    `}

  ${props =>
    props.currentSort === 'asc' &&
    css`
      &:before {
        border-bottom-color: #17e;
        margin-top: -11px;
      }

      &:after {
        border-top-color: #c2c4c4;
        margin-top: 1px;
      }
    `}

  ${props =>
    props.currentSort === 'desc' &&
    css`
      &:before {
        border-bottom-color: #c2c4c4;
        margin-top: -11px;
      }

      &:after {
        border-top-color: #17e;
        margin-top: 1px;
      }
    `}
`;

const ShimmerAnimation = keyframes`
  0% { background-position: -468px 0; }
  100% { background-position: 468px 0; }
`;

const Animation = css`
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;
  position: relative;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${ShimmerAnimation};
  animation-timing-function: linear;
`;

export const IconLoading = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  display: inline-block;
  ${Animation}
`;

export const LineLoading = styled.span`
  width: calc(100% - 40px);
  height: 20px;
  display: inline-block;
  ${Animation}
`;

export const TableScrollable = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  margin: 10px 0;
`;

export const EmptyData = styled.div`
  color: #c5c5c5;
  font-size: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const EmptyIcon = styled.span`
  display: block;
`;

export const EmptyText = styled.p`
  color: #808080;
`;
