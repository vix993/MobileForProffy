import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

// expo picker decent library, try modal picker in order to enhace
// user experience when making teacher queries

function TeacherList() {
    const [areFiltersVisible, setAreFiltersVisible] = useState(false);

    function handleToggleFiltersVisible(){
        setAreFiltersVisible(!areFiltersVisible);
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Available Proffys"
             headerRight={(
                <BorderlessButton onPress={handleToggleFiltersVisible}>
                    <Feather name="filter" size={20} color="#FFF" />
                </BorderlessButton>
            )}
            >
                {areFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Subject</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Which subject?"
                            placeholderTextColor="#c1bccc" />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Week day</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Which day?"
                                    placeholderTextColor="#c1bccc" />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Time</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="What time?"
                                    placeholderTextColor="#c1bccc" />
                            </View>
                        </View>
                        <RectButton style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filter</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    );
}

export default TeacherList;