import styled from '@emotion/styled';

export const Friends = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  gap: 10px;
`;
export const FriendItem = styled.li`
  width: 300px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px;
  margin-bottom: 15px;
  background-color: #ffffff;
  box-shadow: 0.1em 0.1em 1em rgba(0, 0, 0, 0.1);
`;
export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${props => (props.status ? 'green' : 'red')};
  border-radius: 50%;
`;
export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
