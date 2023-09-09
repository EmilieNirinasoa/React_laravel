<?php

namespace App\Http\Controllers;

use App\Models\Affichage;
use Illuminate\Http\Request;

class AffichageController extends Controller
{
    public function index()
{
    $data = Affichage::all();
    return response()->json($data);
}

public function store(Request $request)
{
    $newData = new Affichage();
    $newData->nom = $request->input('nom'); // Remplacez 'attribute' par le nom de votre attribut
    $newData->save();
    return response()->json(['message' => 'Données ajoutées avec succès'], 201);
}

public function destroy($id)
{
    $data = Affichage::findOrFail($id);
    $data->delete();
    return response()->json(['message' => 'Donnée supprimée avec succès'], 200);
}

public function update(Request $request, $id)
{
    $data = Affichage::findOrFail($id);
    $data->nom = $request->input('nom'); // Remplacez 'attribute' par le nom de votre attribut
    $data->save();
    return response()->json(['message' => 'Données mises à jour avec succès'], 200);
}

public function edit($id)  {
    $data= Affichage::find($id);
    return response()->json($data);
}



}
