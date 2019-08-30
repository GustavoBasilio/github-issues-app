import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { grayDark } from '../../constants/colors';
import { Container, Avatar, Info, Name, Owner, Submit} from './styles';

const Repository = ({data}) => {
    return (
        <Container>
            <Avatar source={{uri: data.avatar}} />
            <Info>
                <Name>{data.name}</Name>
                <Owner>{data.owner}</Owner>
            </Info>
            <Submit>
                <Icon name="keyboard-arrow-right" size={30} color={grayDark} />
            </Submit>
        </Container>
    )
};

export default Repository;
