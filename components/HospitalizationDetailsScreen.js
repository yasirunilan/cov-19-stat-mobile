import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';


class HospitalizationDetailsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {

    }

    rowRenderer = (item) => {
        return (
            <View>
                <Text style={styles.listItem}>Hospital: {item.item.hospital.name_si} - {item.item.treatment_total}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.props.route.params.data} renderItem={this.rowRenderer} keyExtractor={item => item.id}/>
            </View>

        );
    }

}

export default HospitalizationDetailsScreen;
const styles = StyleSheet.create({
    container:{
        margin: 40
    },
    listItem: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})
