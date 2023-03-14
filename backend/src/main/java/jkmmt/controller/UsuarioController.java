package jkmmt.controller;

import jkmmt.dto.UsuarioDto;
import jkmmt.model.UsuarioModel;
import jkmmt.repository.UsuarioRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/usuario")
public class UsuarioController {
    private final UsuarioRepository repository;
    private final PasswordEncoder encoder;

    public UsuarioController(UsuarioRepository repository, PasswordEncoder encoder) {
        this.repository = repository;
        this.encoder = encoder;
    }

    @GetMapping("/listarTodos")
    public ResponseEntity<List<UsuarioModel>> listarTodos() {
        return ResponseEntity.ok(repository.findAll());
    }

    @PostMapping("/salvar")
    @ResponseBody
    public ResponseEntity<UsuarioModel> salvar(@RequestBody @NotNull UsuarioModel usuario) {
        Optional<UsuarioModel> optusuarioExistente = repository.findByEmail(usuario.getEmail());
        if (optusuarioExistente.isPresent()) {
            // usuário já existe, retornar resposta com código de status HTTP 409 Conflict
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        // usuário não existe, salvar e retornar resposta com código de status HTTP 200 OK
        usuario.setPassword(encoder.encode(usuario.getPassword()));
        return ResponseEntity.ok(repository.save(usuario));
    }

    @PutMapping("/atualizar/{id}")
    @ResponseBody
    public ResponseEntity<UsuarioModel> atualizar(@PathVariable Integer id, @RequestBody UsuarioModel usuario) {
        Optional<UsuarioModel> optusuarioExistente = repository.findById(id);
        if (optusuarioExistente.isPresent()) {
            UsuarioModel usuarioExistente = optusuarioExistente.get();
            usuarioExistente.setName(usuario.getName());
            usuarioExistente.setEmail(usuario.getEmail());
            usuarioExistente.setPassword(encoder.encode(usuario.getPassword()));

            return ResponseEntity.ok(repository.save(usuarioExistente));
        } else {
            // usuário não encontrado, retornar resposta com código de status HTTP 404 Not Found
            return ResponseEntity.notFound().build();
        }
    }


    @GetMapping("/validarSenha")
    public ResponseEntity<Boolean> validarSenha(@RequestParam String email, @RequestParam String password) {

        Optional<UsuarioModel> optUsuario = repository.findByEmail(email);
        if (optUsuario.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false);
        }

        UsuarioModel usuario = optUsuario.get();
        boolean valid = encoder.matches(password, usuario.getPassword());

        HttpStatus status = (valid) ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
        return ResponseEntity.status(status).body(valid);

    }


    @GetMapping("/email/{email}")
    public ResponseEntity<UsuarioDto> getUserByEmail(@PathVariable String email) {
        Optional<UsuarioModel> optUsuario = repository.findByEmail(email);
        if (optUsuario.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }

        UsuarioModel usuario = optUsuario.get();
        UsuarioDto usuarioDto = new UsuarioDto(usuario.getId(), usuario.getName(), usuario.getEmail());
        return ResponseEntity.ok(usuarioDto);
    }

    @GetMapping("/validarEmail")
    public ResponseEntity<Boolean> validarEmail(@RequestParam String email) {

        Optional<UsuarioModel> optUsuario = repository.findByEmail(email);
        if (optUsuario.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(false);
        }

        return ResponseEntity.status(HttpStatus.OK).body(true);
    }
}
