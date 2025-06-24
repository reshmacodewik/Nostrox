import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';

interface CalendarEvent {
  id: string;
  date: string;
  time: string;
  title: string;
  currency: string;
  actual: string;
  forecast: string;
  previous: string;
}

const calendarEvents: CalendarEvent[] = [
  {
    id: '1',
    date: '5 Jun 2025',
    time: '6:30AM',
    title: 'Average Cash Earnings Y/Y',
    currency: 'JPY',
    actual: '2.3%',
    forecast: '2.6%',
    previous: '2.1%',
  },
  {
    id: '2',
    date: '5 Jun 2025',
    time: '6:30AM',
    title: 'Average Cash Earnings Y/Y',
    currency: 'JPY',
    actual: '2.3%',
    forecast: '2.6%',
    previous: '2.1%',
  },
  {
    id: '3',
    date: '5 Jun 2025',
    time: '6:30AM',
    title: 'Average Cash Earnings Y/Y',
    currency: 'JPY',
    actual: '2.3%',
    forecast: '2.6%',
    previous: '2.1%',
  },
];

const CalendarScreen: React.FC = () => {
  // const { wp } = useResponsive();

  return (
    <View style={styles.container}>
      <Header title="Calendar" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Top Section */}
        <View style={styles.dateSelector}>
          <TouchableOpacity style={styles.todayButton}>
            <Text style={styles.todayText}>Today</Text>
          </TouchableOpacity>
          <Text style={styles.dateRange}>Jun 2 - Jun 6, 2025</Text>
        </View>

        {/* Days Row */}
        <View style={styles.daysContainer}>
          <View style={styles.daysRow}>
            {[
              { day: 'Mon', date: '2' },
              { day: 'Tue', date: '3' },
              { day: 'Wed', date: '4' },
              { day: 'Thu', date: '5' },
              { day: 'Fri', date: '6' },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dayButton,
                  item.day === 'Thu' && styles.activeDayButton,
                ]}
              >
                <Text
                  style={[
                    styles.dayText,
                    item.day === 'Thu' && styles.activeDayText,
                  ]}
                >
                  {item.day}
                </Text>
                <Text
                  style={[
                    styles.dateText,
                    item.day === 'Thu' && styles.activeDayText,
                  ]}
                >
                  {item.date}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Time & Filters */}
        <View style={styles.filterRow}>
          <View style={styles.timeZone}>
            <Image
              source={require('../../assets/icon/location.png')}
              resizeMode="contain"
              style={styles.chartIcon}
            />
            <Text style={styles.timeZoneText}>21:16 (UTC +5)</Text>

            <Ionicons
              name="chevron-down"
              size={18}
              color="#333"
              style={styles.arrowIcon}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <MaterialIcons name="tune" size={16} color="#333" />
            <Text style={styles.filterButtonText}>Filters</Text>
          </TouchableOpacity>
        </View>

        {/* Events Section */}
        <Text style={styles.sectionTitle}>Thursday June 5</Text>

        {calendarEvents.map(event => (
          <View key={event.id} style={styles.eventCard}>
            <View style={styles.eventHeader}>
              <Text style={styles.eventDate}>
                {event.date} {event.time}
              </Text>
              <Text style={styles.eventTitle}>{event.title}</Text>
            </View>

            <View style={styles.eventDetails}>
              <View style={styles.eventIcon}>
                <Image
                  source={require('../../assets/icon/graph.png')}
                  resizeMode="contain"
                  style={styles.chartIcon}
                />
                <Image
                  source={require('../../assets/icon/piechart.png')}
                  resizeMode="contain"
                  style={styles.chartIcon}
                />
              </View>
              <Text style={styles.currencyText}>{event.currency}</Text>
            </View>

            <View style={styles.eventStats}>
              <View style={styles.statBox}>
                <Text style={styles.statValue}>{event.actual}</Text>
                <Text style={styles.statLabel}>Actual</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statValue}>{event.forecast}</Text>
                <Text style={styles.statLabel}>Forecast</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statValue}>{event.previous}</Text>
                <Text style={styles.statLabel}>Previous</Text>
              </View>
              <View style={styles.CalendarBox}>
                <View style={styles.calendarIconBox}>
                  <Image
                    source={require('../../assets/icon/calendar.png')}
                    resizeMode="contain"
                    style={styles.calendarIcon}
                  />
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: wp(4),
  },
  dateSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(1.5),
  },
  arrowIcon: {
    left: wp(12),
  },
  todayButton: {
    backgroundColor: '#F0F0F0',
    paddingVertical: hp(0.8),
    paddingHorizontal: wp(6),
    borderRadius: wp(2),
  },
  todayText: {
    fontSize: wp(3.5),
    color: '#333',
  },
  dateRange: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: '#333',
  },
  daysContainer: {
    marginTop: hp(1.5),
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayButton: {
    width: wp(16),
    height: wp(16),
    backgroundColor: '#fff',
    borderRadius: wp(3),
    borderWidth: 1,
    borderColor: '#D7D7D7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  activeDayButton: {
    backgroundColor: '#4BF8BD',
    borderColor: '#4BF8BD',
  },
  dayText: {
    fontSize: wp(3.5),
    fontWeight: 'bold',
    color: '#000',
  },
  dateText: {
    fontSize: wp(3.5),
    marginTop: hp(0.5),
    color: '#000',
  },
  activeDayText: {
    color: '#000',
    fontWeight: 'bold',
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(2),
  },
  timeZone: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00000026',
    borderRadius: wp(2),
    paddingVertical: hp(0.8),
    paddingLeft: wp(2),
    paddingRight: wp(15),
  },
  timeZoneText: {
    fontSize: wp(3.5),
    color: '#333',
    marginHorizontal: wp(1),
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00000026',
    borderRadius: wp(2),
    paddingVertical: hp(0.8),
    paddingHorizontal: wp(10),
  },
  filterButtonText: {
    fontSize: wp(3.5),
    color: '#000',
    marginLeft: wp(1),
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: hp(3),
  },
  eventCard: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: wp(2),
    padding: wp(4),
    marginBottom: hp(2),
  },
  eventHeader: {
    marginBottom: hp(1),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  eventDate: {
    fontSize: wp(3.5),
    fontWeight: '600',
    color: '#000',
  },
  eventTitle: {
    fontSize: wp(3.5),
    color: '#000',
    marginLeft: wp(2),
  },
  eventDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2.5),
  },
  eventIcon: {
    marginRight: wp(2),
    flexDirection: 'row',
    gap: wp(1),
  },
  currencyText: {
    fontSize: wp(3),
    color: '#000000',
    fontWeight: '300',
  },
  eventStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statBox: {
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(5.5),
    borderRadius: wp(2),
  },
  statValue: {
    fontSize: wp(3.5),
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: wp(3),
    color: '#777',
  },
  CalendarBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarIconBox: {
    backgroundColor: '#4BF8BD',
    borderRadius: wp(2),
    paddingHorizontal: wp(3),
    paddingVertical: wp(3),
  },
  calendarIcon: {
    width: wp(8),
    height: wp(8),
  },
  chartIcon: {
    width: wp(5),
    height: wp(5),
  },
});

function hp(percent: number): number {
  const { height } = Dimensions.get('window');
  return (height * percent) / 100;
}
function wp(percent: number): number {
  const { width } = Dimensions.get('window');
  return (width * percent) / 100;
}
