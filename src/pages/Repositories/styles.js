import React from 'react';
import styled from 'styled-components';

import {white, grayLight, grayDark, red} from '../../constants/colors';

export const Container = styled.View`
    background: ${grayLight};
    flex: 1;
    padding: 0 15px;
`
export const Form = styled.View`
    display: flex;
    flex-direction: row;
    padding: 15px 0 10px 0;
    margin-bottom: 15px;
    border-style: solid;
    border-bottom-width: 2px;
    border-bottom-color:${grayDark};
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: grayDark,
})`
    background-color: ${white};
    padding: 5px 15px;
    flex: 1;
    border-radius: 6px;
    border: 2px solid ${(props) => (props.error ? red : grayDark)};
    font-size: 14px;
`;

export const Submit = styled.TouchableOpacity`
    justify-content: center;
    padding-left: 15px;
`;

export const List = styled.TouchableOpacity.attrs({
    showsVerticalScrollIndicator: false
})`
    padding-top: 10px;
`;