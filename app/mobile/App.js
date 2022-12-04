import { StatusBar } from "react-native";

import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import Turma from "./src/pages/Turma";
import Comunicados from "./src/pages/Comunicados";
import AlunoPerfil from "./src/pages/AlunoProfile";
import Professores from "./src/pages/Professores";
import Criar from "./src/pages/Criar";
import Comunicado from "./src/pages/Comunicado";
import Curso from "./src/pages/Curso";
import Disciplina from "./src/pages/Disciplina";
import CriarTurma from "./src/pages/CriarTurma";
import CriarAluno from "./src/pages/CriarAluno";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#E7EBEF"
        translucent={true}
      />
      <CriarAluno />
    </>
  );
}
