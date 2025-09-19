import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import RatingComponent from '../components/RatingComponent';
import { appStyles } from '../styling';

const GameRatingScreen = ({ route, navigation }) => {
    // Få det valgte spil fra navigation params
    const { selectedGame } = route.params || {};

    // Håndter tilbage navigation - gå tilbage til HomeMain i Stack
    const handleGoBack = () => {
        navigation.goBack(); // Går tilbage til forrige screen i Stack
    };

    return (
        <View style={appStyles.container}>
            {/* TILBAGE KNAP - Navigation logik hører til i Screen */}
            <TouchableOpacity style={appStyles.backButton} onPress={handleGoBack}>
                <Text style={appStyles.backButtonText}>← Tilbage</Text>
            </TouchableOpacity>

            {/* RATING KOMPONENT - Kun UI logik */}
            <RatingComponent selectedGame={selectedGame} />
        </View>
    );
};

export default GameRatingScreen;
