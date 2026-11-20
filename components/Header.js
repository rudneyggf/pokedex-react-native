import { StyleSheet,View,Text} from "react-native"

export default function Header(){
    return(
        <View style={styles.header}>
            <View style={styles.ledsRow}>
                <View style={styles.blueLens} />
                <View style={[styles.smallLed, { backgroundColor: "#FF5959" }]} />
                <View style={[styles.smallLed, { backgroundColor: "#FFCB05" }]} />
                <View style={[styles.smallLed, { backgroundColor: "#4DAD5B" }]} />
            </View>
            <View>
                <Text style={styles.title}>Pokédex (Gen1)</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   header: {
     backgroundColor: "#DC0A2D",
     paddingTop: 14,
     paddingBottom: 14,
     paddingHorizontal: 16,
     borderBottomWidth: 4,
     borderBottomColor: "#8E051C",
     elevation: 5,
     shadowColor: "#000",
     shadowOffset: { width: 0, height: 3 },
     shadowOpacity: 0.25,
     shadowRadius: 4,
  },
  ledsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },
  blueLens: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#28AAFD",
    borderWidth: 3,
    borderColor: "#FFFFFF",
    marginRight: 4,
  },
    smallLed: {
     width: 12,
     height: 12,
     borderRadius: 6,
     borderWidth: 1.5,
     borderColor: "#222222",
  },
  title: {
    fontSize: 22,
    fontWeight: "900",
    color: "#FFFFFF",
    letterSpacing: 0.5,
  },
});