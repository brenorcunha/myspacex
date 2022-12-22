<?php

namespace App\Http\Controllers;

use App\Agenda;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AgendaController extends Controller
{
    /**
     * index - exibe uma lista dos registros da tabela
     * create - exibe um form para cadastrar dados
     * store - recebe os dados do form (create) e envia para o Model
     *         gravar na tabela (operação de inserção)
     * edit - exibe um form para alterar dados de um determinado
     *        registro lido.
     * update - recebe os dados do form (edit) e envia para o Model
     *          atualizar na tabela (operação de update)
     * show - exibe em detalhes os dados de um determinado registro
     * destroy - deleta um determinado registro
     */
    /**
     * Display a listing of the resource.net stop
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contatos = Agenda::all();
        return view('agenda.index', compact('contatos'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //arquivo create.web.php que está na pasta agenda
        return view('agenda.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Função para formatar data do nosso jeito.
        $dt_nasc = $this->formata_data($request->dt_nasc);
        DB::table('agendas')->insert([
            'nome' => $request->nome,
            'fone_res' => $request->fone_res,
            'fone_cel' => $request->fone_cel,
            'email' => $request->email,
            'dt_nasc' => $request->dt_nasc,
            'facebook' => $request->facebook,
            'twitter' => $request->twitter,
            'instagram' => $request->instagram
        ]);
        //Agenda::create( $request->all());
        return redirect()->route('agenda.index');
    }
    public function formata_data($data)
    {
        //Pega a substring posicao 6 do vetor, 4 elementos, depois um -, depois o elemento 3, e mais um campo, por isso o 2, e assim sucessivamente.
        //dd/mm/aaaa
        //0123456789
        $d = substr($data, 6, 4) . "-" . substr($data, 3, 2) . "-" . substr($data, 0, 2);

        return $d;
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Agenda  $agenda
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $agenda = Agenda::find($id);
        return view('agenda.show', compact('agenda'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Agenda  $agenda
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //$agenda = select * from agenda where id = $id
        $agenda = Agenda::find($id);
        return view('agenda.edit', compact('agenda'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Agenda  $agenda
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //Função para formatar data do nosso jeito.
        $dt_nasc = $this->formata_data($request->dt_nasc);
        DB::table('agendas')
            ->where('id', $id)
            ->update([
                'nome' => $request->nome,
                'fone_res' => $request->fone_res,
                'fone_cel' => $request->fone_cel,
                'email' => $request->email,
                'dt_nasc' => $request->dt_nasc,
                'facebook' => $request->facebook,
                'twitter' => $request->twitter,
                'instagram' => $request->instagram
            ]);
        //Agenda::create( $request->all());
        return redirect()->route('agenda.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Agenda  $agenda
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        Agenda::destroy($id);
        return redirect()->route('agenda.index');
    }
}
