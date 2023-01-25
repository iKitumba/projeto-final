import { useContext } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";

import profileImg from "../../assets/profile.jpg";
import Title from "../../components/Title";
import notasDisciplina from "../../utils/notasDisciplina";
import NotasDisciplina from "../../components/NotasDisciplina";
import { LinearGradient } from "expo-linear-gradient";

import { AuthContext } from "../../contexts/AuthContext";

export default function AlunoPerfil({ navigation }) {
  const { usuario } = useContext(AuthContext);

  function handleNavigateToProfessores() {
    navigation.navigate("Professores");
  }

  function handleNavigateToImprimir() {
    navigation.navigate("Imprimir");
  }

  function handleNavigateToAddNotas(
    disciplina,
    nota1,
    nota2,
    nota3,
    trimestre
  ) {
    navigation.navigate("AddNotas", {
      disciplina,
      nota1,
      nota2,
      nota3,
      trimestre,
    });
  }

  return (
    <ScrollView style={styles.wrapper}>
      <LinearGradient
        // style={styles.gradient}
        end={{ x: 0, y: 1 }}
        colors={["#097FFA", "#E7EBEF"]}
      >
        <View style={styles.header}>
          <Image
            source={profileImg}
            resizeMode="contain"
            style={styles.profileImg}
          />
        </View>
      </LinearGradient>
      <ScrollView style={styles.container}>
        <Text style={styles.nomeAluno}>Alberto Dos Santos Kitumba</Text>
        <Text style={styles.descricaoAluno}>
          Frequenta a 11ª classe, turma A no curso de Farmácia no período Diurno
        </Text>
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.contactarbutton}
            onPress={handleNavigateToProfessores}
          >
            {/* <Feather name="phone-call" size={24} color="#E7EBEF" /> */}
            <Text style={styles.contactarButtonText}>Professores</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.editButton}>
            <MaterialIcons name="edit" size={24} color="#097FFA" />
          </TouchableOpacity> */}
        </View>
        <Title
          text="33% de Aproveitamento"
          stylesOrnament={{ backgroundColor: "#FD1818" }}
          stylesContainer={{ marginTop: 12 }}
        />
      </ScrollView>
      <FlatList
        data={[1, 2, 3]}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <View style={styles.boletimWrapper}>
            <View style={styles.boletimHeader}>
              <Text style={styles.boletimTrimestreText}>
                PRIMEIRO TRIMESTRE
              </Text>
              <TouchableOpacity
                style={styles.boletimPrint}
                onPress={handleNavigateToImprimir}
              >
                <Ionicons name="print" size={24} color="#F35298" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.boletimContainer}>
              <View style={styles.row}>
                <Text style={styles.boletimContentHeaderText}>
                  Disciplina(Nota1, Nota2, Nota3, Média)
                </Text>
              </View>

              <View style={styles.notaDisciplinaContainer}>
                {notasDisciplina.map(({ disciplina, nota1, nota2, nota3 }) => (
                  <NotasDisciplina
                    key={disciplina}
                    disciplina={disciplina}
                    nota1={nota1}
                    nota2={nota2}
                    nota3={nota3}
                    handleNavigateToAddNotas={() =>
                      handleNavigateToAddNotas(
                        disciplina,
                        nota1,
                        nota2,
                        nota3,
                        "PRIMEIRO"
                      )
                    }
                  />
                ))}
              </View>
            </ScrollView>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#E7EBEF",
  },
  container: {
    flex: 1,
    backgroundColor: "#E7EBEF",
    paddingHorizontal: 24,
  },
  header: {
    width: "100%",
    height: 250,
    // backgroundColor: "#CFCFCF",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },

  // gradient: {
  //   width: "100%",
  //   height: 250,
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   paddingHorizontal: 24,
  //   borderRadius: 4,
  // },

  profileImg: {
    width: 154,
    height: 154,
    borderRadius: 12,
  },

  nomeAluno: {
    textAlign: "center",
    marginTop: 12,
    color: "#61768D",
    fontSize: 20,
    fontWeight: "600",
  },
  descricaoAluno: {
    textAlign: "center",
    color: "#61768D",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 12,
    opacity: 0.5,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12,
  },
  contactarbutton: {
    backgroundColor: "#097FFA",
    flex: 1,
    borderRadius: 4,
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  contactarButtonText: {
    fontSize: 18,
    textTransform: "uppercase",
    color: "#E7EBEF",
  },
  editButton: {
    width: 46,
    height: 46,
    backgroundColor: "rgba(9, 127, 250, .15)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  boletimWrapper: {
    backgroundColor: "#F5FAFF",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginHorizontal: 12,
    marginTop: 12,
    marginBottom: 30,
    borderColor: "#61768D",
    borderWidth: 1,
  },
  boletimHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  boletimTrimestreText: {
    fontSize: 14,
    textTransform: "uppercase",
    color: "#61768D",
  },
  boletimPrint: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderColor: "rgba(255, 255, 255, 0.09)",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  boletimContainer: {},
  row: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#61768D",
    justifyContent: "space-between",
    paddingRight: 12,
    paddingVertical: 12,
    alignContent: "stretch",
  },
  boletimContentHeaderText: {
    color: "#61768D",
    fontWeight: "bold",
    fontSize: 16,
  },
  boletimContentText: {
    borderRightColor: "#61768D",
    color: "#61768D",
    borderRightWidth: 1,
    paddingHorizontal: 4,
  },
  notaDisciplinaContainer: {},
});
