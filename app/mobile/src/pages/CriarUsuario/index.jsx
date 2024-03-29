import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import Checkbox from "expo-checkbox";

import SelectDropdown from "react-native-select-dropdown";
import { letras } from "../../constants/letras";

import * as ImagePicker from "expo-image-picker";

export default function CriarUsuario({ navigation }) {
  const [imageURI, setImageURI] = useState(null);
  const [nome_completo, setNome_completo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [bi, setBi] = useState("");
  const [tipo_usuario, setTipo_usuario] = useState("");
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [endereco, setEndereco] = useState("");
  const [passwordHidden, setPasswordHidden] = useState(true);

  const [checked, setChecked] = useState(1);
  const [isFemale, setIsFemale] = useState(true);
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];

  function handleGenero() {
    setIsFemale((prev) => !prev);
  }

  function handleBack() {
    navigation.goBack();
  }

  async function pickImage() {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImageURI(result.uri);
    }
  }

  function handleSubmit() {
    console.log({
      nome_completo,
      telefone,
      bi,
      endereco,
      username,
      senha,
      genero: isFemale ? "FEMENINO" : "MASCULINO",
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topRow}>
          <TouchableOpacity style={styles.goBack} onPress={handleBack}>
            <Ionicons name="arrow-back" size={24} color="#61768D" />
            <Text style={styles.topOpctionName}>Usuário</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.form}>
        <KeyboardAvoidingView
          enabled={Platform.OS === "ios"}
          behavior="padding"
        >
          {imageURI ? (
            <TouchableOpacity onPress={pickImage}>
              <Image
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginVertical: 12,
                  borderRadius: 8,
                }}
                source={{
                  uri: imageURI,
                  width: 154,
                  height: 154,
                }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.previewContainer}
              onPress={pickImage}
            >
              <MaterialIcons name="photo-camera" size={36} color="#E7EBEF" />
            </TouchableOpacity>
          )}

          <View style={styles.firstRow}>
            <View style={[styles.inputContainer, { flex: 1, marginRight: 8 }]}>
              <Text style={styles.label}>Nome</Text>
              <TextInput
                placeholder="Nome completo do aluno"
                placeholderTextColor="rgba(115, 134, 155, .4)"
                style={styles.input}
                value={nome_completo}
                onChangeText={setNome_completo}
                autoCapitalize="words"
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
              <Text style={styles.label}>Telefone</Text>
              <TextInput
                placeholder="999999999"
                placeholderTextColor="rgba(115, 134, 155, .4)"
                style={styles.input}
                value={telefone}
                onChangeText={setTelefone}
                keyboardType="phone-pad"
              />
            </View>
            <View style={[styles.inputContainer, { flex: 1 }]}>
              <Text style={styles.label}>Bi</Text>
              <TextInput
                placeholder="Bilhete de identidade"
                placeholderTextColor="rgba(115, 134, 155, .4)"
                style={styles.input}
                value={bi}
                onChangeText={setBi}
                autoCapitalize="none"
                maxLength={14}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Endereço</Text>
            <TextInput
              placeholder="bairro, munincipio, provincia"
              placeholderTextColor="rgba(115, 134, 155, .4)"
              style={styles.input}
              value={endereco}
              onChangeText={setEndereco}
              autoCapitalize="words"
            />
          </View>

          <View style={styles.secondRow}>
            <View style={[styles.inputContainer, { flex: 1, marginRight: 8 }]}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                placeholder="Nome de usuário"
                placeholderTextColor="rgba(115, 134, 155, .4)"
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <View style={[styles.inputContainer, { flex: 1 }]}>
              <TouchableOpacity
                onPress={() => {
                  setPasswordHidden(!passwordHidden);
                }}
              >
                <Text style={styles.label}>
                  Senha({passwordHidden ? "mostrar" : "esconder"})
                </Text>
              </TouchableOpacity>
              <TextInput
                placeholder="Digite uma senha"
                placeholderTextColor="rgba(115, 134, 155, .4)"
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={passwordHidden}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Cargo</Text>
            <SelectDropdown
              data={letras}
              defaultButtonText="Escolha o cargo do usuário"
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
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleBack}
              style={[styles.button, { backgroundColor: "#FD1818" }]}
            >
              <Text style={styles.buttonText}>Descartar</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
    marginTop: 24,
    paddingBottom: 24,
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
    width: "100%",
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

  actions: {
    flexDirection: "row",
    marginVertical: 46,
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
});
