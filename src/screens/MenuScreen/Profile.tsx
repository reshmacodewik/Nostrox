import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Switch,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import { Dimensions } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';
import Accordion from 'react-native-collapsible/Accordion';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const TABS = [
  'Personal Information',
  'Security',
  'Nostrox Points',
  'Newsletters',
  'Registration Deletion',
];

const countries = [
  { title: 'USA', icon: 'flag' },
  { title: 'India', icon: 'flag' },
  { title: 'UK', icon: 'flag' },
  { title: 'Canada', icon: 'flag' },
];
const SECTIONS = [
  { title: 'Two-Factor Authentication', type: 'twoFactor' },
  { title: 'Password Change', type: 'password' },
];
const ProfileScreen = () => {
  const { wp, hp } = useResponsive();
  const [activeTab, setActiveTab] = useState('Personal Information');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [activeSections, setActiveSections] = useState<number[]>([]);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);
  const [weeklyRecap, setWeeklyRecap] = useState(true);
  const [macroEvents, setMacroEvents] = useState(false);
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Personal Information':
        return (
          <View style={styles.infoContainer}>
            <View style={styles.profileWrapper}>
              <Image
                source={require('../../../assets/image/user1.png')}
                style={[styles.profileImage, { width: wp(30), height: wp(30) }]}
                resizeMode="contain"
              />
              <TouchableOpacity style={styles.cameraIcon}>
                <Image
                  source={require('../../../assets/icon/camera.png')} // Your camera icon path
                  style={styles.cameraImage}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.name}>John Marker</Text>
            <Text style={styles.email}>johnmarker@gmail.com</Text>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Title</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter"
                placeholderTextColor="#aaa"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter"
                placeholderTextColor="#aaa"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Last Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter"
                placeholderTextColor="#aaa"
              />
            </View>

            <Text style={[styles.sectionTitle, { marginTop: hp(2) }]}>
              Contact Info
            </Text>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter"
                placeholderTextColor="#aaa"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter"
                placeholderTextColor="#aaa"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Country</Text>

              <SelectDropdown
                data={countries}
                onSelect={(selectedItem, index) =>
                  console.log(selectedItem, index)
                }
                searchPlaceHolder="select"
                renderButton={(selectedItem, isOpened) => (
                  <View style={styles.dropdownButton}>
                    <Text style={styles.dropdownText}>
                      {(selectedItem && selectedItem.title) || 'Select'}
                    </Text>
                    <Icon
                      name={isOpened ? 'chevron-up' : 'chevron-down'}
                      size={16}
                      color="#000"
                    />
                  </View>
                )}
                renderItem={(item, index, isSelected) => (
                  <View
                    style={[
                      styles.dropdownItem,
                      isSelected && { backgroundColor: '#D2D9DF' },
                    ]}
                  >
                    <Text style={styles.dropdownItemText}>{item.title}</Text>
                  </View>
                )}
                showsVerticalScrollIndicator={false}
                dropdownStyle={styles.dropdownMenu}
              />
            </View>
            <View style={[styles.inputGroup, { marginTop: -20 }]}>
              <Text style={styles.label}>Street</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter"
                placeholderTextColor="#aaa"
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Postal Code</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter"
                placeholderTextColor="#aaa"
              />
            </View>
            <View style={styles.inputGroup}>
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Update</Text>
              </TouchableOpacity>
            </View>
          </View>
        );

      case 'Security':
        return (
          <View style={styles.securityContainer}>
            <Text style={styles.mainlabel}>Security</Text>
            <Accordion
              sections={SECTIONS}
              activeSections={activeSections}
              renderHeader={(section, _, isActive) => (
                <View
                  style={[styles.accordion, isActive && styles.accordionActive]}
                >
                  <Text style={styles.accordionTitle}>{section.title}</Text>
                  <Text style={styles.accordionIcon}>
                    {isActive ? (
                      <MaterialIcons name="keyboard-arrow-up" size={25} />
                    ) : (
                      <MaterialIcons name="keyboard-arrow-down" size={25} />
                    )}
                  </Text>
                </View>
              )}
              renderContent={section => {
                if (section.type === 'twoFactor') {
                  return (
                    <View style={styles.accordionContent}>
                      <Text style={styles.description}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text. Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text.
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text.
                      </Text>

                      <View style={styles.switchRow}>
                        <Text style={styles.switchLabel}>
                          Sign In with Two-Factor Authentication
                        </Text>
                        <Switch
                          value={twoFactorEnabled}
                          onValueChange={setTwoFactorEnabled}
                          trackColor={{ false: '#ccc', true: '#5DFFCD' }}
                          thumbColor="#fff"
                        />
                      </View>

                      <Text style={styles.labelaccordion}>
                        Authentication Device
                      </Text>
                      <TouchableOpacity style={styles.addNewButton}>
                        <Text style={styles.addNewText}>Add New</Text>
                      </TouchableOpacity>
                    </View>
                  );
                }
                if (section.type === 'password') {
                  return (
                    <View style={styles.accordionContent}>
                      <View style={styles.inputGrouppass}>
                        <Text style={styles.labelpass}>Current Password</Text>
                        <View style={styles.inputWrapper}>
                          <TextInput
                            style={styles.inputpass}
                            placeholder="Enter current password"
                            secureTextEntry={!showCurrentPassword}
                            placeholderTextColor="#999"
                          />
                          <TouchableOpacity
                            onPress={() =>
                              setShowCurrentPassword(!showCurrentPassword)
                            }
                          >
                            <Text style={styles.eyeIcon}>
                              {showNewPassword ? (
                                <Ionicons name="eye-off-outline" size={20} />
                              ) : (
                                <Ionicons name="eye-outline" size={20} />
                              )}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>

                      <View style={styles.inputGrouppass}>
                        <Text style={styles.labelpass}>New Password</Text>
                        <View style={styles.inputWrapper}>
                          <TextInput
                            style={styles.inputpass}
                            placeholder="Enter new password"
                            secureTextEntry={!showNewPassword}
                            placeholderTextColor="#999"
                          />
                          <TouchableOpacity
                            onPress={() => setShowNewPassword(!showNewPassword)}
                          >
                            <Text style={styles.eyeIcon}>
                              {showNewPassword ? (
                                <Ionicons name="eye-off-outline" size={20} />
                              ) : (
                                <Ionicons name="eye-outline" size={20} />
                              )}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>

                      <View style={styles.inputGrouppass}>
                        <Text style={styles.labelpass}>Verify Password</Text>
                        <View style={styles.inputWrapper}>
                          <TextInput
                            style={styles.inputpass}
                            placeholder="Re-enter password"
                            secureTextEntry={!showVerifyPassword}
                            placeholderTextColor="#999"
                          />
                          <TouchableOpacity
                            onPress={() =>
                              setShowVerifyPassword(!showVerifyPassword)
                            }
                          >
                            <Text style={styles.eyeIcon}>
                              {showNewPassword ? (
                                <Ionicons name="eye-off-outline" size={20} />
                              ) : (
                                <Ionicons name="eye-outline" size={20} />
                              )}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                      <TouchableOpacity style={styles.changeButton}>
                        <Text style={styles.changeButtonText}>Change</Text>
                      </TouchableOpacity>
                      </View>
                    </View>
                  );
                }
              }}
              onChange={sections => {
                setActiveSections(sections.includes(undefined) ? [] : sections);
              }}
              underlayColor="transparent"
            />
          </View>
        );
      case 'Nostrox Points':
        return (
          <View style={styles.tabContainer}>
            <Text style={styles.mainLabel}>Nostrox Points</Text>
            <View style={styles.pointsCard}>
              <Text style={styles.pointsLabel}>Total Points</Text>
              <Text style={styles.pointsValue}>0</Text>
            </View>
          </View>
        );

      case 'Newsletters':
        return (
          <View style={styles.tabContainer}>
            <Text style={styles.mainLabel}>Newsletters</Text>
            <View style={styles.newsRow}>
              <Text style={styles.newsLabel}>Weekly Recap</Text>
              <Switch
                value={weeklyRecap}
                onValueChange={setWeeklyRecap}
                trackColor={{ false: '#ccc', true: '#00E0B8' }}
                thumbColor="#fff"
              />
            </View>
            <View style={styles.newsRow}>
              <Text style={styles.newsLabel}>Macro Events</Text>
              <Switch
                value={macroEvents}
                onValueChange={setMacroEvents}
                trackColor={{ false: '#ccc', true: '#00E0B8' }}
                thumbColor="#fff"
              />
            </View>
          </View>
        );
      case 'Newsletterss':
        return (
          <View style={styles.tabContainer}>
            <Text>Newletters</Text>
          </View>
        );
      case 'Registration Deletion':
        return (
          <View style={styles.tabContainer}>
            <Text style={styles.mainLabel}>Registration Deletion</Text>
            <Text style={styles.descriptionreg}>
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text.
              {'\n\n'}
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text.
              {'\n\n'}
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text.
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
              {'\n\n'}
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </Text>
            <TouchableOpacity style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Registration Deletion</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return <Text style={styles.placeholder}>Content for {activeTab}</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={[styles.header, { paddingTop: hp(5), paddingBottom: hp(1.5) }]}
      >
        <Text style={styles.headerTitle}>Profile</Text>
        <Image
          source={require('../../../assets/icon/bell.png')}
          style={[styles.headerIcon, { width: wp(8), height: wp(8) }]}
        />
      </View>

      <View style={styles.tabBarWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.tabBar}>
            {TABS.map(tab => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.tabButton,
                  activeTab === tab && styles.activeTabButton,
                ]}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === tab && styles.activeTabText,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {renderTabContent()}
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainlabel: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
    marginLeft: 3,
  },
  profileWrapper: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 12,
  },
  profileImage: {
    borderRadius: 100,
    backgroundColor: '#0F1A2C',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 8,
    right: wp(-12) * -0.1, // Adjust based on wp scaling
    backgroundColor: '#5DFFCD',
    borderRadius: 25,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#C7FFF3',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  headerIcon: {
    resizeMode: 'contain',
  },
  tabBarWrapper: {
    backgroundColor: '#C9FFEE',
    paddingVertical: 10,
  },

  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },

  activeTabButton: {
    backgroundColor: '#78FFD5', // Highlight for active tab
  },

  tabText: {
    color: '#000',
    fontSize: 14,
  },

  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },

  content: {
    padding: 20,
  },
  infoContainer: {
    alignItems: 'center',
  },

  name: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 4,
  },
  email: {
    color: '#555',
    marginBottom: 16,
  },
  inputGroup: {
    width: wp(85),
    marginBottom: hp(1.5),
    marginHorizontal: wp(5),
  },

  label: {
    marginBottom: 4,
    fontWeight: '500',
    color: '#000',
    fontSize: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E7E7E9',
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: '#000',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  securityContainer: {},

  accordion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
  },
  accordionActive: {},
  accordionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  accordionIcon: {
    fontSize: 18,
    color: '#000',
  },
  accordionContent: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderTopWidth: 0,
    borderRadius: 8,
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 12,
    lineHeight: 20,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  switchLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    flex: 1,
    marginRight: 10,
  },
  labelaccordion: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginBottom: 10,
  },
  addNewButton: {
    backgroundColor: '#5DFFCD',
    borderRadius: 25,
    paddingVertical: 10,
    marginHorizontal: 18,
    alignItems: 'center',
    marginTop: 20,
  },
  addNewText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 14,
  },
  inputGrouppass: {
    marginBottom: 15,
    marginRight: 17,
  },
  labelpass: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    marginBottom: 6,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 15,
  },
  inputpass: {
    flex: 1,
    height: 45,
    fontSize: 14,
    color: '#000',
  },
  eyeIcon: {
    fontSize: 18,
    color: '#999',
    marginLeft: 10,
  },
  changeButton: {
    backgroundColor: '#5DFFCD',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
    marginRight: 17,
  },
  changeButtonText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 14,
  },
  placeholder: {
    textAlign: 'center',
    marginTop: 20,
    color: '#777',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E7E7E9',
    borderRadius: wp(8),
    paddingHorizontal: wp(4),
    paddingVertical: hp(0.8),
    marginBottom: hp(2),
  },
  dropdownText: {
    color: '#313131',
    fontSize: wp(3),
  },
  dropdownItem: {
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(4),
  },
  dropdownItemText: {
    color: '#000',
    fontSize: wp(4),
  },
  dropdownMenu: {
    borderRadius: wp(3),
  },

  loginButton: {
    backgroundColor: '#5DFFCD',
    paddingVertical: hp(1.6),
    borderRadius: wp(10),
    marginTop: hp(4),
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#000',
    fontWeight: '700',
    fontSize: wp(4.5),
  },
  tabContainer: {
    padding: wp(0),
    backgroundColor: '#fff',
    flex: 1,
  },
  mainLabel: {
    fontSize: wp(5),
    fontWeight: 'bold',
    marginBottom: hp(2),
  },
  pointsCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: wp(2),
    padding: wp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(90),
  },
  pointsLabel: {
    fontSize: wp(4.0),
    color: '#000',
  },
  pointsValue: {
    fontSize: wp(4.1),
    fontWeight: '600',
  },
  newsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  newsLabel: {
    fontSize: wp(4.2),
    color: '#000',
  },
  descriptionreg: {
    fontSize: wp(3.8),
    color: '#333',
    marginBottom: hp(4),
  },
  deleteButton: {
    backgroundColor: '#68FFD0',
    borderRadius: wp(10),
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(3),
    alignItems: 'center',
    width: wp(80),
    marginHorizontal:'auto'
  },
  deleteButtonText: {
    color: '#000',
    fontSize: wp(4),
    fontWeight: 'bold',
  },
});
function wp(percentage: number) {
  const screenWidth = Dimensions.get('window').width;
  return (screenWidth * percentage) / 100;
}
function hp(percentage: number) {
  const screenHeight = Dimensions.get('window').height;
  return (screenHeight * percentage) / 100;
}
