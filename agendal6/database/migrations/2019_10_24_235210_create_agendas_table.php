<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAgendasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agendas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nome', 70);
            $table->string('fone_res', 15)->nullable();
            $table->string('fone_cel', 15);
            $table->date('dt_nasc')->nullable();
            $table->string('email', 50)->nullable();
            $table->string('facebook', 70)->nullable();
            $table->string('twitter', 70)->nullable();
            $table->string('instagram', 70)->nullable();

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('agendas');
    }
}
