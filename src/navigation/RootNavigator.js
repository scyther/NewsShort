import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {View, ActivityIndicator} from 'react-native';
// import {AuthenticatedUserContext} from './AuthenticatedUserProvider';

import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

export default function RootNavigator() {
  //   const {user, setUser} = useContext(AuthenticatedUserContext);
  //   const [isLoading, setIsLoading] = useState(false);
  //   useEffect(() => {
  //     // onAuthStateChanged returns an unsubscriber
  //     const unsubscribeAuth = auth.onAuthStateChanged(async authenticatedUser => {
  //       try {
  //         await (authenticatedUser ? setUser(authenticatedUser) : setUser(null));
  //         setIsLoading(false);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     });

  //     // unsubscribe auth listener on unmount
  //     return unsubscribeAuth;
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  //   if (isLoading) {
  //     return (
  //       // eslint-disable-next-line react-native/no-inline-styles
  //       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //         <ActivityIndicator size="large" />
  //       </View>
  //     );
  //   }
  let user = true;
  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
