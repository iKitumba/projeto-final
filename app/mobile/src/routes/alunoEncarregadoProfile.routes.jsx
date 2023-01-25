import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddNotas from "../pages/AddNotas";
import AlunoPerfil from "../pages/AlunoProfile";
import ExpoPrint from "../pages/ExpoPrint";
import Professores from "../pages/Professores";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AlunoEncarregadoProfileRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="AlunoPerfil" component={AlunoPerfil} />
      <Screen name="Professores" component={Professores} />
      <Screen name="AddNotas" component={AddNotas} />
      <Screen name="Imprimir" component={ExpoPrint} />
    </Navigator>
  );
}
