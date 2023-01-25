import { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Comunicados from "../pages/Comunicados";
import AlunoPerfil from "../pages/AlunoProfile";
import { Ionicons } from "@expo/vector-icons";

import UnloggedRoutes from "./unlogged.routes";

const { Navigator, Screen } = createBottomTabNavigator();
import PreLogout from "../pages/PreLogout";

import { AuthContext } from "../contexts/AuthContext";
import AlunoEncarregadoProfileRoutes from "./alunoEncarregadoProfile.routes";

export default function AlunoRoutes({ navigation }) {
  const { logged, handleLogout } = useContext(AuthContext);

  function handleActionActive() {
    console.log(navigation);
  }

  return logged ? (
    <Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: "#C8D5E3",
        },
      }}
    >
      <Screen
        name="AlunoEncarregadoProfileRoutes"
        component={AlunoEncarregadoProfileRoutes}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return focused ? (
              <Ionicons size={28} color={"#097FFA"} name="md-person" />
            ) : (
              <Ionicons size={28} color={"#61768D"} name="md-person-outline" />
            );
          },
        }}
      />
      <Screen
        name="Comunicados"
        component={Comunicados}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return focused ? (
              <Ionicons size={28} color={"#097FFA"} name="notifications" />
            ) : (
              <Ionicons
                size={28}
                color={"#61768D"}
                name="notifications-outline"
              />
            );
          },
        }}
      />
      <Screen
        name="PreLogout"
        component={PreLogout}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return focused ? (
              <Ionicons size={28} color={"#097FFA"} name="md-log-out" />
            ) : (
              <Ionicons size={28} color={"#61768D"} name="md-log-out-outline" />
            );
          },
        }}
      />
    </Navigator>
  ) : (
    <UnloggedRoutes />
  );
}
