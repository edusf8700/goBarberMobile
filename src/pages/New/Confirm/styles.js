import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 60px;
`;

export const Name = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`;

export const Time = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  font-size: 18px;
  margin-top: 4px;
`;

export const ConfirmButton = styled(Button)`
  align-self: stretch;
  margin-top: 20px;
`;
