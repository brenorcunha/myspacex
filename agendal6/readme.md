# Projeto Agenda

## Motivação
Este projeto destina-se a ser uma base de ensino de desenvolvimento WEB utilizando Laravel 6.

## Pacotes Instalados

* laravel/framework: "^6.0"
* arrilot/laravel-widgets: "^3.13"
* jenssegers/date: "^3.5"
* jeroennoten/laravel-adminlte: "^2.0"
* yajra/laravel-datatables-oracle: "^9.6"
* laravel/ui: "^1.0"
* creativeorange/gravatar: "^1.0"

## Configurações iniciais necessárias (executar somente uma vez)

* Criando o banco de dados via linha de comando

```bash
mysql -e "create database agendal6;" -u root -p
```

**(Alternativa)** Caso o comando acima não funcione, utilize o HeidiSQL do laragon

* Criando o scaffolding de login e register

```bash
php artisan adminlte:install --force
```

## Extensões:
* Auto Close Tag
* Auto Rename Tag
* Color Highlight
* Color Picker
* Debugger for Chrome
* DotENV
* ESLint
* Git Graph
* Git History
* Git Project Manager
* IntelliSense for CSS class names in HTML
* Laravel 5 Snippets
* Laravel Artisan
* Laravel Assist
* Laravel Blade Snippets
* Laravel Blade Spacer
* Laravel Extra Intellisense
* laravel-blade
* Path Intellisense
* PHP Debug
* PHP DocBlocker
* PHP Intelephense
* Sort JSON objects
* vscode-php-cs-fixer

* Model cuida do BD - parte onde colocamos as regras de negócio da aplicação (Acesso ao BD, cálculos, validações, etc).
* artisan make:model nomedomodel
* View cuida da camada de exibição.
* Controller cuida da lógica do negócio.

## Add pasta do repositório: 
* Dá o comando seguinte no Terminal do Laragon:
* Abra um terminal no próprio VS e coloque: 

```bash
git config --global user.name "Breno da Cunha"
git config --global user.email "breno.rcunha2@gmail.com"
git config --list
git remote add origin ...
git branch --set-upstream-to origin/master
```
