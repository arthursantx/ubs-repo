package br.sp.gov.fatec.ubs.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pacientes")
public class PacienteController {

    @Autowired
    private PacienteRepository pacienteRepository;

    // Método para cadastrar o paciente
    @PostMapping
    public ResponseEntity<PacienteEntity> cadastrarPaciente(@RequestBody PacienteEntity paciente) {
        // Salva o paciente no banco de dados
        PacienteEntity novoPaciente = pacienteRepository.save(paciente);
        // Retorna a resposta com status CREATED (201) e o paciente salvo
        return ResponseEntity.status(HttpStatus.CREATED).body(novoPaciente);
    }
}
