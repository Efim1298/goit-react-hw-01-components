import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  display: table;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  margin-bottom: 100px;
  box-shadow: 0.1em 0.1em 1em rgba(0, 0, 0, 0.1);
`;
export const TableThead = styled.thead`
  text-align: center;
  background-color: #00bcd5;
`;

export const TableTitle = styled.th`
  text-align: center;
  vertical-align: center;
  width: calc(100% / 3);
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  padding: 10px;
  text-transform: uppercase;
`;

export const TableBody = styled.tbody`
  background-color: #fff;
`;

export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: #ecf1f3;
  }
`;
export const TableCell = styled.td`
  color: #787e84;
  padding: 0px;
  text-align: center;
  height: 40px;
`;

export const TableCellType = styled.td`
  color: #787e84;
  text-align: left;
  text-transform: capitalize;
  height: 40px;
  text-align: center;
`;
