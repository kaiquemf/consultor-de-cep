package br.com.consultacep.controller;

import br.com.consultacep.model.Endereco;
import br.com.consultacep.service.EnderecoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@RestController
@RequestMapping("/viacep")
@CrossOrigin(origins = "http://localhost:4200")
public class EnderecoController {

    @Autowired
    private EnderecoService enderecoService;

    @Value("${viacep.url}")
    private String viacepUrl;

    @GetMapping("/{cep}")
    public Endereco getEnderecoPeloCep(@PathVariable String cep) {
        return enderecoService.getEnderecoPeloCep(cep);
    }

    @GetMapping("/{uf}/{localidade}/{logradouro}")
    public Endereco getEnderecoPeloLogradouro(@PathVariable String uf, @PathVariable String localidade, @PathVariable String logradouro) {
        return enderecoService.getEnderecoPeloLogradouro(uf, localidade, logradouro);
    }
}
