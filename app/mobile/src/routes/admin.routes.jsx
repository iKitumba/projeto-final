import { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Comunicados from "../pages/Comunicados";
import { Ionicons } from "@expo/vector-icons";

import TurmaRoutes from "./turma.routes";
import CriarRoutes from "./criar.routes";

const { Navigator, Screen } = createBottomTabNavigator();
import ActionButton from "../components/ActionButton";

import { AuthContext } from "../contexts/AuthContext";
import AllProfessores from "../pages/AllProfessores";
import Settings from "../pages/Settings";

export default function AdminRoutes({ navigation }) {
  const { logged, handleLogout } = useContext(AuthContext);

  function handleActionActive() {
    console.log(navigation);
  }

  return (
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
        name="TurmaRoutes"
        component={TurmaRoutes}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return focused ? (
              <Ionicons size={28} color={"#097FFA"} name="bookmark" />
            ) : (
              <Ionicons size={28} color={"#61768D"} name="bookmark-outline" />
            );
          },
        }}
      />

      <Screen
        name="AllProfessores"
        component={AllProfessores}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return focused ? (
              <Ionicons size={28} color={"#097FFA"} name="md-people" />
            ) : (
              <Ionicons size={28} color={"#61768D"} name="md-people-outline" />
            );
          },
        }}
      />

      <Screen
        name="Criar"
        component={CriarRoutes}
        options={{
          tabBarButton: (props) => {
            return <ActionButton {...props} />;
          },
          tabBarIcon: ({ size, focused }) => {
            return <Ionicons size={28} color="#F7F7F7" name="add" />;
          },
          tabBarStyle: {
            display: "none",
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
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return focused ? (
              <Ionicons size={28} color={"#097FFA"} name="md-settings" />
            ) : (
              <Ionicons
                size={28}
                color={"#61768D"}
                name="md-settings-outline"
              />
            );
          },
        }}
      />
    </Navigator>
  );
}
