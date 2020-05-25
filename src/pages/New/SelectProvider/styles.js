import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ProviderList = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
})`
  margin-top: 60px;
  padding: 0 20px;
`;

export const Provider = styled(RectButton)`
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  flex: 1;

  align-items: center;
  margin: 0 10px 20px;
`;

export const Avatar = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 30px;
`;

export const Name = styled.Text`
  margin-top: 10px;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  color: #333;
`;
