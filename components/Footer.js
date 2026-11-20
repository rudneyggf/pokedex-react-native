import { StyleSheet,View } from "react-native";


export default function Footer({ children, style }) {
    return (
        <View style={[styles.footer, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
 footer: {
    backgroundColor: "#DC0A2D",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderTopWidth: 4,
    borderTopColor: "#8E051C",
  }
})