import React from 'react';
import {View, Text, FlatList} from 'react-native';


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
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Date: {item.item.date} - {item.item.count}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{margin: 40}}>
                <FlatList data={this.props.route.params.data} renderItem={this.rowRenderer} keyExtractor={item => item.id}/>
            </View>

        );
    }

}

export default PCRTestingScreen;
