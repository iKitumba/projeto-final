import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function Button({
  outlined,
  text,
  stylesContainer,
  stylesText,
}) {
  return (
    <TouchableOpacity
      style={
        outlined
          ? [styles.containerOutlined, stylesContainer]
          : [styles.container, stylesContainer]
      }
    >
      <Text
        style={[
          styles.text,
          stylesText,
          { color: outlined ? "#61768D" : "#E7EBEF" },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "45%",
    height: 28,
    backgroundColor: "#097FFA",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  containerOutlined: {
    backgroundColor: "transparent",
    width: "45%",
    height: 28,
    borderWidth: 1,
    borderColor: "#61768D",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  text: {
    fontSize: 12,
    fontWeight: "700",
    color: "#E7EBEF",
  },
});
