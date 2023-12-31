import styled from '@emotion/styled';
import hex from './RandomHex';

export const StatisticsCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  background-color: #ffffff;
  margin-top: 100px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  box-shadow: 0.1em 0.1em 1em rgba(0, 0, 0, 0.1);
`;

export const StatsTitle = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  color: #696969;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const setBgColor = props => {
  switch (props.id) {
    case 'id-1':
      return hex;
    case 'id-2':
      return hex;
    case 'id-3':
      return hex;
    case 'id-4':
      return hex;
    case 'id-5':
      return hex;
    default:
      return 'black';
  }
};

export const StatsItem = styled.li`
  display: inherit;
  width: calc(100% / 5);
  align-items: center;
  flex-direction: column;
  gap: 4px;
  padding: 16px;
  color: #ffffff;
  background-color: ${setBgColor};
`;

export const StatsLabel = styled.span`
  font-size: 12px;
`;

export const StatsPercentage = styled.span`
  font-size: 24px;
  font-weight: 700;
`;
