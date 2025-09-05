import react from 'react';
import {
    Text,
    View,
    StyleSheet,
    useColorScheme

} from 'react-native';
import { JSX } from 'react/jsx-runtime';

function AppPro(): JSX.Element{
   const isDarkMode = useColorScheme() === 'dark';

    return(
      <View style= {styles.container}>
        <Text  style= {isDarkMode ? styles.WhiteText : styles.BlackText}>
            'Hello  world'
        </Text>
      </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    WhiteText: {
        color: "#e4dbdbff"
    },
    BlackText: {
        color: "#000000ff"
    }
})


export default AppPro;