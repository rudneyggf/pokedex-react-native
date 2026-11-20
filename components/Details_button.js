import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";

export default function Details_button({ pokemon, onPress }) {
  if (!pokemon) {
    return null;
  }

  const numeroFormatado = `#${String(pokemon.numero).padStart(3, "0")}`;

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.75}
      onPress={onPress}
    >
      <View style={styles.numberBadge}>
        <Text style={styles.numberText}>{numeroFormatado}</Text>
      </View>

      <View style={styles.spriteContainer}>
        {pokemon.sprite ? (
          <Image source={{ uri: pokemon.sprite }} style={styles.sprite} />
        ) : null}
      </View>

      <Text style={styles.nameText}>{pokemon.nome}</Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 14,
    marginVertical: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    borderLeftWidth: 6,
    borderLeftColor: "#DC0A2D",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    gap: 12,
  },
  numberBadge: {
    backgroundColor: "#F0F2F5",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D0D5DD",
  },
  numberText: {
    fontSize: 13,
    fontWeight: "800",
    color: "#555555",
    fontVariant: ["tabular-nums"],
  },
  spriteContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#F8F9FA",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#EFEFEF",
  },
  sprite: {
    width: 60,
    height: 60,
  },
  nameText: {
    flex: 1,
    fontSize: 17,
    fontWeight: "700",
    color: "#222222",
    textTransform: "capitalize", 
  }
});