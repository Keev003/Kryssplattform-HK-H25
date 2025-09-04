import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";


export default function ProfilePage() {
    const router = useRouter();

    return(
        <Pressable onPress={() => router.push("/declerations")}>
            <Text>
                Declerations
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    declerationsButton: {
        backgroundColor: "black",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
        alignSelf: "flex-start",
    },
    declerationsButtonText: {
        color: "white",
        fontWeight: "600",
    },
});