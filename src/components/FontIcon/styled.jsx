import styled from 'styled-components';

export default styled.span`
  font-family: 'font-icons' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  color: black;
  font-size: 24px;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:before {
    content: ${props => `'${props.content}'`};
  }
`;
