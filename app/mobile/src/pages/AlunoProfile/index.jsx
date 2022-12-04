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
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

import profileImg from "../../assets/profile.jpg";
import Title from "../../components/Title";

export default function AlunoPerfil() {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.header}>
        <Image source={profileImg} style={styles.profileImg} />
      </View>
      <ScrollView style={styles.container}>
        <Text style={styles.nomeAluno}>Alberto Dos Santos Kitumba</Text>
        <Text style={styles.descricaoAluno}>
          Frequenta a 11ª classe, turma A no curso de Farmácia no período Diurno
        </Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.contactarbutton}>
            {/* <Feather name="phone-call" size={24} color="#E7EBEF" /> */}
            <Text style={styles.contactarButtonText}>Contactar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editButton}>
            <MaterialIcons name="edit" size={24} color="#097FFA" />
          </TouchableOpacity>
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
              <TouchableOpacity style={styles.boletimPrint}>
                <Ionicons name="print" size={24} color="#F35298" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.boletimContainer}>
              <View style={styles.row}>
                <Text style={styles.boletimContentText}>Disciplina</Text>
                <Text style={styles.boletimContentText}>Nota 1</Text>
                <Text style={styles.boletimContentText}>Nota 2</Text>
                <Text style={styles.boletimContentText}>Nota 3</Text>
                <Text style={styles.boletimContentText}>Média</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.boletimContentText}>Disciplina</Text>
                <Text style={styles.boletimContentText}>Nota 1</Text>
                <Text style={styles.boletimContentText}>Nota 2</Text>
                <Text style={styles.boletimContentText}>Nota 3</Text>
                <Text style={styles.boletimContentText}>Média</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.boletimContentText}>Disciplina</Text>
                <Text style={styles.boletimContentText}>Nota 1</Text>
                <Text style={styles.boletimContentText}>Nota 2</Text>
                <Text style={styles.boletimContentText}>Nota 3</Text>
                <Text style={styles.boletimContentText}>Média</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.boletimContentText}>Disciplina</Text>
                <Text style={styles.boletimContentText}>Nota 1</Text>
                <Text style={styles.boletimContentText}>Nota 2</Text>
                <Text style={styles.boletimContentText}>Nota 3</Text>
                <Text style={styles.boletimContentText}>Média</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.boletimContentText}>Disciplina</Text>
                <Text style={styles.boletimContentText}>Nota 1</Text>
                <Text style={styles.boletimContentText}>Nota 2</Text>
                <Text style={styles.boletimContentText}>Nota 3</Text>
                <Text style={styles.boletimContentText}>Média</Text>
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
    backgroundColor: "#CFCFCF",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },
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
    fontWeight: "100",
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
    width: "80%",
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
    marginBottom: 100,
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
    borderBottomWidth: 1,
    borderBottomColor: "#61768D",
    justifyContent: "space-between",
    paddingRight: 12,
    paddingVertical: 12,
    alignContent: "stretch",
  },
  boletimContentText: {
    borderRightColor: "#61768D",
    color: "#61768D",
    borderRightWidth: 1,
    paddingHorizontal: 4,
  },
});
