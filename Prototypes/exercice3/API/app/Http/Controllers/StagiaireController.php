<?php

namespace App\Http\Controllers;

use App\Models\cf;
use App\Models\Stagiaire;
use Illuminate\Http\Request;

class StagiaireController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $Stagiaire= Stagiaire::where('Prenom' ,'LIKE', $request->Nom.'%')->get();

        return json_encode($Stagiaire);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\cf  $cf
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $Stagiaire= Stagiaire::where('id' ,'LIKE', $id)->get();


        return json_encode($Stagiaire);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\cf  $cf
     * @return \Illuminate\Http\Response
     */
    public function edit(cf $cf)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\cf  $cf
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, cf $cf)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\cf  $cf
     * @return \Illuminate\Http\Response
     */
    public function destroy(cf $cf)
    {
        //
    }
}
