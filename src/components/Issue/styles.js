import styled from 'styled-components';
import { white, grayDarker, grayDark } from '../../constants/colors';

export const Container = styled.View`
  background-color: ${white}
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  padding: 20px 20px;
  margin-bottom: 10px;
`;

export const Avatar = styled.Image`
  width: 35px;
  height: 35px;
  justify-content: center;
  padding:  0 10px;
  border-radius: 35px;
`;

export const Info = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-left: 20px;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  color: ${grayDarker};
  font-size: 14px;
`;

export const Owner = styled.Text`
  color: ${grayDark};
  font-size: 12px;
`;

export const Submit = styled.TouchableOpacity`
  justify-content: center;
`;
