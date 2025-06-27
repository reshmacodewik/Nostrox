import { View, Text, StyleSheet } from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import Header from '../../../components/Header';


const PrivacyScreen: React.FC = () => {
  const { wp, hp } = useResponsive();
  const styles = getStyles(wp, hp);

  return (
    <View style={styles.container}>
      <Header
        title="Privacy Policy"
        customIcon={require('../../../../assets/icon/backarrow.png')}
        onIconPress={() => console.log('Settings pressed')}
      />
      <Text style={styles.descriptionreg}>
        Lorem Ipsum is simply dummy text of the printing and type setting
        industry. Lorem Ipsum has been the industry's standard dummy text.
        {'\n\n'}
        Lorem Ipsum is simply dummy text of the printing and type setting
        industry. Lorem Ipsum has been the industry's standard dummy text.
        {'\n\n'}
        Lorem Ipsum is simply dummy text of the printing and type setting
        industry. Lorem Ipsum has been the industry's standard dummy text. Lorem
        Ipsum is simply dummy text of the printing and type setting industry.
        Lorem Ipsum has been the industry's standard dummy text.
        {'\n\n'}
        Lorem Ipsum is simply dummy text of the printing and type setting
        industry. Lorem Ipsum has been the industry's standard dummy text.
        {'\n\n'}
        Lorem Ipsum is simply dummy text of the printing and type setting
        industry. Lorem Ipsum has been the industry's standard dummy text.
        {'\n\n'}
        Lorem Ipsum is simply dummy text of the printing and type setting
        industry. Lorem Ipsum has been the industry's standard dummy text.
        {'\n\n'}
        Lorem Ipsum is simply dummy text of the printing and type setting
        industry. Lorem Ipsum has been the industry's standard dummy text.
      </Text>
    </View>
  );
};

export default PrivacyScreen;

const getStyles = (wp: (val: number) => number, hp: (val: number) => number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    descriptionreg: {
      fontSize: wp(3.8),
      color: '#333',
      margin: hp(2.5),
    },
  });
