import React from 'react';
import HomeComponent from '../components/HomeComponent';

const HomeScreen = ({ navigation }) => {
    // Håndter når bruger klikker på et spil
    const handleGameSelect = (game) => {
        // Naviger til GameRating screen i Stack Navigator
        navigation.navigate('GameRating', { selectedGame: game });
    };

    return <HomeComponent onGameSelect={handleGameSelect} />;
};

export default HomeScreen;
