@extends('adminlte::page')

@section('title', 'Agendal6')

@section('content_header')
<h1>Criacao de um novo contato</h1>
@stop

@section('content')
<form action="{{route('agenda.store')}}" method="POST">
    {{ csrf_field() }}
    <div class="panel panel-default">
        <div class="panel-heading">
            Cadastro de novos contatos
        </div>
        <div class="panel-body">
            <div class="form-group">
                <label for="nome">Nome do contato:</label>
                <input type="text" id="nome" name="nome" class="form-control">
            </div>
            
            <div class="form-group">
                    <label for="fone_res">Telefone residencial: </label>
                    <input type="text" id="fone_res" name="fone_res" class="form-control">
            </div>
            <div class="form-group">
                    <label for="fone_cel">Telefone celular: </label>
                    <input type="text" id="fone_cel" name="fone_cel" class="form-control">
            </div>
            <div class="form-group">
                    <label for="dt_nasc">Data de nascimento: </label>
                    <input type="date" id="dt_nasc" name="dt_nasc" class="form-control">
            </div>
            <div class="form-group">
                    <label for="email">E-mail: </label>
                    <input type="email" id="email" name="email" class="form-control">
            </div>
            <div class="form-group">
                    <label for="facebook">facebook: </label>
                    <input type="url" id="facebook" name="facebook" class="form-control">
            </div>
            <div class="form-group">
                <label for="twitter">Twitter: </label>
                <input type="url" id="twitter" name="twitter" class="form-control">
            </div>
            <div class="form-group">
                <label for="instagram">Instragram: </label>
                <input type="url" id="instagram" name="instagram" class="form-control">
            </div>
        </div>
        <div panel="footer">
            <a href="{{ route('agenda.index') }}" class="btn btn-default">
                <i class="fas fa-reply"></i> Voltar
            </a>
            <button type="submit" class="btn btn-success">
                <i class="fas fa-save"></i> Gravar
            </button>
        </div>

    </div>
    
</form>
@stop

@section('css')

@stop

@section('js')

@stop