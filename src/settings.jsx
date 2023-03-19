import React from "react"
import { Button, StyleSheet, useColorScheme, View } from "react-native"
import { ContextSettings } from "./contexts"

export const Settings = ({ sound }) => {

    const { setSpeed } = React.useContext(ContextSettings)

    const update = ({ speed }) => {
        setSpeed(speed)
    }

    const theme = useColorScheme()

    return (
        <View style={{flex: 1, alignItems: "center", justifyContent:"space-around", backgroundColor: theme === 'light' ? 'white' : 'black' }}>
            <Button style={styles.button} title="0.25" onPress={() => update({speed: 0.25})}></Button>
            <Button style={styles.button} title="0.50" onPress={() => update({speed: 0.50})}></Button>
            <Button style={styles.button} title="0.75" onPress={() => update({speed: 0.75})}></Button>
            <Button style={styles.button} title="1.00" onPress={() => update({speed: 1.00})}></Button>
            <Button style={styles.button} title="1.25" onPress={() => update({speed: 1.25})}></Button>
            <Button style={styles.button} title="1.50" onPress={() => update({speed: 1.50})}></Button>
            <Button style={styles.button} title="1.75" onPress={() => update({speed: 1.75})}></Button>
            <Button style={styles.button} title="2.00" onPress={() => update({speed: 2.00})}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20
    }
})