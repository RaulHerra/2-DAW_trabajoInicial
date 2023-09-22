function cambiaSubrazas(){
    //Comprobamos cual raza ha sido seleccionada
    var opcionRaza = parseInt(document.getElementById("raza").value);
    var selectSubraza = document.getElementById("subraza");

    console.log(opcionRaza);
    
    //No he sido capaz de borrar los hijos del select (No lo recuerdo)
    /*while(selectSubraza.childElementCount!=0){
        let ninyos = selectSubraza.children;
        ninyos.
    }*/

    switch(opcionRaza){
        case 1:
            var azul = document.createElement("option");
            azul.text = "Azul";

            var blanco = document.createElement("option");
            blanco.text = "Blanco";
            
            var bronce = document.createElement("option");
            bronce.text = "Bronce";
            
            var cobre = document.createElement("option");
            cobre.text = "Cobre";
            
            var oro = document.createElement("option");
            oro.text = "Oro";
            
            var plata = document.createElement("option");
            plata.text = "Plata";
            
            var negro = document.createElement("option");
            negro.text = "Negro";
            
            var rojo = document.createElement("option");
            rojo.text = "Rojo";
            
            var verde = document.createElement("option");
            verde.text = "Verde";

            selectSubraza.add(azul);
            selectSubraza.add(blanco);
            selectSubraza.add(bronce);
            selectSubraza.add(cobre);
            selectSubraza.add(oro);
            selectSubraza.add(plata);
            selectSubraza.add(negro);
            selectSubraza.add(rojo);
            selectSubraza.add(verde);
            break;
        case 2:
            var altoElfo = document.createElement("option");
            altoElfo.text = "Alto Elfo";
            
            var elfoOscuro = document.createElement("option");
            elfoOscuro.text = "Elfo Oscuro";
            
            var bosques = document.createElement("option");
            bosques.text = "Elfo de los bosques";

            selectSubraza.add(altoElfo);
            selectSubraza.add(elfoOscuro);
            selectSubraza.add(bosques);
            break;
        case 3:
            var colinas = document.createElement("option");
            colinas.text = "de las colinas";
            
            var montanya = document.createElement("option");
            montanya.text = "de la montaña";
            
            var duergar = document.createElement("option");
            duergar.text = "Duergar";
            
            selectSubraza.add(colinas);
            selectSubraza.add(montanya);
            selectSubraza.add(duergar);
            break;
        case 4:
            var delBosque = document.createElement("option");
            delBosque.text = "del bosque";
            
            var rocky = document.createElement("option");
            rocky.text = "de la roca";
            
            var profundo = document.createElement("option");
            profundo.text = "de las profundidades";
            
            selectSubraza.add(delBosque);
            selectSubraza.add(rocky);
            selectSubraza.add(profundo);

            break;
        case 6:
            var piesLigeros = document.createElement("option");
            piesLigeros.text = "Pies ligeros";

            selectSubraza.add(piesLigeros);
            break;
        default:
            var noHay = document.createElement("option");
            noHay.text = "No hay";
            selectSubraza.add(noHay);
    }
}