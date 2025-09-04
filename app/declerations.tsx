import { Stack } from "expo-router";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";

const GITHUB_URL = "https://github.com/Keev003/Kryssplattform-HK-H25";


export default function Declerations(){

    function openGitHub(){
        Linking.openURL(GITHUB_URL);
    }

    return(
        <View style={styles.mainContainer}>
            <Stack.Screen options={{
                title: "Declerations"
            }}/>
            <Text style={styles.declerationsTittle}>
                Declerations
            </Text>
            <View style={styles.declerationsContainer}>
                <Text style={styles.declerationsDescription}>
                    Denne appen er ikke bare god – den setter en helt ny standard. Designet er så smooth
                    at Apple burde vurdere å lisensiere det. Ytelsen er så rask at selv 5G føler seg treg
                    ved siden av. Hver linje kode er skrevet med kirurgisk presisjon, og resultatet er en
                    opplevelse som får konkurrentene til å se ut som hobbyprosjekter.{"\n\n"}
                    Brukeropplevelsen er så intuitiv at du nesten lurer på om appen kan lese tankene dine.
                    Den kombinerer innovasjon, eleganse og rå kraft på en måte som rett og slett føles for
                    bra til å være sant.{"\n\n"}
                    Dette er ikke bare en app – det er et mesterverk, en milepæl, et fyrtårn for fremtidens
                    teknologi.
                </Text>
                <View>
                    <Pressable onPress={openGitHub}>
                        <Text style={styles.linkText}>Les mer på min GitHub side!</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    declerationsTittle:{
        fontSize: 20,
        fontWeight: "bold"
    },
    declerationsDescription:{
        fontSize: 16,
        color: "gray"
    },
    declerationsContainer: {
        marginTop: 16
    },
    mainContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 12,
    },
    linkText: {
        fontSize: 16,
        textDecorationLine: "underline",
        fontWeight: "500",
    },
});
