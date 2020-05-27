import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const HourList = styled.FlatList.attrs({
  numColumns: 2,
})``;

export const Hour = styled(RectButton)`
  background: #fff;
  padding: 20px;
  margin: 0 10px 20px;
  border-radius: 4px;
  opacity: ${(props) => (props.enabled ? 1 : 0.6)}

  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: #333;
  font-size: 16px;
`;
