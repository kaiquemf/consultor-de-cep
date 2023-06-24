package br.com.consultacep.service;

import br.com.consultacep.model.Endereco;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

import java.util.Objects;

@Service
public class EnderecoService {

    @Value("${viacep.url}")
    private String viacepUrl;

    public Endereco getEnderecoPeloCep(String cep) {
        WebClient webClient = WebClient.create(viacepUrl);

        try {
            return webClient.get()
                    .uri("/{cep}/json", cep)
                    .retrieve()
                    .bodyToMono(Endereco.class)
                    .block();
        } catch (WebClientResponseException.NotFound e) {
            return null;
        }
    }

    public Endereco getEnderecoPeloLogradouro(String uf, String localidade, String logradouro) {
        WebClient webClient = WebClient.create(viacepUrl);
        try {
            return webClient.get()
                    .uri("/{uf}/{localidade}/{logradouro}/json", uf, localidade, logradouro)
                    .retrieve()
                    .bodyToMono(Endereco[].class)
                    .blockOptional()
                    .map(enderecos -> enderecos.length > 0 ? enderecos[0] : null)
                    .orElse(null);
        } catch (WebClientResponseException.NotFound e) {
            String mensagemDeErro = e.getMessage();
            System.out.println(mensagemDeErro);
            return null;
        }
    }
}
