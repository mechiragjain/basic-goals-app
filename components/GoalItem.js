import React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

function GoalItem(props){
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
    },
})

export default GoalItem;