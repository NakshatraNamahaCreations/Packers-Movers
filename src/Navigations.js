import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import {
  Home,
  Orders,
  Bottomtab,
  Location,
  Droplocation,
  Droplocationsearch,
  Servicedetails,
  Booking,
  CCAvenuePayment,
  Picklocationsearch,
  Pickuplocation,
  VehicleMovers,
  Viewdetails,
} from './PackersandMovers';

import Splash from '../src/Splash';

// import {
//   uHome,
//   Splashscreen,
//   // UBottomtab,
//   Successpage,
//   Repairing,
//   ESpage,
//   Enquirydetails,
//   Editprofile,
//   Mybooking,
//   Privacy,
//   Terms,
//   Refundpolicy,
//   Review,
//   Delete,
//   Help,
//   LocationAccess,
//   Loader,
//   ESuccess,
//   Socialmedia,
//   Upcomingdetail,
//   Livedetail,
//   Completedetail,
//   Summary,
//   Cart,
//   Wallet,
//   Invite,
//   Search,
// } from './userapp';

import {NavigationContainer} from '@react-navigation/native';
import OrdersDetails from './PackersandMovers/screens/OrdersDetails';

export default function Navigations() {
  const CustomHeaderTitle = () => (
    <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14, color: '#000'}}>
      Where is your Drop?
    </Text>
  );
  const CustompickupHeaderTitle = () => (
    <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14, color: '#000'}}>
      Where is your pickup?
    </Text>
  );
  const Packersandmovers = () => (
    <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14, color: '#000'}}>
      Packers & Movers
    </Text>
  );
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Bottomtab"
          component={Bottomtab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Viewdetails"
          component={Viewdetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VehicleMovers"
          component={VehicleMovers}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CCAvenuePayment"
          component={CCAvenuePayment}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Droplocationsearch"
          component={Droplocationsearch}
          options={{
            headerShown: true,
            headerTitle: CustomHeaderTitle,
            // Optional: Additional header styles
            headerStyle: {
              backgroundColor: '#f8f9fa', // Example background color
            },
          }}
        />
        <Stack.Screen
          name="Picklocationsearch"
          component={Picklocationsearch}
          options={{
            headerShown: true,
            headerTitle: CustompickupHeaderTitle,
            // Optional: Additional header styles
            headerStyle: {
              backgroundColor: '#f8f9fa', // Example background color
            },
          }}
        />
        <Stack.Screen
          name="Booking"
          component={Booking}
          options={{
            headerShown: true,
            headerTitle: Packersandmovers,
            // Optional: Additional header styles
            headerStyle: {
              backgroundColor: '#f8f9fa', // Example background color
            },
          }}
        />
        <Stack.Screen
          name="OrderDetails"
          component={OrdersDetails}
          options={{
            headerShown: false,
          }}
          // options={{
          //   headerShown: true,
          //   headerTitle: Packersandmovers,
          //   // Optional: Additional header styles
          //   headerStyle: {
          //     backgroundColor: '#f8f9fa', // Example background color
          //   },
          // }}
        />
        <Stack.Screen
          name="DropLocation"
          component={Droplocation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Pickuplocation"
          component={Pickuplocation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Servicedetails"
          component={Servicedetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{
            headerShown: true,
            headerTitle: 'Orders',
          }}
        />

        {/* <Stack.Screen
          name="tab"
          component={UBottomtab}
          options={{headerShown: false}}
        /> */}

        {/* <Stack.Screen
          name="splash"
          component={Splashscreen}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="success"
          component={Successpage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="repairing"
          component={Repairing}
          options={{
            headerShown: true,
            headerTitle: 'Services Details',
          }}
        />
        <Stack.Screen
          name="ESpage"
          component={ESpage}
          options={{headerShown: true, headerTitle: 'Booking Page'}}
        />
        <Stack.Screen
          name="Enquirydetails"
          component={Enquirydetails}
          options={{headerShown: true, headerTitle: 'Enquiry Details'}}
        />

        <Stack.Screen
          name="edit"
          component={Editprofile}
          options={{headerShown: true, headerTitle: 'Edit Profile'}}
        />
        <Stack.Screen
          name="mybooking"
          component={Mybooking}
          options={{headerShown: true, headerTitle: 'Order History'}}
        />

        <Stack.Screen
          name="privacy"
          component={Privacy}
          options={{headerShown: true, headerTitle: 'Privacy Policy'}}
        />
        <Stack.Screen
          name="terms"
          component={Terms}
          options={{headerShown: true, headerTitle: 'Terms and Condition'}}
        />
        <Stack.Screen
          name="refund"
          component={Refundpolicy}
          options={{
            headerShown: true,
            headerTitle: 'Refund and Cancellation Policy ',
          }}
        />
        <Stack.Screen
          name="review"
          component={Review}
          options={{headerShown: true, headerTitle: 'Write Review'}}
        />

        <Stack.Screen
          name="faq"
          component={Faq}
          options={{headerShown: true, headerTitle: 'Help center'}}
        />

        <Stack.Screen
          name="delete"
          component={Delete}
          options={{headerShown: true, headerTitle: 'Delete Account'}}
        />
        <Stack.Screen
          name="help"
          component={Help}
          options={{headerShown: true, headerTitle: 'Help Center'}}
        />

        <Stack.Screen
          name="location"
          component={LocationAccess}
          options={{headerShown: false, headerTitle: 'Location'}}
        />

        <Stack.Screen
          name="loader"
          component={Loader}
          options={{headerShown: false, headerTitle: ''}}
        />
        <Stack.Screen
          name="ESuccess"
          component={ESuccess}
          options={{headerShown: false, headerTitle: ''}}
        />

        <Stack.Screen
          name="socialmedia"
          component={Socialmedia}
          options={{headerShown: true, headerTitle: 'Connect Us'}}
        />
        <Stack.Screen
          name="upcomingdetail"
          component={Upcomingdetail}
          options={{
            headerShown: true,
            headerTitle: 'Upcoming Detail',
            headerLargeTitle: true,
          }}
        />
        <Stack.Screen
          name="livedetail"
          component={Livedetail}
          options={{headerShown: true, headerTitle: 'Live Details'}}
        />
        <Stack.Screen
          name="completedetail"
          component={Completedetail}
          options={{headerShown: true, headerTitle: 'Complete Details'}}
        />

        <Stack.Screen
          name="summary"
          component={Summary}
          options={{headerShown: true, headerTitle: 'Summary'}}
        />
        <Stack.Screen
          name="cart"
          component={Cart}
          options={{headerShown: true, headerTitle: 'Cart'}}
        />
        <Stack.Screen
          name="cartbook"
          component={Cartbook}
          options={{headerShown: true, headerTitle: 'Booking'}}
        />

        <Stack.Screen
          name="Claim Referral"
          component={ReferralClaim}
          options={{headerShown: true, headerTitle: 'Claim Referral'}}
        />
        <Stack.Screen
          name="wallet"
          component={Wallet}
          options={({navigation}) => ({
            headerShown: true,
            headerTitle: 'Wallet',
            // headerRight: () => (
            //   <TouchableOpacity >
            //    <FontAwesome6 name="ellipsis-vertical" size={20} />
            //   </TouchableOpacity>
            // ),
          })}
        />
        <Stack.Screen
          name="invite"
          component={Invite}
          options={{headerShown: true, headerTitle: 'Refer and Earn'}}
        />
        <Stack.Screen
          name="search"
          component={Search}
          options={{headerShown: true, headerTitle: ''}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
