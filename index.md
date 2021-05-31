## Setting Up the Project

### Install Expo
Follow this guide on [Expo Installation](https://docs.expo.io/get-started/installation/) and set up the environment accordingly.


### Create the App
Run the following command to create the app
```shell
#Create a project name covidStats.Select the "blank" template when prompted
expo init covidStats

#Navigate to the project directory
cd covidStats
```

### Running the App
```shell
expo start
```


### Modifying the App

1) Create the "components" folder.
2) Create HomeScreen.js Component.

```javascript
//App.js

import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import HomeScreen from "./components/HomeScreen";


const App = () => {
  return (
  <SafeAreaView style={styles.container}>
      <HomeScreen/>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#dedbdb'
  },
});

export default App;
```

```javascript
//HomeScreen.js

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        let response = await fetch(`https://www.hpb.health.gov.lk/api/get-current-statistical`);
        let jsonResponse = await response.json();
        let healthData = jsonResponse.data;
        this.setState({data: healthData})
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerCard}>
                    <View style={styles.titleCard}>
                        <Text style={styles.titleText}>Covid-19 Statistics</Text>
                    </View>
                    <View style={styles.sourceCard}>
                        <Text>Data Source: <Text style={styles.linkText}>Health Promotion Bureau</Text></Text>
                    </View>
                    <Text>Last Updated: {this.state.data.update_date_time}</Text>
                </View>

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
```

3) Create Statistic Card Details
```javascript
//HomeScreen.js

import React from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import * as Linking from 'expo-linking';
import {MaterialCommunityIcons} from "@expo/vector-icons";


class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        let response = await fetch(`https://www.hpb.health.gov.lk/api/get-current-statistical`);
        let jsonResponse = await response.json();
        let healthData = jsonResponse.data;
        this.setState({data: healthData})
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
                    <TouchableOpacity
                        style={[styles.statCardContainer]}
                        onPress={()=> {}}>
                        <View style={[styles.containerContent]}>
                            <Text style={[styles.statCardTitleText]}>{'Total Patients'}</Text>
                            <View style={styles.detailContent}>
                                <View style={[styles.iconContainer]}>
                                    <MaterialCommunityIcons name={'human'} size={45} color={'green'} />
                                </View>
                                <Text style={[styles.countText]}>{this.state.data.local_total_cases}</Text>
                            </View>
                        </View>

                    </TouchableOpacity>

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
    },
    statCardContainer: {
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
    statCardTitleText: {
        fontSize: 20
    },
    detailContent: {
        flexDirection: 'row'
    }
})


```

4) Create Card Component
```javascript
//HomeScreen.js

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

    async componentDidMount() {
        let response = await fetch(`https://www.hpb.health.gov.lk/api/get-current-statistical`);
        let jsonResponse = await response.json();
        let healthData = jsonResponse.data;
        this.setState({data: healthData})
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
```
```javascript
//StatisticComponent.js
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
const StatisticComponent = (props) => {
    return (
        <TouchableOpacity
            style={[styles.statCardContainer]}
            onPress={()=> {
                    props.onClickCallback();
                }
            }
        >
            <View style={[styles.containerContent]}>
                <Text style={[styles.statCardTitleText]}>{props.title}</Text>
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
    statCardContainer: {
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
    statCardTitleText: {
        fontSize: 20
    },
    detailContent: {
        flexDirection: 'row'
    }
})
```


5) Add All Components

```javascript
//HomeScreen.js

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

    async componentDidMount() {
        let response = await fetch(`https://www.hpb.health.gov.lk/api/get-current-statistical`);
        let jsonResponse = await response.json();
        let healthData = jsonResponse.data;
        this.setState({data: healthData})
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
                        onClickCallback={()=> {}}
                    />
                    <StatisticComponent
                        title={'Total In Hospitals'}
                        count={this.state.data.local_total_number_of_individuals_in_hospitals}
                        icon={'hospital-building'}
                        color={'orange'}
                        onClickCallback={()=> {}}
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


```

6) Adding Navigation

```javascript
//App.js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import HomeScreen from "./components/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PCRTestingScreen from "./components/PCRTestingScreen";
import HospitalizationDetailsScreen from "./components/HospitalizationDetailsScreen";

const App = () => {
    const Stack = createStackNavigator();
  return (
      <SafeAreaView style={styles.container}>
          <NavigationContainer>
              <Stack.Navigator screenOptions={{
                  headerShown: false
              }}>
                  <Stack.Screen name="Home" component={HomeScreen}/>
                  <Stack.Screen name="PCRTesting" component={PCRTestingScreen} />
                  <Stack.Screen name="HospitalizationDetails" component={HospitalizationDetailsScreen} />
              </Stack.Navigator>
          </NavigationContainer>
          <StatusBar/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#dedbdb'
  },
});

export default App;
```

```javascript
//HomeScreen.js

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

    async componentDidMount() {
        let response = await fetch(`https://www.hpb.health.gov.lk/api/get-current-statistical`);
        let jsonResponse = await response.json();
        let healthData = jsonResponse.data;
        this.setState({data: healthData})
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
                        onClickCallback={()=> {}}
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

```

7) Building the app
```bash
//android
expo build:android

or
expo build:android -t apk

//ios
expo build:ios
```

```html
<div data-snack-id="@yasiruorange/covid-19-demo-mobile" data-snack-platform="android" data-snack-preview="true" data-snack-theme="dark" style="overflow:hidden;background:#212121;border:1px solid var(--color-border);border-radius:4px;height:505px;width:100%"></div>
<script async src="https://snack.expo.io/embed.js"></script>


```

