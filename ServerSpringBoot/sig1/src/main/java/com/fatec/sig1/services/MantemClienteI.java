package com.fatec.sig1.services;

import java.util.List;
import java.util.Optional;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestTemplate;

import com.fatec.sig1.model.Cliente.Cliente;
import com.fatec.sig1.model.Cliente.Endereco;
import com.fatec.sig1.model.Repositorys.MantemClienteRepository;

/**
 * A classe mantem cliente implementa o padrao Service. Servce eh um padrao que
 * basicamente encapsula o processo de obtencao de serviços(objetos). O Service
 * cria uma camada de abstracao neste processo. Ao inves da classe dependente
 * instanciar suas dependencias diretamente, eles são solicitados a partir de um
 * objeto centralizado que atua como localizador de serviços.
 * 
 * @author
 *
 */
@Service
public class MantemClienteI implements MantemCliente {
	Logger logger = LogManager.getLogger(this.getClass());
	@Autowired
	MantemClienteRepository repository;

	public List<Cliente> consultaTodos() {
		logger.info(">>>>>> servico consultaTodos chamado");
		return repository.findAll();
	}

	@Override
	public Optional<Cliente> consultaPorCpf(String cpf) {
		logger.info(">>>>>> servico consultaPorCpf chamado");
		return repository.findByCpf(cpf);
	}

	@Override
	public Optional<Cliente> consultaPorId(Long id) {
		logger.info(">>>>>> servico consultaPorId chamado");
		return repository.findById(id);
	}

	@Override
	public void delete(Long id) {
		logger.info(">>>>>> servico delete por id chamado");
		repository.deleteById(id);
	}

	@Override
	public Optional<Cliente> atualiza(Long id, Cliente cliente) {
		logger.info(">>>>>> 1.servico atualiza informações de cliente chamado");
		Endereco endereco = obtemEndereco(cliente.getCep());
		Cliente clienteModificado = new Cliente(cliente.getNome(), cliente.getDataNascimento(), cliente.getSexo(),
				cliente.getCpf(), cliente.getCep(), cliente.getComplemento());
		clienteModificado.setId(id);
		clienteModificado.obtemDataAtual(new DateTime());
		clienteModificado.setEndereco(endereco.getLogradouro());
		logger.info(">>>>>> 2. servico atualiza informacoes de cliente cep valido para o id => "
				+ clienteModificado.getId());
		return Optional.ofNullable(repository.save(clienteModificado));
	}

	public Endereco obtemEndereco(String cep) {
		RestTemplate template = new RestTemplate();
		String url = "https://viacep.com.br/ws/{cep}/json/";
		logger.info(">>>>>> servico consultaCep - " + cep);
		ResponseEntity<Endereco> resposta = null;
		try {
			resposta = template.getForEntity(url, Endereco.class, cep);
			return resposta.getBody();
		} catch (ResourceAccessException e) {
			logger.info(">>>>>> consulta CEP erro nao esperado ");
			return null;
		} catch (HttpClientErrorException e) {
			logger.info(">>>>>> consulta CEP inválido erro HttpClientErrorException =>" + e.getMessage());
			return null;
		}
	}

	@Override
	public Optional<Cliente> save(Cliente cliente) {
		logger.info(">>>>>> servico save chamado ");
		cliente.setDataCadastro(new DateTime());
		Endereco endereco = obtemEndereco(cliente.getCep());
		cliente.setEndereco(endereco.getLogradouro());
		return Optional.ofNullable(repository.save(cliente));
	}
}
