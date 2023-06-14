import { createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';

import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import StudentTabNavigator from './navigation/StudentTabNavigator'
import CreateCourse from './screens/CreateCourse';
import Message from './screens/Message'
import Description1 from './screens/Description1';
import Description2 from './screens/Description2';
import Description3 from './screens/Description3';
import TeacherTabNavigator from './navigation/TeachrTabNavigator';
import Etud1Des from './screens/Etud1Des';
import React from './screens/React';
import Etud2Des from './screens/Etud2Des';
import SeeCourses1 from './screens/SeeCourses1';
import Etud3Des from './screens/Etud3Des';
import DeleteCourse from './screens/DeleteCourse';
import Angular from './screens/Angular';
import CourseSpace from './screens/CourseSpace';
import Node from './screens/Node';
const Stack=createStackNavigator()
const theme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:'transparent'
  }

}

const App=() => { 
  return (
    <NavigationContainer  theme={theme}>
      
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
       <Stack.Screen   name='Home'  component={Home}/>
       <Stack.Screen   name='Login'  component={Login}/>
       <Stack.Screen   name='Register'  component={Register}/>
       <Stack.Screen name='StudentSpace' component={StudentTabNavigator}   options={{headerShown: false}}/>
       <Stack.Screen   name='TeacherSpace'  component={TeacherTabNavigator} options={{headerShown: false}}/>
       <Stack.Screen name="Message" component={Message} />
       <Stack.Screen name="Description1" component={Description1} />
       <Stack.Screen name="Description2" component={Description2} />
       <Stack.Screen name="Description3" component={Description3} />    
       <Stack.Screen name="Etud1Des" component={Etud1Des} />  
       <Stack.Screen name="Etud2Des" component={Etud2Des} />  
       <Stack.Screen name="Etud3Des" component={Etud3Des} />  
       <Stack.Screen name="CreateCourse" component={CreateCourse}/>
       <Stack.Screen name="SeeCourses1" component={SeeCourses1}/>
       <Stack.Screen name="DeleteCourse" component={DeleteCourse}/>
       <Stack.Screen name="React" component={React}/>
       <Stack.Screen name="Angular" component={Angular}/>
       <Stack.Screen name="CourseSpace" component={CourseSpace}/>
       <Stack.Screen name="Node" component={Node}/>

      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

export default App;