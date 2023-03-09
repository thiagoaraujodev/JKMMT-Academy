package jkmmt.services;

import jkmmt.data.DetalheUsuarioData;
import jkmmt.model.UsuarioModel;
import jkmmt.repository.UsuarioRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class DetalheUsuarioServiceImpl implements UserDetailsService {

    private final UsuarioRepository repository;

    public DetalheUsuarioServiceImpl(UsuarioRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<UsuarioModel> usuario = repository.findByEmail(email);
        if (usuario.isEmpty()){
            throw new UsernameNotFoundException("usuário [" + email + "] não encontrado!");
        }

        return new DetalheUsuarioData(usuario);
    }
}
