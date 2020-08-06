import React from 'react';
import { View } from 'react-native';
import PageHeader from '../../components/PageHeader'

import styles from './styles';

function Favourites(){
    return (
        <View style={styles.container}>
            <PageHeader title="My Favourite Proffys" />
        </View>
    );
}

export default Favourites;