import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
const StatisticComponent = (props) => {
    return (
        <TouchableOpacity
            style={[styles.container]}
            onPress={()=> {
                    props.onClickCallback();
                }
            }
        >
            <View style={[styles.containerContent]}>
                <Text style={[styles.titleText]}>{props.title}</Text>
                <View style={styles.detailContent}>
                    <View style={[styles.iconContainer]}>
                        <MaterialCommunityIcons name={props.icon} size={props.size? props.size: 45} color={props.color} />
                    </View>
                    <Text style={[styles.countText]}>{props.count}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default StatisticComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 20,
    },
    countText: {
        fontWeight: 'bold',
        fontSize: 36
    },
    iconContainer: {
        justifyContent: 'center',
        paddingRight: 10
    },
    containerContent: {
        alignItems: 'center'
    },
    titleText: {
        fontSize: 20
    },
    detailContent: {
        flexDirection: 'row'
    }
})
