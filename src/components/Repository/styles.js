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
`;

export const Info = styled.View`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    padding-left: 20px;
`;

export const Name = styled.Text`
    color: ${grayDarker};
    font-size: 18px;
`;

export const Owner = styled.Text`
    color: ${grayDark};
    font-size: 14px;
`;


export const Submit = styled.View`
    justify-content: center;
`;

