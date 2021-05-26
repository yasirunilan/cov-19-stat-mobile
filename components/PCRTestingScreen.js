import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';


class PCRTestingScreen extends React.Component {
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
                <Text style={styles.listItem}>Date: {item.item.date} - {item.item.count}</Text>
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

export default PCRTestingScreen;

const styles = StyleSheet.create({
    container:{
        margin: 40
    },
    listItem: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})
