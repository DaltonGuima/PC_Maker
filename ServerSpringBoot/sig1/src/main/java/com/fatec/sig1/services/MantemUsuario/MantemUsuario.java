
package com.fatec.sig1.services.MantemUsuario;

import com.fatec.sig1.model.Usuario.Usuario;

import java.util.List;
import java.util.Optional;

public interface MantemUsuario {
    public List<Usuario> consultaTodos();

    public Optional<Usuario> consultaPorId(Long id);

    public void delete(Long id);

    public Optional<Usuario> consultaPorEmail(String email);

    public Optional<Usuario> save(Usuario usuario);

    public Optional<Usuario> atualiza(Long id, Usuario usuario);
}