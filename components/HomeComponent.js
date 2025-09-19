import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { appStyles } from '../styling';
import { games } from '../data/const'; // Import fra data fil

const HomeComponent = ({ onGameSelect }) => {

    return (
        <View style={appStyles.viewContainer}>
            <Text style={appStyles.title}>🎮 Mine Spil</Text>
            <Text style={appStyles.subtitle}>Klik på et spil for at rate det</Text>

            {/* Liste med spil */}
            <FlatList
                data={games}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={appStyles.gameItem}
                        onPress={() => onGameSelect(item)} // Sender spillet til App.js
                    >
                        <Text style={appStyles.gameName}>{item.name}</Text>
                        <Text style={appStyles.gameGenre}>{item.genre}</Text>
                        <Text style={appStyles.arrow}>→</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default HomeComponent;