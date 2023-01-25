import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import Checkbox from "expo-checkbox";

import SelectDropdown from "react-native-select-dropdown";
import { letras } from "../../constants/letras";
import { classes } from "../../constants/classes";

export default function CriarTurma({ navigation }) {
  const [checked, setChecked] = useState(1);
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];

  function handleBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topRow}>
          <TouchableOpacity style={styles.goBack} onPress={handleBack}>
            <Ionicons name="arrow-back" size={24} color="#61768D" />
            <Text style={styles.topOpctionName}>Turma</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Curso</Text>
          <SelectDropdown
            data={countries}
            defaultButtonText="Seleciona o curso"
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

        <View style={styles.checkboxWrapper}>
          {classes.map((classe) => (
            <View key={classe.id} style={styles.checkboxContainer}>
              <Checkbox
                style={styles.checkbox}
                value={checked === classe.id}
                onValueChange={() => setChecked(classe.id)}
                color={checked === classe.id ? "#F35298" : undefined}
              />
              <Text style={styles.checkboxText}>{classe.title}</Text>
            </View>
          ))}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Indentificador</Text>
          <SelectDropdown
            data={letras}
            defaultButtonText="Letra identificadora"
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

        <View style={styles.actions}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Criar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#FD1818" }]}
          >
            <Text style={styles.buttonText}>Descartar</Text>
          </TouchableOpacity>
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
    width: "100%",
    borderWidth: 1,
    backgroundColor: "#F5FAFF",
    paddingHorizontal: 12,
    borderColor: "rgba(97, 118, 141, 0.4)",
    borderRadius: 4,
  },

  actions: {
    flexDirection: "row",
    marginTop: 46,
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    flex: 1,
    backgroundColor: "#097FFA",
    marginHorizontal: 6,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#E7EBEF",
    textTransform: "uppercase",
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

  checkboxWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    borderColor: "#73869B",
  },
  checkboxText: {
    marginLeft: 8,
    color: "#73869B",
  },
});
