SELECT professor_disciplina_turma.id 
AS pdt_id, 
professor_disciplina_turma.professor_id, 
professor_disciplina_turma.disciplina_id, 
professor_disciplina_turma.turma_id, 
turmas.letra AS t_letra, 
turmas.classe AS t_classe, 
turmas.turno AS t_turno, 
usuarios.nome_completo AS p_nome_completo, 
usuarios.genero AS p_genero, 
usuarios.telefone AS p_telefone, 
disciplinas.titulo AS d_titulo, 
disciplinas.diminuitivo AS d_diminuitivo, 
cursos.titulo AS c_titulo, 
cursos.diminuitivo AS c_diminuitivo 
FROM professor_disciplina_turma 
INNER JOIN turmas 
ON professor_disciplina_turma.turma_id = turmas.id 
INNER JOIN usuarios 
ON professor_disciplina_turma.professor_id = usuarios.id 
INNER JOIN disciplinas 
ON professor_disciplina_turma.disciplina_id = disciplinas.id 
INNER JOIN cursos ON turmas.curso_id = cursos.id 
WHERE professor_disciplina_turma.professor_id = ?


SELECT professor_disciplina_turma.id AS pdt_id, professor_disciplina_turma.professor_id, professor_disciplina_turma.disciplina_id, professor_disciplina_turma.turma_id, turmas.letra AS t_letra, turmas.classe AS t_classe, turmas.turno AS t_turno, usuarios.nome_completo AS p_nome_completo, usuarios.genero AS p_genero, usuarios.telefone AS p_telefone, disciplinas.titulo AS d_titulo, disciplinas.diminuitivo AS d_diminuitivo, cursos.titulo as c_titulo, 
cursos.diminuitivo as c_diminuitivo FROM professor_disciplina_turma INNER JOIN turmas ON professor_disciplina_turma.turma_id = turmas.id INNER JOIN usuarios ON professor_disciplina_turma.professor_id = usuarios.id INNER JOIN disciplinas INNER JOIN cursos ON turmas.curso_id = cursos.id WHERE professor_disciplina_turma.professor_id = 'VhN68d0MVK6R50hOmZT43w'
Executing (default): SELECT `id`, `username`, `senha`, `nome_completo`, `foto_perfil`, `telefone`, `bi`, `endereco`, `genero`, `tipo_usuario`, `created_at` AS `createdAt`, `updated_at` AS `updatedAt` FROM `usuarios` AS `Usuarios` WHERE 
`Usuarios`.`username` = 'prof2' LIMIT 1;
Executing (default): SELECT professor_disciplina_turma.id AS pdt_id, professor_disciplina_turma.professor_id, professor_disciplina_turma.disciplina_id, professor_disciplina_turma.turma_id, turmas.letra AS t_letra, turmas.classe AS t_classe, turmas.turno AS t_turno, usuarios.nome_completo AS p_nome_completo, usuarios.genero AS p_genero, usuarios.telefone AS p_telefone, disciplinas.titulo AS d_titulo, disciplinas.diminuitivo AS d_diminuitivo, cursos.titulo as c_titulo, 
cursos.diminuitivo as c_diminuitivo FROM professor_disciplina_turma INNER JOIN turmas ON professor_disciplina_turma.turma_id = turmas.id INNER JOIN usuarios ON professor_disciplina_turma.professor_id = usuarios.id INNER JOIN disciplinas INNER JOIN cursos ON turmas.curso_id = cursos.id WHERE professor_disciplina_turma.professor_id = 'HXacTRqpzSFzC4Geu456AA'
Executing (default): SELECT professor_disciplina_turma.id AS pdt_id, professor_disciplina_turma.professor_id, professor_disciplina_turma.disciplina_id, professor_disciplina_turma.turma_id, turmas.letra AS t_letra, turmas.classe AS t_classe, turmas.turno AS t_turno, usuarios.nome_completo AS p_nome_completo, usuarios.genero AS p_genero, usuarios.telefone AS p_telefone, disciplinas.titulo AS d_titulo, disciplinas.diminuitivo AS d_diminuitivo, cursos.titulo as c_titulo, 
cursos.diminuitivo as c_diminuitivo FROM professor_disciplina_turma INNER JOIN turmas ON professor_disciplina_turma.turma_id = turmas.id INNER JOIN usuarios ON professor_disciplina_turma.professor_id = usuarios.id INNER JOIN disciplinas INNER JOIN cursos ON turmas.curso_id = cursos.id WHERE professor_disciplina_turma.professor_id = 'HXacTRqpzSFzC4Geu456AA'