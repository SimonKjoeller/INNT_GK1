import { StyleSheet } from 'react-native';


export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        paddingTop: 50,
    },

    viewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },

    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },

    listItem: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        marginVertical: 5,
        borderRadius: 8,
        width: 200,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
    },

    navButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },


    gameItem: {
        backgroundColor: '#f8f9fa',
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
        width: 250,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },

    gameName: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        color: '#333',
    },

    gameGenre: {
        fontSize: 12,
        color: '#666',
        marginRight: 10,
    },

    arrow: {
        fontSize: 18,
        color: '#007AFF',
    },

    backButton: {
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginBottom: 20,
    },

    backButtonText: {
        color: '#007AFF',
        fontWeight: 'bold',
    },

    gameTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },

    gameGenreSmall: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
    },

    // Profile styles
    profileCard: {
        backgroundColor: '#f8f9fa',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        width: 250,
    },

    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },

    profileEmail: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },

    profileStats: {
        fontSize: 14,
        color: '#007AFF',
        fontWeight: 'bold',
    },

    ratingHistory: {
        backgroundColor: '#f8f9fa',
        padding: 15,
        borderRadius: 10,
        width: 250,
    },

    historyItem: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
    },
});


export const ratingStyles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },

    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },

    ratingsContainer: {
        flexDirection: 'row',
        // flexWrap fjernet - alle knapper på én linje
        justifyContent: 'space-between', // Fordeler knapper jævnt
        alignItems: 'space-between',
        marginBottom: 20,
        paddingHorizontal: 10, // Lidt padding på siderne
    },

    ratingButton: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 6,
        paddingHorizontal: 6,
        margin: 1, // Mindre margin for at spare plads
        borderRadius: 6,
        width: 28, // Fast bredde for ensartet udseende
        height: 28, // Fast højde
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },

    selectedButton: {
        backgroundColor: '#007AFF',
    },

    buttonText: {
        color: '#333',
        fontWeight: 'bold',
        fontSize: 14,
    },

    selectedButtonText: {
        color: 'white',
    },

    feedbackText: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 16,
        fontWeight: '600',
    },

    excellentColor: {
        color: 'green',
    },

    goodColor: {
        color: 'orange',
    },

    poorColor: {
        color: 'red',
    },
});
