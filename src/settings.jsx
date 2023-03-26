import React from "react"
import Slider from "react-native-slider"
import { Button, StyleSheet, Text, useColorScheme, View } from "react-native"
import { ContextSettings } from "./contexts"

export const Settings = () => {

    const { speed, setSpeed } = React.useContext(ContextSettings)

    const update = ({ speed }) => {
        setSpeed(speed)
    }

    const theme = useColorScheme()

    return (
        <View style={{ flex: 1, alignItems: "stretch", backgroundColor: theme === 'light' ? 'white' : 'black' }}>
            <View style={{ width: "80%", marginLeft: "50%", transform: [{ translateX: -175 }]}}>
                <Slider
                    value={speed}
                    minimumValue={0.25}
                    maximumValue={2}
                    step={0.25}
                    onValueChange={(value) => setSpeed(value)}
                />
                <Text>{speed}</Text>
            </View>
        </View>
    )
}
