import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';

import studyIcon from '../../../assets/images/icons/study.png';
import teachIcon from '../../../assets/images/icons/give-classes.png';
import landingImg from '../../../assets/images/landing.png';
import heartIcon from '../../../assets/images/icons/heart.png';

import styles from './styles'

function Landing() {
    const { navigate } = useNavigation();

    function handleNavigateToTeachPage() {
         navigate('Teach');
    }

    function handleNavigateToStudyPages() {
        navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
            <Text style={styles.title}>
                Welcome to Proffy,{'\n'}
                <Text style={styles.titleBold}>
                    What would you like to do?
                </Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton
                 style={[styles.button, styles.buttonPrimary]}
                 onPress={handleNavigateToStudyPages}
                >
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Study</Text>
                </RectButton>

                <RectButton
                 onPress={handleNavigateToTeachPage}
                 style={[styles.button, styles.buttonSecondary]}
                >
                    <Image source={teachIcon} />
                    <Text style={styles.buttonText}>Teach</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total of 3123 connections. {' '}
                <Image source={heartIcon} />
            </Text>
        </View>
    );
}

export default Landing;