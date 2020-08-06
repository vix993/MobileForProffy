import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import teachBackgroundImg from '../../../assets/images/give-classes-background.png';

import styles from './styles';

function Teach() {
    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground
             resizeMode="contain"
             source={teachBackgroundImg}
             style={styles.content}
            >
                <Text style={styles.title}>Would you like to be a Proffy?</Text>
                <Text style={styles.description}>
                    Go ahead and register as a teacher on our web platform!
                </Text>

            </ImageBackground>

            <RectButton onPress={handleNavigateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>Take me there</Text>
            </RectButton>
        </View>
    );
}

export default Teach;