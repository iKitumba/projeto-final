import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  TextInput,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import Checkbox from "expo-checkbox";

import SelectDropdown from "react-native-select-dropdown";
import { letras } from "../../constants/letras";
import { classes } from "../../constants/classes";

export default function CriarAluno() {
  const [checked, setChecked] = useState(1);
  const [isFemale, setIsFemale] = useState(true);
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];

  function handleGenero() {
    setIsFemale((prev) => !prev);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topRow}>
          <TouchableOpacity style={styles.goBack}>
            <Ionicons name="arrow-back" size={24} color="#61768D" />
            <Text style={styles.topOpctionName}>Aluno</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.form}>
        <TouchableHighlight style={styles.previewContainer}>
          <MaterialIcons name="photo-camera" size={36} color="#E7EBEF" />
        </TouchableHighlight>

        <View style={styles.firstRow}>
          <View style={[styles.inputContainer, { flex: 1, marginRight: 8 }]}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              placeholder="Nome completo do aluno"
              placeholderTextColor="rgba(115, 134, 155, .4)"
              style={styles.input}
            />
          </View>
          <TouchableOpacity
            onPress={handleGenero}
            style={[
              styles.genero,
              {
                backgroundColor: isFemale ? "#F35298" : "#F5FAFF",
                marginRight: 8,
              },
            ]}
          >
            <Text
              style={[
                styles.generoText,
                { color: isFemale ? "#F5FAFF" : "#73869B" },
              ]}
            >
              F
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleGenero}
            style={[
              styles.genero,
              { backgroundColor: !isFemale ? "#F35298" : "#F5FAFF" },
            ]}
          >
            <Text
              style={[
                styles.generoText,
                { color: !isFemale ? "#F5FAFF" : "#73869B" },
              ]}
            >
              M
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.secondRow}>
          <View style={[styles.inputContainer, { flex: 1, marginRight: 8 }]}>
            <Text style={styles.label}>Filho de</Text>
            <TextInput
              placeholder="Nome do pai"
              placeholderTextColor="rgba(115, 134, 155, .4)"
              style={styles.input}
            />
          </View>
          <View style={[styles.inputContainer, { flex: 1 }]}>
            <Text style={styles.label}>E de</Text>
            <TextInput
              placeholder="Nome da mãe"
              placeholderTextColor="rgba(115, 134, 155, .4)"
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nasceu aos</Text>
          <TextInput
            placeholder="dia/mês/ano"
            placeholderTextColor="rgba(115, 134, 155, .4)"
            style={styles.input}
          />
        </View>

        <View style={styles.secondRow}>
          <View style={[styles.inputContainer, { flex: 1, marginRight: 8 }]}>
            <Text style={styles.label}>Telefone 1</Text>
            <TextInput
              placeholder="Do Encarregado"
              placeholderTextColor="rgba(115, 134, 155, .4)"
              style={styles.input}
            />
          </View>
          <View style={[styles.inputContainer, { flex: 1 }]}>
            <Text style={styles.label}>Telefone 2</Text>
            <TextInput
              placeholder="Seu número"
              placeholderTextColor="rgba(115, 134, 155, .4)"
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>bi</Text>
          <TextInput
            placeholder="Bilhete De Identidade"
            placeholderTextColor="rgba(115, 134, 155, .4)"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Turma</Text>
          <SelectDropdown
            data={letras}
            defaultButtonText="Escolha a turma"
            rowTextStyle={styles.dropDownInputText}
            dropdownStyle={{ color: "#73869B" }}
            renderDropdownIcon={() => (
              <MaterialIcons
                name="arrow-drop-down"
                size={24}
                color="rgba(115, 134, 155, .4)"
              />
            )}
            buttonStyle={styles.input}
            buttonTextStyle={styles.dropDownInputText}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7EBEF",
    paddingTop: Constants.statusBarHeight + 24,
    paddingHorizontal: 24,
  },
  header: {},
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  goBack: {
    flexDirection: "row",
    alignItems: "center",
  },
  topOpctionName: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: "300",
    color: "#61768D",
    textTransform: "uppercase",
  },

  form: {
    marginVertical: 24,
  },
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    textTransform: "uppercase",
    fontSize: 10,
    color: "#73869B",
    marginBottom: 8,
  },
  input: {
    height: 46,
    borderWidth: 1,
    backgroundColor: "#F5FAFF",
    paddingHorizontal: 12,
    borderColor: "rgba(97, 118, 141, 0.4)",
    borderRadius: 4,
  },

  firstRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  genero: {
    width: 46,
    height: 46,
    backgroundColor: "#F5FAFF",
    borderWidth: 1,
    borderColor: "#BAC5D1",
    alignSelf: "center",
    borderRadius: 4,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  generoText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#73869B",
  },

  secondRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  previewContainer: {
    width: 154,
    height: 154,
    backgroundColor: "#F5FAFF",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#BAC5D1",
    borderRadius: 8,
    marginVertical: 12,
  },

  dropDownInputText: {
    fontSize: 16,
    color: "rgba(115, 134, 155, .4)",
  },

  dropDown: {
    width: "100%",
    borderWidth: 1,
    backgroundColor: "#F5FAFF",
    paddingHorizontal: 12,
    borderColor: "rgba(97, 118, 141, 0.4)",
    borderRadius: 4,
  },
});
