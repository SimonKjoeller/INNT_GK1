import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { ratingStyles, appStyles } from '../styling'; // Import separat styling

const RatingComponent = ({ selectedGame }) => {
    // Opret en state til at gemme den valgte rating (1-10)
    const [selectedRating, setSelectedRating] = useState(0);

    // Funktion til at oprette rating knapper - nu med separat styling
    const renderRatingButtons = () => {
        const buttons = [];

        // Loop for at skabe små knapper fra 1 til 10
        for (let i = 1; i <= 10; i++) {
            buttons.push(
                <TouchableOpacity
                    key={i} // Unik nøgle for hver knap
                    style={[
                        ratingStyles.ratingButton, // Base styling fra styling.js
                        selectedRating === i && ratingStyles.selectedButton // Tilføj selected styling hvis valgt
                    ]}
                    onPress={() => setSelectedRating(i)}
                >
                    <Text style={[
                        ratingStyles.buttonText, // Base tekst styling
                        selectedRating === i && ratingStyles.selectedButtonText // Hvid tekst hvis valgt
                    ]}>
                        {i}
                    </Text>
                </TouchableOpacity>
            );
        }
        return buttons;
    };

    // Funktion til at få den rigtige farve baseret på rating
    const getFeedbackStyle = () => {
        if (selectedRating >= 8) return ratingStyles.excellentColor;
        if (selectedRating >= 5) return ratingStyles.goodColor;
        return ratingStyles.poorColor;
    };

    return (
        <View style={ratingStyles.container}>
            {/* Vis det valgte spil */}
            <Text style={appStyles.title}>🎯 Rate Spil</Text>
            <Text style={appStyles.gameTitle}>{selectedGame?.name}</Text>
            <Text style={appStyles.gameGenreSmall}>{selectedGame?.genre}</Text>

            {/* Header med nuværende rating */}
            <Text style={ratingStyles.headerText}>
                {selectedRating === 0 ? 'Vælg din rating:' : `Din rating: ${selectedRating}/10`}
            </Text>

            {/* Container til små rating bokse - alle synlige uden scrolling */}
            <View style={ratingStyles.ratingsContainer}>
                {renderRatingButtons()}
            </View>

            {/* Vis besked afhængigt af rating */}
            {selectedRating > 0 && (
                <Text style={[ratingStyles.feedbackText, getFeedbackStyle()]}>
                    {selectedRating >= 8 ? '🌟 Fantastisk!' :
                        selectedRating >= 5 ? '👍 Godt!' :
                            '👎 Kunne være bedre'}
                </Text>
            )}
        </View>
    );
}

export default RatingComponent;