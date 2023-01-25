import { createContext, useState, useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { API } from "../services/api";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAnUser, setIsAnUser] = useState(true);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    async function loadStorageUser() {
      const storageUser = await AsyncStorage.getItem("@PAP:usuario");
      const storageToken = await AsyncStorage.getItem("@PAP:token");

      if (storageUser && storageToken) {
        setUsuario(JSON.parse(storageUser));
      }
    }

    loadStorageUser();
  }, []);

  async function handleLogout() {
    await AsyncStorage.multiRemove(["@PAP:usuario", "@PAP:token"]);

    setUsuario(null);
  }

  async function handleLogin({ username, senha }) {
    console.log({
      username,
      senha,
    });

    try {
      const { data } = await API.post("usuarios/sessao", {
        username: String(username).trim(),
        senha,
      });

      await AsyncStorage.setItem("@PAP:usuario", JSON.stringify(data.usuario));
      await AsyncStorage.setItem("@PAP:token", data.token);

      setUsuario(data.usuario);
    } catch (error) {
      Alert.alert("Login", error.response.data.message);
    }
  }

  async function handleLoginAluno({ nome_completo, bi }) {
    try {
      const { data } = await API.post("alunos_sessao", {
        nome_completo: String(nome_completo).trim(),
        bi,
      });

      await AsyncStorage.setItem("@PAP:usuario", JSON.stringify(data.aluno));

      setUsuario(data.aluno);
    } catch (error) {
      Alert.alert("Login", error.response.data.message);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        logged: !!usuario,
        handleLogout,
        isAnUser,
        setIsAnUser,
        handleLogin,
        handleLoginAluno,
        usuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
