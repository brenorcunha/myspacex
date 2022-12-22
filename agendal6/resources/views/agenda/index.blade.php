@extends('adminlte::page')

@section('title', 'Agenda')

@section('content_header')
<h1><i class="fas fa-fx fa-bars"></i> Lista de Agendas</h1>
@stop

@section('content')
<div class="panel panel-default">
    <div class="panel-heading clearfix">
        Relação dos contatos da agenda
        <div class="pull-right">
			<!--Mandar para páginas:-->
            <a href="{{ route('agenda.index') }}" class="btn btn-primary btn-sm"><i class="fas fa-fx fa-sync-alt"></i> Atualizar a tela</a>
            <a href="{{ route('agenda.create') }}" class="btn btn-success btn-sm"><i class="fas fa-fx fa-plus"></i> Adicionar novo contato</a>
        </div>
    </div>

    <div class="panel-body">
        <table id="tabela" class="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Celular</th>
                    <th>Email</th>
                    <th>Ações</th>
                </tr>
            </thead>

            <tbody>
                @foreach($contatos as $contato)
                <tr>
					<!--Imprimir dados do BD na tela:-->
                    <td>{{ $contato->id }}</td>
                    <td>{{ $contato->nome}}</td>
                    <td>{{ $contato->fone_cel}}</td>
                    <td>{{ $contato->email }}</td>
                    <td>
                        <!-- botão visualização -->
<a href="{{ route('agenda.show', $contato->id) }}" class="btn btn-primary btn-xs">
                            <i class="fas fa-fx fa-eye"></i>
                        </a>
<a href="{{ route('agenda.edit', $contato->id) }}" class="btn btn-warning btn-xs">
                            <i class="fas fa-fx fa-edit"></i>
                        </a>
                        <!--Botao exclusao-->
                        <form action="{{ route('agenda.destroy', $contato->id) }}" method="POST" onsubmit="return confirm('Voce tem certeza de que quer excluir o registro?');" style="display: inline-block;">
                            <input type="hidden" name="_method" value="DELETE">
                            <input type="hidden" name="_token" value="{{ csrf_token() }}">

                            <button type="submit" class="btn btn-xs btn-danger">
                                <i class="fas fa-fx fa-trash-alt"></i>
                            </button>
                        </form>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>







    </div>
</div>
@stop

@section('css')

@stop

@section('js')
<script>
	//Quando o doc estiver pronto, será executada uma funcao que determina que a tabela está relacionada ao componente datatable;
    $(document).ready(function() {
        $('#tabela').DataTable();
    });
</script>
@stop