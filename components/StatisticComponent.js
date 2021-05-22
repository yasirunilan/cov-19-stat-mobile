import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
const StatisticComponent = (props) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: 'white',
                borderRadius: 5,
                marginTop: 20,
            }}
            onPress={()=> {
                    props.onClickCallback();
                }
            }
        >
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20}}>{props.title}</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={{justifyContent: 'center', paddingRight: 10}}>
                        <MaterialCommunityIcons name={props.icon} size={props.size? props.size: 45} color={props.color} />
                    </View>
                    <Text style={{fontWeight: 'bold', fontSize: 36}}>{props.count}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default StatisticComponent;
