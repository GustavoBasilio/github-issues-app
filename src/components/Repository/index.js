import React from 'react';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { grayDark } from '../../constants/colors';
import {
  Container,
  Avatar,
  Info,
  Name,
  Owner,
  Submit,
} from './styles';

const Repository = ({ data, navigation }) => (
  <Container>
    <Avatar source={{ uri: data.avatar }} />
    <Info>
      <Name>{data.name}</Name>
      <Owner>{data.owner}</Owner>
    </Info>
    <Submit
      onPress={() => navigation.navigate('Issues', {
        name: data.name,
        owner: data.owner,
      })}
    >
      <Icon
        name="keyboard-arrow-right"
        size={30}
        color={grayDark}
      />
    </Submit>
  </Container>
);

export default withNavigation(Repository);
