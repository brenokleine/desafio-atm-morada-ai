# Desafio Técnico Morada.ai: Caixa Eletrônico API

## Descrição
Esta API simula o funcionamento de um caixa eletrônico. Mesmo não sendo necessário, foi implementada uma interface para realizar as requisições e ver suas respostas de maneira simples.

Ao receber um valor de saque desejado, retorna a quantidade de cédulas de cada valor necessárias para compor esse saque, utilizando a menor quantidade de cédulas possível. As cédulas consideradas são: 100, 50, 20, 10, 5 e 2.

### Principais desafios:
Os principais desafios foram implementar a lógica para que todos os possíveis cenários de valores estejam cobertos, para que o programa tenha uma resposta adequada a todas as adversidades. Como por exemplo, input de dados inválidos ou uma reorganização de cédulas para atender ao pedido de saque do cliente de maneira mais eficiente possível.

# Instruções de Execução

## Clonar Repositório:
Clone o repositório com o seguinte comando:
```bash
git clone https://github.com/brenokleine/desafio-atm-morada-ai
```
## Rodar servidor de desenvolvimento:
Primeiro, baixe as dependencias com o comando:
```
npm install
```

Para rodar o servidor de desenvolvimento, utilize o comando abaixo:
```bash
npm run dev
```

### Abra [http://localhost:3000](http://localhost:3000) no navegador.

Utilize a aplicação.

## Testes
Os testes unitários se encontram em `./__tests__`

### Rodar testes:
Para rodar os testes utilize:

```
npm run test
```
