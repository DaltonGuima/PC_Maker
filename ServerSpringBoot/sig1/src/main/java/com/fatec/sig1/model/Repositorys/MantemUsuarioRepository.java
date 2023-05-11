package com.fatec.sig1.model.Repositorys;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.fatec.sig1.model.Usuario.Usuario;

/**
 * Esta classe abstrai a programação de consultas para acesso ao banco de dados.
 * O nome dos metodos para consulta têm duas partes separadas pela palavra-chave
 * By. A primeira parte é o “find” seguido de By. A segunda parte é o nome do
 * atribudo na tabela por exemplo Cpf - findByCpf
 * 
 * @author
 */
public interface MantemUsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByEmail(String email);

    List<Usuario> findAllByNomeIgnoreCaseContaining(String nome);
}