import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nomeCompleto = "Nome do usuário";
  nomeSocial = "Nome social";
  nomeMae = '';
  nomePai = '';
  dataNascimento = '';
  sexo = 'masculino';
  nacionalidade = '';
  municipioNascimento = '';
  racaCor = 'branca';
  frequentaEscola = '';
  escolaridade = '';
  situacaoFamiliar = 'solteiro';
  vinculo = '';
  cadastro = '';
  deficiencia = 'nenhuma';
  celular = '';
  residencial = '';
  comercial = '';
  contato = '';
  email = '';
  enderecoOrigem = '';
  endereco = '';
  cpf = '';
  identidade = '';
}
