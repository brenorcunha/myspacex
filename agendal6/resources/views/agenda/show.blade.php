@extends('adminlte::page')

@section('title', 'Agenda')

@section('content_header')
<h1>Exibição dos dados do contato</h1>
@stop

@section('content')
<div class="panel panel-default">
    <div class="panel-heading">
        Exibe os dados de contato
    </div>
    <div class="panel-body">
        <table class="table table-bordered table-hover table-striped">
            <tbody>
                <tr>
                        <td class="col-md-2">ID</td>
                        <td class="col-md-10">{{ $agenda->id }}</td>
                </tr>

                <tr>
                        <td class="col-md-2">Nome do contato</td>
                        <td class="col-md-10">{{ $agenda->nome }}</td>
                </tr>

                <tr>
                        <td class="col-md-2">Telefone residencial</td>
                        <td class="col-md-10">{{ $agenda->fone_res }}</td>
                </tr>

                <tr>
                        <td class="col-md-2">Telefone celular</td>
                        <td class="col-md-10">{{ $agenda->fone_cel }}</td>
                </tr>

                <tr>
                        <td class="col-md-2">E-mail</td>
                        <td class="col-md-10">{{ $agenda->email }}</td>
                </tr>

                <tr>
                        <td class="col-md-2">Data de nascimento</td>
                        <td class="col-md-10">{{ $agenda->dt_nasc }}</td>
                        <!--format("d/m/Y")-->
                </tr>

                <tr>
                        <td class="col-md-2">Facebook</td>
                        <td class="col-md-10">{{ $agenda->facebook }}</td>
                </tr>

                <tr>
                        <td class="col-md-2">Twitter</td>
                        <td class="col-md-10">{{ $agenda->twitter }}</td>
                </tr>

                <tr>
                        <td class="col-md-2">Instagram</td>
                        <td class="col-md-10">{{ $agenda->instagram }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="panel-footer">
        <a href="{{ route('agenda.index') }}" class="btn btn-default">
                <i class="fas fa-reply"></i> Voltar
        </a>
</div>
@stop

@section('css')

@stop

@section('js')

@stop