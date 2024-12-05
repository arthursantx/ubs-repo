import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Importe o HttpClient
import { Paciente } from '../model/paciente';
import { PacienteService } from '../service/paciente.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [PacienteService]
})
export class ListaComponent {
    paciente = {
    nomeCompleto: '',
    nomeSocial: '',
    nomeMae: '',
    nomePai: '',
    dataNascimento: '',
    sexo: '',
    nacionalidade: '',
    municipioNascimento: '',
    racaCor: '',
    frequentaEscola: '',
    escolaridade: '',
    situacaoFamiliar: '',
    vinculo: '',
    cadastro: '',
    deficiencia: '',
    celular: '',
    residencial: '',
    comercial: '',
    contato: '',
    email: '',
    enderecoOrigem: '',
    endereco: '',
    cpf: '',
    identidade: ''
  };

  private apiUrl = 'http://localhost:8080/api/pacientes';  // A URL do seu backend

  constructor(private http: HttpClient) {}

  cadastrar() {
    this.http.post(this.apiUrl, this.paciente).subscribe(response => {
      console.log('Paciente cadastrado com sucesso:', response);
      // Aqui você pode limpar o formulário ou mostrar uma mensagem de sucesso
    }, error => {
      console.error('Erro ao cadastrar paciente:', error);
    });
  }
}
