import { View, Text, StyleSheet, Image } from "react-native";

import celmaImg from "../assets/profile.jpg";
import Button from "./Button";

export default function Aluno({ aproveitamento, handleSaberMais, nomeAluno }) {
  const nomeAlunoFormatted =
    nomeAluno.length <= 17 ? nomeAluno : `${nomeAluno.slice(0, 17)}...`;

  return (
    <View style={styles.container}>
      <Image source={celmaImg} resizeMode="contain" style={styles.profilePic} />
      <View style={styles.rightSide}>
        <Text style={styles.nomeAluno}>{nomeAlunoFormatted}</Text>
        <View style={styles.progresses}>
          <View style={styles.progress} />
          <View
            style={[
              styles.progress2,
              { width: aproveitamento && `${aproveitamento}%` },
            ]}
          />
        </View>
        <View style={styles.actions}>
          <Button text="Contactar" stylesContainer={{ marginRight: 12 }} />
          <Button text="Saber mais" onPress={handleSaberMais} outlined={true} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 96,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "#F5FAFF",
    borderRadius: 8,
    paddingHorizontal: 7,
  },
  profilePic: {
    flex: 1,
    height: 82,
    borderRadius: 6,
  },
  rightSide: {
    paddingHorizontal: 12,
    flex: 3,
    justifyContent: "space-between",
  },
  nomeAluno: {
    fontSize: 16,
    fontWeight: "600",
    color: "#61768D",
  },
  progresses: {
    position: "relative",
  },
  progress: {
    width: "100%",
    height: 8,
    backgroundColor: "#CBE1F6",
    borderRadius: 4,
  },
  progress2: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#097FFA",
    zIndex: 11,
  },
  actions: {
    flexDirection: "row",
    marginTop: 24,
  },
});
