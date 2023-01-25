import { useContext } from "react";

import UnloggedRoutes from "./unlogged.routes";

import { AuthContext } from "../contexts/AuthContext";
import AdminRoutes from "./admin.routes";
import ProfessorRoutes from "./professor.routes";
import AlunoRoutes from "./aluno.routes";

export default function AppRoutes({ navigation }) {
  const { logged, usuario } = useContext(AuthContext);

  if (
    (logged && usuario.tipo_usuario === "ADMIN") ||
    (logged && usuario.tipo_usuario === "PROFESSOR_ADMIN")
  ) {
    return <AdminRoutes />;
  }

  if (logged && usuario.tipo_usuario === "PROFESSOR") {
    return <ProfessorRoutes />;
  }

  if (logged && usuario.nome_pai && usuario.nome_mae) {
    return <AlunoRoutes />;
  }

  return <UnloggedRoutes />;
}
