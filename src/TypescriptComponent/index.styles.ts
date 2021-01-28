import styled from 'styled-components';

export interface StyledProps {
  highlight?: boolean;
}

export const StyledDiv = styled.div<StyledProps>`
  margin: 2em;
  padding: 0.5em;
  border: 2px solid ${({ highlight }) => (highlight ? 'red' : '#000')};
  font-size: 2em;
  text-align: center;
`;
