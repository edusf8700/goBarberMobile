import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 4px;
  opacity: ${(props) => (props.past ? 0.6 : 1)};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const Infor = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const Time = styled.Text`
  font-size: 13px;
  color: #999;
  margin-top: 2px;
`;
