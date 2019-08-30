import React from 'react';
import styled from 'styled-components';

import {
  grayLight,
  grayDark,
  grayMedium,
  grayDarker,
} from '../../constants/colors';

export const Container = styled.View`
  background: ${grayLight};
  flex: 1;
  padding: 15px 15px;
`;

export const Filters = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${grayDark};
  margin: 10px 0;
  border-radius: 5px;
`;

export const Select = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

export const Label = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  color: ${(props) => props.current ? grayDarker : grayMedium};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding-top: 10px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: grayDarker,
})`
    margin: 30px 0;
`;
