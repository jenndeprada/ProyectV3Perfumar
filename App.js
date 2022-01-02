import { StyleSheet } from 'react-native';

//********* Redux ************** */
import {Provider} from "react-redux";
import store from "./store";

//*****************Components******************* */
import Navigation from './components/navigation';

export default function App() {
  
  return (

    <Provider store={store}>
      <Navigation/>
    </Provider>
    
   
  );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8edeb",
  },
  
});
