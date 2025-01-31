# Classe Heroi

Este repositório apresenta uma aplicação simples em JavaScript que modela heróis genéricos e seus ataques. A ideia é criar diferentes tipos de heróis e exibir mensagens personalizadas de acordo com o tipo de ataque realizado.

## Características do Projeto
- Definição de uma classe genérica `Heroi`.
- Criação de heróis com propriedades como nome, idade e tipo.
- Personalização de ataques com base no tipo do herói.
- Mensagens dinâmicas exibidas conforme o ataque realizado.

## Tecnologias Utilizadas
- Linguagem de programação: **JavaScript**
- Ambiente de desenvolvimento sugerido: **Visual Studio Code**

## Estrutura da Classe `Heroi`
A classe possui as seguintes propriedades:
- `nome`: O nome do herói.
- `idade`: A idade do herói.
- `tipo`: O tipo de herói (guerreiro, mago, etc.).

### Método `atacar()`
Este método determina o tipo de ataque baseado no tipo do herói e exibe a mensagem correspondente:
- **Mago**: `magia`
- **Guerreiro**: `espada`
- **Monge**: `artes marciais`
- **Ninja**: `shuriken`
- Outros tipos: `um ataque desconhecido`

## Exemplo de Saída
Com base no código de exemplo, o programa irá gerar a seguinte saída no console:
```bash
O mago Merlin atacou usando magia
O guerreiro Artur atacou usando espada
O monge Jack atacou usando artes marciais
O ninja Jiraya atacou usando shuriken
```

## Criado por
- Newton para desafio do curso Formação Lógica de Programação da DIO

