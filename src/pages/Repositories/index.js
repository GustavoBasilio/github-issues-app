import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Keyboard } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';
import Repository from '../../components/Repository';
import {black} from '../../constants/colors';
import {
    Container,
    Form,
    Input,
    Submit,
    List
} from './styles';

const Repositories = () => {

    const [insert, setInsert] = useState('');
    const [error, setError] = useState(false);
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(true);

    async function loadRepositories() {
        setLoading(true);
        const result = JSON.parse(await AsyncStorage.getItem("repositories"));
        setRepositories(result);
        setLoading(false);
    }

    useEffect(() => {
        loadRepositories();
    }, []);

    async function saveRepository(repository) {

        const data = {
            "id": repository.id,
            "name": repository.name,
            "owner": repository.owner.login,
            "avatar": repository.owner.avatar_url
        }

        const list = JSON.parse(await AsyncStorage.getItem('repositories'));

        if(list === null) {
            await AsyncStorage.setItem('repositories',  JSON.stringify([data]));
            setRepositories([data]);
        } else {

            const duplicated = list.filter((item) => item.id === data.id).length > 0;

            if(!duplicated) {
                await AsyncStorage.setItem('repositories', JSON.stringify([...list, data]));
                setRepositories([...list, data]);
            } else {
                setError(true);
            }

        }

        Keyboard.dismiss();

    }

    async function handleInsert () {

        try{

            setLoading(true);
            const result = await api.get(`/repos/${insert}`);
            await saveRepository(result.data);
            setError(false);
            setLoading(false);


        } catch(err) {

            setLoading(false);
            setError(true);
            console.log(err);

        }

    }

    return (
        <Container>
            <Form>
                <Input 
                    autoCapitalize="none"
                    error={error}
                    onChangeText={(input) => setInsert(input)}
                    autoCorrect={false}
                    placeholder="Adicionar novo repositório"
                />
                <Submit onPress={handleInsert}>
                    <Icon name="plus" size={20} color={black} />
                </Submit>
            </Form>
            <List 
                keyboardShouldPersistsTaps="handled"
                data={repositories}
                onRefresh={loadRepositories}
                refreshing={loading}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <Repository data={item}></Repository>
                )}
            />

        </Container>
    );

};

export default Repositories;