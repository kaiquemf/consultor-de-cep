import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorPorCepComponent {
  cep: string = '';
  uf: string = '';
  localidade: string = '';
  logradouro: string = '';
  endereco: any;
  exibirFormulario: boolean = false;

  constructor(private http: HttpClient) {}

  buscarEnderecoPorCep() {
    this.http.get<any>(`http://localhost:8080/viacep/${this.cep}`).subscribe((endereco) =>{
      this.endereco = endereco
    });
  }

  buscarEnderecoPorLogradouro() {
    this.http.get<any>(`http://localhost:8080/viacep/${this.uf}/${this.localidade}/${this.logradouro}`).subscribe((endereco) => {
      if (endereco) {
        this.endereco = endereco;
        this.cep = endereco.cep;
      }
    });
  }
  atualizarUF(event: any) {
    this.uf = event.target.value;
  }
  
  tentativaPorLogradouro() {
    this.exibirFormulario = true;
  };
  tentativaPorCep() {
    this.exibirFormulario = false;
  }

  recarregarPagina() {
    location.reload();
  }

  lista_Uf_Estados = [
    { uf: 'AC', nome: 'Acre' },
    { uf: 'AL', nome: 'Alagoas' },
    { uf: 'AP', nome: 'Amapá' },
    { uf: 'AM', nome: 'Amazonas' },
    { uf: 'BA', nome: 'Bahia' },
    { uf: 'CE', nome: 'Ceará' },
    { uf: 'DF', nome: 'Distrito Federal' },
    { uf: 'ES', nome: 'Espirito Santo' },
    { uf: 'GO', nome: 'Goiás' },
    { uf: 'MA', nome: 'Maranhão' },
    { uf: 'MS', nome: 'Mato Grosso do Sul' },
    { uf: 'MT', nome: 'Mato Grosso' },
    { uf: 'MG', nome: 'Minas Gerais' },
    { uf: 'PA', nome: 'Pará' },
    { uf: 'PB', nome: 'Paraíba' },
    { uf: 'PR', nome: 'Paraná' },
    { uf: 'PE', nome: 'Pernambuco' },
    { uf: 'PI', nome: 'Piauí' },
    { uf: 'RJ', nome: 'Rio de Janeiro' },
    { uf: 'RN', nome: 'Rio Grande do Norte' },
    { uf: 'RS', nome: 'Rio Grande do Sul' },
    { uf: 'RO', nome: 'Rondônia' },
    { uf: 'RR', nome: 'Roraima' },
    { uf: 'SC', nome: 'Santa Catarina' },
    { uf: 'SP', nome: 'São Paulo' },
    { uf: 'SE', nome: 'Sergipe' },
    { uf: 'TO', nome: 'Tocantins' }
]
  
}
