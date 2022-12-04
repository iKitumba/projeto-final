import { View, Text, StyleSheet } from "react-native";

export default function Title({
  text,
  stylesContainer,
  stylesOrnament,
  stylesText,
}) {
  return (
    <View style={[styles.container, stylesContainer]}>
      <View style={[styles.ornament, stylesOrnament]} />
      <Text style={[styles.text, stylesText]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 46,
    marginBottom: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  ornament: {
    width: 8,
    height: 21,
    backgroundColor: "#097FFA",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.09)",
  },
  text: {
    marginLeft: 8,
    fontSize: 26,
    fontWeight: "700",
    color: "#61768D",
  },
});
