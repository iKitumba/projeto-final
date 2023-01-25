import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function NotasDisciplina({
  disciplina,
  nota1,
  nota2,
  nota3,
  handleNavigateToAddNotas,
}) {
  const disciplinaFormatted =
    disciplina.length <= 17 ? disciplina : `${disciplina.slice(0, 17)}...`;
  const media = Math.round(Number((nota1 + nota2 + nota3) / 3));
  const colorToApply =
    media < 10 ? "#FD1818" : media > 10 && media < 15 ? "#E0FD18" : "#18FD2E";
  return (
    <TouchableOpacity
      onPress={handleNavigateToAddNotas}
      style={[
        styles.notaWrapper,
        {
          borderLeftColor: colorToApply,
        },
      ]}
    >
      <Text
        style={[
          styles.notaContainer,
          // {
          //   color: colorToApply,
          // },
        ]}
      >
        {`${disciplinaFormatted}(${nota1}, ${nota2}, ${nota3}, ${media})`}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  notaWrapper: {
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderLeftWidth: 4,
    marginVertical: 8,
  },
  notaContainer: {
    fontSize: 16,
    color: "#61768D",
  },
});
