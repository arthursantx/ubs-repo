import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PacienteService } from '../service/paciente.service';
import { Paciente } from '../model/paciente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers:[PacienteService]
})
export class CadastroComponent {
  public obj: Paciente = new Paciente();
  public mensagem: string = "";
 
  constructor(private service: PacienteService) { }
 
  public salvarCadastro() {
    // Envia o objeto "Paciente" preenchido para o serviço salvar no banco
    this.service.gravar(this.obj).subscribe({
      next: (data: any) => {
        this.mensagem = "Paciente inserido com sucesso!";
      },
      error: (msg: any) => {
        this.mensagem = "Ocorreu um erro, tente mais tarde!";
      }
    });
    this.limpar();
  }
 
  public limpar() {
    // Limpa o formulário (reseta o objeto)
    this.obj = new Paciente();
  }
}
