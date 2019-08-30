import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Linking } from 'react-native';

import { grayDark } from '../../constants/colors';
import {
  Container,
  Avatar,
  Info,
  Name,
  Owner,
  Submit,
} from './styles';

// Component for the Issue item in the List
const Issue = ({ data }) => (
  <Container>
    <Avatar source={{ uri: data.avatar }} />
    <Info>
      <Name>{data.title}</Name>
      <Owner>{data.user}</Owner>
    </Info>
    <Submit onPress={() => Linking.openURL(data.url)}>
      <Icon name="keyboard-arrow-right" size={30} color={grayDark} />
    </Submit>
  </Container>
);

export default Issue;
