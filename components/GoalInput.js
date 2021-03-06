import React, {useState} from 'react';

import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Modal
  } from "react-native";


function GoalInput(props){

    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal("");
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Add" onPress={addGoalHandler} /></View>
                    <View style={styles.button}><Button title="Cancel" color="red" onPress={props.onCancel}></Button></View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },

    input: {
        width: "80%",
        borderBottomColor: "black",
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },

    buttonContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '60%',
    },

    button: {
        width: '40%',
    }
});

export default GoalInput;