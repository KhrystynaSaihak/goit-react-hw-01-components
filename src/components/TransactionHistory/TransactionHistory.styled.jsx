import styled from 'styled-components';

export const Table = styled.table`
  width: 600px;
  margin: 20px 40px;
  thead {
    background-color: #7adde5;
  }
  thead th {
    padding: 10px;
    color: white;
  }
  td {
    padding: 12px 0;
    text-align: center;
    color: #9f9f9f;
  }
  tbody tr:nth-of-type(odd) {
    background-color: #ffffff;
  }
  tbody tr:nth-of-type(even) {
    background-color: #e9e9e9;
  }
`;
