import styled from '@emotion/styled';

export const Section = styled.div`
  width: 300px;
  text-align: center;
  margin: 20px 40px;
  background-color: white;
  border: 1px solid #d6d6d6;
  box-shadow: 1px 1px 2px 2px #d6d6d6;
  border-radius: 3px;
`;

export const StatsHeader = styled.h2`
  margin: 0;
  padding-top: 20px;
  text-transform: uppercase;
  color: #505050;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: baseline;
  align-items: center;
  padding: 0px;
  padding-top: 25px;
  margin: 0;
`;

export const StatListItem = styled.ul`
  width: calc(100% / 3);
  padding: 10px 5px;
  background-color: ${props => props.backgroundcolor};
`;

export const StatsLabel = styled.span`
  display: block;
  padding-bottom: 5px;
  font-size: 18px;
  color: #ffffff;
`;

export const StatsPercentage = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
`;
