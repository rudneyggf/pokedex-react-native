import { useState, useEffect, useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { listPokemonsGen1 } from "../api/services";
import Details_button from "../components/Details_button";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PAGE_SIZE = 30;
const GEN1_TOTAL = 151;

export default function List() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  const temPrev = offset > 0;
  const temNext = offset + PAGE_SIZE < GEN1_TOTAL;

  const carregarPagina = useCallback(async (novoOffset) => {
    setLoading(true);
    const dados = await listPokemonsGen1({
      limit: PAGE_SIZE,
      offset: novoOffset,
    });
    setPokemons(dados);
    setOffset(novoOffset);
    setLoading(false);
  }, []);

  useEffect(() => {
    carregarPagina(0);
  }, [carregarPagina]);

  const handlePrev = () => {
    if (temPrev && !loading) {
      carregarPagina(Math.max(0, offset - PAGE_SIZE));
    }
  };

  const handleNext = () => {
    if (temNext && !loading) {
      carregarPagina(offset + PAGE_SIZE);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#B80724" barStyle="light-content" />

      <Header/>

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#DC0A2D" />
          <Text style={styles.loadingText}>Buscando dados na Pokédex...</Text>
        </View>
      ) : (
        <FlatList
          data={pokemons}
          renderItem={({ item }) => <Details_button pokemon={item} />}
          keyExtractor={(item) => String(item.numero)}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}

      
      <Footer style={styles.pagination}>
        <TouchableOpacity
          style={[styles.button, (!temPrev || loading) && styles.buttonDisabled]}
          onPress={handlePrev}
          disabled={!temPrev || loading}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>◀ Anterior</Text>
        </TouchableOpacity>

        <View style={styles.counterScreen}>
          <Text style={styles.pageInfo}>
            {offset + 1}–{Math.min(offset + PAGE_SIZE, GEN1_TOTAL)} / {GEN1_TOTAL}
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.button, (!temNext || loading) && styles.buttonDisabled]}
          onPress={handleNext}
          disabled={!temNext || loading}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Próximo ▶</Text>
        </TouchableOpacity>
      </Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F7",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  loadingText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#555555",
  },
  listContent: {
    paddingTop: 8,
    paddingBottom: 16,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    backgroundColor: "#2A75BB", 
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    elevation: 2,
  },
  buttonDisabled: {
    backgroundColor: "#6B7280",
    borderColor: "#9CA3AF",
    opacity: 0.5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 13,
  },
  counterScreen: {
    backgroundColor: "#232323",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#555555",
  },
  pageInfo: {
    fontSize: 13,
    fontWeight: "700",
    color: "#51FB5A", 
    fontVariant: ["tabular-nums"],
  },
});