import React from 'react';
import { View, Text } from 'react-native';
import { appStyles } from '../styling';

const ProfileComponent = () => {
    return (
        <View style={appStyles.viewContainer}>
            <Text style={appStyles.title}>👤 Min Profil</Text>

            <View style={appStyles.profileCard}>
                <Text style={appStyles.profileName}>Simon Hansen</Text>
                <Text style={appStyles.profileEmail}>simon@example.com</Text>
                <Text style={appStyles.profileStats}>Ratede spil: 3</Text>
            </View>

            <Text style={appStyles.subtitle}>Dine seneste ratings:</Text>
            <View style={appStyles.ratingHistory}>
                <Text style={appStyles.historyItem}>FC25: ⭐⭐⭐⭐⭐</Text>
                <Text style={appStyles.historyItem}>CS:GO: ⭐⭐⭐⭐</Text>
                <Text style={appStyles.historyItem}>League of Legends: ⭐⭐⭐</Text>
            </View>
        </View>
    );
};

export default ProfileComponent;
