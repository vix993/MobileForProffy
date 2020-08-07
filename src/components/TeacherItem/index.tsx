import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem(){
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                 style={styles.avatar}
                 source={{ uri: 'https://avatars2.githubusercontent.com/u/52217652?s=460&u=5be4bb5ad9000308155c523c6334f13cc141e842&v=4'}}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Robert Greene</Text>
                    <Text style={styles.subject}>English</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                “Never waste valuable time, 
                {'\n'}{'\n'}
                or mental peace of mind, on the affairs of others—that is too high a price to pay.”
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Price/hour {'   '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favouriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon}></Image> */}
                        <Image source={unFavoriteIcon}></Image>
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}></Image>
                        <Text style={styles.contactButtonText}>Get in Touch</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;