import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 60px 0 30px;
`;

export const DateButton = styled.TouchableOpacity`
  background: rgba(0, 0, 0, 0.1);
  height: 46px;
  padding: 0 15px;
  border-radius: 4px;
  margin: 0 30px;

  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  margin-left: 15px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;
