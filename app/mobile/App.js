import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AppRoutes from "./src/routes/app.routes";
import AuthContextProvider from "./src/contexts/AuthContext";
import AlunoRoutes from "./src/routes/aluno.routes";
import TurmaRoutes from "./src/routes/turma.routes";
import ProfessorRoutes from "./src/routes/professor.routes";
import ExpoPrint from "./src/pages/ExpoPrint";

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#E7EBEF"
          translucent={true}
        />
        <AppRoutes />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
