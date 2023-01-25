import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import Login from "../pages/Login";
import LoginAluno from "../pages/LoginAluno";

export default function UnloggedRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="LoginAluno" component={LoginAluno} />
    </Navigator>
  );
}
