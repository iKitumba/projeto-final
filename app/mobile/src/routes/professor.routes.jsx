import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Comunicados from "../pages/Comunicados";
import { Ionicons } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

import TurmaRoutes from "./turma.routes";
import Settings from "../pages/Settings";

export default function ProfessorRoutes() {
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
