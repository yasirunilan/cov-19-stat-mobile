import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import * as Linking from 'expo-linking';
import StatisticComponent from "./StatisticComponent";


class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getHealthData();
    }

    getHealthData = async () => {
        let response = await fetch(`https://www.hpb.health.gov.lk/api/get-current-statistical`);
        let jsonResponse = await response.json();
        let healthData = jsonResponse.data;
        this.setState({data: healthData})
        console.log(healthData)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerCard}>
                    <View style={styles.titleCard}>
                        <Text style={styles.titleText}>Covid-19 Statistics</Text>
                    </View>
                    <View style={styles.sourceCard}>
                        <Text>Data Source: <Text onClick={()=> {
                            Linking.openURL('https://www.hpb.health.gov.lk');
                        }} style={styles.linkText}>Health Promotion Bureau</Text></Text>
                    </View>
                    <Text>Last Updated: {this.state.data.update_date_time}</Text>

                </View>
                <ScrollView>
                    <StatisticComponent
                        title={'Total Patients'}
                        count={this.state.data.local_total_cases}
                        icon={'human'}
                        color={'green'}
                        onClickCallback={()=> {}}
                    />
                    <StatisticComponent
                        title={'Total PCR Count'}
                        count={this.state.data.total_pcr_testing_count}
                        icon={'account-search'}
                        color={'green'}
                        onClickCallback={()=> {
                            this.props.navigation.navigate('PCRTesting', {data: this.state.data.daily_pcr_testing_data});
                        }}
                    />
                    <StatisticComponent
                        title={'Total In Hospitals'}
                        count={this.state.data.local_total_number_of_individuals_in_hospitals}
                        icon={'hospital-building'}
                        color={'orange'}
                        onClickCallback={()=> {
                            this.props.navigation.navigate('HospitalizationDetails', {data: this.state.data.hospital_data})
                        }}
                    />
                    <StatisticComponent
                        title={'Deaths'}
                        count={this.state.data.local_deaths}
                        icon={'human-wheelchair'}
                        color={'red'}
                        onClickCallback={()=> {}}
                    />
                    <StatisticComponent
                        title={'Total New Cases'}
                        count={this.state.data.local_new_cases}
                        icon={'calendar-today'}
                        color={'green'}
                        onClickCallback={()=> {}}
                    />
                    <StatisticComponent
                        title={'Total Recovered'}
                        count={this.state.data.local_recovered}
                        icon={'arrow-top-right'}
                        color={'green'}
                        onClickCallback={()=> {}}
                    />

                </ScrollView>

            </View>

        );
    }

}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        margin: 40
    },
    headerCard: {
        alignItems: 'center'
    },
    titleCard: {
        alignContent: 'center'
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    sourceCard: {
        paddingTop: 10
    },
    linkText:{
        color: 'blue'
    }
})
