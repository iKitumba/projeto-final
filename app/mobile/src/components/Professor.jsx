import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Professor() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.td}>
        <Text style={styles.tdText}>Cédric Mácua</Text>
      </TouchableOpacity>
      <Text style={[styles.td, styles.tdText]}>Económia</Text>
      <TouchableOpacity style={styles.td}>
        <Ionicons
          name="call-outline"
          size={24}
          style={{ alignSelf: "center" }}
          color="#097FFA"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    backgroundColor: "#F5FAFF",
    paddingVertical: 8,
    borderRadius: 4,
  },
  td: {
    flex: 1,
    paddingHorizontal: 4,
  },
  tdText: {
    fontSize: 14,
    color: "#61768D",
  },
});
