import React from "react"
import { Image, ScrollView, StyleSheet, TouchableOpacity, useColorScheme, Vibration } from "react-native"
import Sound from "react-native-sound"
import { ContextSettings } from "./contexts"

export const Soundboard = () => {

    const { speed, setSpeed } = React.useContext(ContextSettings)

    const ah = new Sound(require('../assets/sounds/ah.mp3'))
    const airhorn = new Sound(require('../assets/sounds/airhorn.mp3'))
    const banana = new Sound(require('../assets/sounds/banana.mp3'))
    const bonjour = new Sound(require('../assets/sounds/bonjour.mp3'))
    const boulemagique = new Sound(require('../assets/sounds/boulemagique.mp3'))
    const buzzer = new Sound(require('../assets/sounds/buzzer.mp3'))
    const caca = new Sound(require('../assets/sounds/caca.mp3'))
    const colere = new Sound(require('../assets/sounds/colere.mp3'))
    const degueulasse = new Sound(require('../assets/sounds/degueulasse.mp3'))
    const eddymalou = new Sound(require('../assets/sounds/eddymalou.mp3'))
    const etchebest = new Sound(require('../assets/sounds/etchebest.mp3'))
    const honteux = new Sound(require('../assets/sounds/honteux.mp3'))
    const iir = new Sound(require('../assets/sounds/iir.mp3'))
    const issou = new Sound(require('../assets/sounds/issou.mp3'))
    const jamy = new Sound(require('../assets/sounds/jamy.mp3'))
    const jeanneausecours = new Sound(require('../assets/sounds/jeanneausecours.mp3'))
    const kiyu = new Sound(require('../assets/sounds/kiyu.mp3'))
    const kouizine = new Sound(require('../assets/sounds/kouizine.mp3'))
    const leo = new Sound(require('../assets/sounds/leo.mp3'))
    const lpknan = new Sound(require('../assets/sounds/lpknan.mp3'))
    const lpkputain = new Sound(require('../assets/sounds/lpkputain.mp3'))
    const macron = new Sound(require('../assets/sounds/macron.mp3'))
    const maitreyoda = new Sound(require('../assets/sounds/maitreyoda.mp3'))
    const marine = new Sound(require('../assets/sounds/marine.mp3'))
    const melanchon = new Sound(require('../assets/sounds/melanchon.mp3'))
    const mickey = new Sound(require('../assets/sounds/mickey.mp3'))
    const non = new Sound(require('../assets/sounds/non.mp3'))
    const oof = new Sound(require('../assets/sounds/oof.mp3'))
    const oui = new Sound(require('../assets/sounds/oui.mp3'))
    const papa = new Sound(require('../assets/sounds/papa.mp3'))
    const peppapig = new Sound(require('../assets/sounds/peppapig.mp3'))
    const philippe = new Sound(require('../assets/sounds/philippe.mp3'))
    const pingas = new Sound(require('../assets/sounds/pingas.mp3'))
    const rheuh = new Sound(require('../assets/sounds/rheuh.mp3'))
    const russie = new Sound(require('../assets/sounds/russie.mp3'))
    const salaud = new Sound(require('../assets/sounds/salaud.mp3'))
    const sarko = new Sound(require('../assets/sounds/sarko.mp3'))
    const sylvaindurif = new Sound(require('../assets/sounds/sylvaindurif.mp3'))
    const taisezvous = new Sound(require('../assets/sounds/taisezvous.mp3'))
    const wow = new Sound(require('../assets/sounds/wow.mp3'))

    const playSound = async (sound) => {
        await sound.stop()
        await sound.setSpeed(speed).play()
    }

    const theme = useColorScheme()
    // alert(`Your theme is ${theme}`)

    return (
        <ScrollView contentContainerStyle={{flexDirection: "row", flexWrap: "wrap", backgroundColor: theme === 'light' ? 'white' : 'black' }}>
            <TouchableOpacity onPress={() => {playSound(ah)}}>
                <Image style={styles.image} source={ require('../assets/images/ah.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(airhorn)}}>
                <Image style={styles.image} source={ require('../assets/images/airhorn.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(banana)}}>
                <Image style={styles.image} source={ require('../assets/images/banana.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(bonjour)}}>
                <Image style={styles.image} source={ require('../assets/images/bonjour.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(boulemagique)}}>
                <Image style={styles.image} source={ require('../assets/images/boulemagique.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(buzzer)}}>
                <Image style={styles.image} source={ require('../assets/images/buzzer.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(caca)}}>
                <Image style={styles.image} source={ require('../assets/images/caca.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(colere)}}>
                <Image style={styles.image} source={ require('../assets/images/colere.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(degueulasse)}}>
                <Image style={styles.image} source={ require('../assets/images/degueulasse.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(eddymalou)}}>
                <Image style={styles.image} source={ require('../assets/images/eddymalou.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(etchebest)}}>
                <Image style={styles.image} source={ require('../assets/images/etchebest.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(honteux)}}>
                <Image style={styles.image} source={ require('../assets/images/honteux.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(iir)}}>
                <Image style={styles.image} source={ require('../assets/images/iir.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(issou)}}>
                <Image style={styles.image} source={ require('../assets/images/issou.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(jamy)}}>
                <Image style={styles.image} source={ require('../assets/images/jamy.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(jeanneausecours)}}>
                <Image style={styles.image} source={ require('../assets/images/jeanneausecours.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(kiyu)}}>
                <Image style={styles.image} source={ require('../assets/images/kiyu.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(kouizine)}}>
                <Image style={styles.image} source={ require('../assets/images/kouizine.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(leo)}}>
                <Image style={styles.image} source={ require('../assets/images/leo.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(lpknan)}}>
                <Image style={styles.image} source={ require('../assets/images/lpknan.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(lpkputain)}}>
                <Image style={styles.image} source={ require('../assets/images/lpknan.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(macron)}}>
                <Image style={styles.image} source={ require('../assets/images/macron.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(maitreyoda)}}>
                <Image style={styles.image} source={ require('../assets/images/maitreyoda.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(marine)}}>
                <Image style={styles.image} source={ require('../assets/images/marine.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(melanchon)}}>
                <Image style={styles.image} source={ require('../assets/images/melanchon.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(mickey)}}>
                <Image style={styles.image} source={ require('../assets/images/mickey.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(non)}}>
                <Image style={styles.image} source={ require('../assets/images/non.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(oof)}}>
                <Image style={styles.image} source={ require('../assets/images/oof.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(oui)}}>
                <Image style={styles.image} source={ require('../assets/images/oui.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(papa)}}>
                <Image style={styles.image} source={ require('../assets/images/papa.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(peppapig)}}>
                <Image style={styles.image} source={ require('../assets/images/peppapig.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(philippe)}}>
                <Image style={styles.image} source={ require('../assets/images/philippe.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(pingas)}}>
                <Image style={styles.image} source={ require('../assets/images/pingas.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(rheuh)}}>
                <Image style={styles.image} source={ require('../assets/images/rheuh.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(russie)}}>
                <Image style={styles.image} source={ require('../assets/images/russie.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(salaud)}}>
                <Image style={styles.image} source={ require('../assets/images/salaud.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(sarko)}}>
                <Image style={styles.image} source={ require('../assets/images/sarko.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(sylvaindurif)}}>
                <Image style={styles.image} source={ require('../assets/images/sylvaindurif.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(taisezvous)}}>
                <Image style={styles.image} source={ require('../assets/images/taisezvous.jpg') } />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {playSound(wow)}}>
                <Image style={styles.image} source={ require('../assets/images/wow.jpg') } />
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        margin: 10
    }
})