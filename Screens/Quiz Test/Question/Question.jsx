

import { View, Text, TouchableOpacity } from "react-native"
import styles from "./styles"

const Question = () => {
    return(
        <View style={{backgroundColor:"white", height:"100%"}}>
            <Text style={{marginTop: 40,fontSize:20, fontWeight:"bold", alignSelf:"center", marginBottom:40,}}>What is the meaning of UI UX Design?</Text>


            <TouchableOpacity style={styles.touchableOp}
                onPress={() => alert("True")}
            >
                <View style={styles.circle}>
                    <Text style={styles.option}>A</Text>
                </View>
                <Text style={styles.answerText}>User Interface and User Experience</Text>
            </TouchableOpacity>
























            <TouchableOpacity style={styles.touchableOp}
                onPress={() => alert("False")}>
                <View style={styles.circle}>
                    <Text style={styles.option}>B</Text>
                </View>
                <Text style={styles.answerText}>User Interface and User Experience</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableOp}
            onPress={() => alert("False")}>
                <View style={styles.circle}>
                    <Text style={styles.option}>C</Text>
                </View>
                <Text style={styles.answerText}>User Interface and User Experience</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableOp}
            onPress={() => alert("False")}>
                <View style={styles.circle}>
                    <Text style={styles.option}>D</Text>
                </View>
                <Text style={styles.answerText}>User Interface and User Experience</Text>
            </TouchableOpacity>






        </View>
    )
}

export default Question


/*
            <TouchableOpacity style={{height:50, width:195, borderRadius:10, backgroundColor:"#1750AC", alignSelf:"center", alignItems:"center",justifyContent:"center", marginTop:80}}>
                <Text style={{fontWeight:"bold", fontSize:16, color:"white",}}>Submit</Text>

            </TouchableOpacity>
        */