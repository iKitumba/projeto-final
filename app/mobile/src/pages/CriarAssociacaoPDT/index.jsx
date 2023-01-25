import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";

import SelectDropdown from "react-native-select-dropdown";
import { letras } from "../../constants/letras";

export default function CriarAssociacaoPDT({ navigation }) {
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
            <Text style={styles.topOpctionName}>Associação PDT</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Professor</Text>
          <SelectDropdown
            data={countries}
            defaultButtonText="Qual desses professores?"
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

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Turma</Text>
          <SelectDropdown
            data={letras}
            defaultButtonText="Qual a turma?"
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

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Disciplina</Text>
          <SelectDropdown
            data={letras}
            defaultButtonText="Escolha a disciplina"
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
            <Text style={styles.buttonText}>Associar</Text>
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
    marginVertical: 46,
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
});
