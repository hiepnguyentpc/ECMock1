import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    quizContainer:{
        width: 370, 
        height: 120,
        backgroundColor:'rgba(52,52,52, 0.05)',
        marginTop: 30,
        borderRadius: 10,
        flexDirection:"row"
    },
    container:{
        alignItems:"center"
    },
    quizImage:{
        width: 72,
        height: 72,
        alignSelf:"center",
        marginLeft: 20,
        borderWidth: 0.5,
        borderRadius: 10,
        backgroundColor:"blue"
    },
    descriptionText:{
        fontSize: 15,
        color:"#999999",
        fontWeight:"bold",
        marginBottom: 5,
    },
    quizName:{
        fontSize: 16,
        color:"blue",
        fontWeight:"bold",
        marginBottom: 10,
    }
})

export default styles