import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { CreateStackNavigator } from '@react-navigation/stack';
import { Container, Content, Header, ListItem, Text } from 'native-base';
import moment from 'moment';

const TimeSlot = () => {
    const [timeSlots, setTimeSlots] = React.useState([]);
    const createTimeSlots = (fromTime, toTime) => {
        let startTime = moment(fromTime, 'hh:mm A');
        let endTime = moment(toTime, 'hh:mm A');
        if (endTime.isBefore(startTime)) {
            endTime.add(1, 'day');
        }

        let arr = [];
        while (startTime <= endTime) {
            arr.push(new moment(startTime).format('hh:mm A'));
            startTime.add(1, 'hours');
        }
        return arr;
    };


    React.useEffect(() => {
        setTimeSlots(createTimeSlots('08:00 AM', '09:00 PM'));
    }, []);

    return (


        <Container>
            <Header />
            <Content>
                {timeSlots.map((item, index) => (
                    <ListItem>
                        <Text>
                            {item}
                            {timeSlots[index + 1] ? ' - ' + timeSlots[index + 1] : ''}
                        </Text>
                    </ListItem>
                ))}
            </Content>
        </Container>
    )

}

export const TimeSlotMenu = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Detail' headerMode='none'>
                <Stack.Screen name='Detail' component={TimeSlot} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}