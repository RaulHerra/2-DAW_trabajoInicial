//Funciones para la página de MTG
let blanco = false;
let azul = false;
let negro = false;
let rojo = false;
let verde = false;
let incoloro = false;

//Para el color blanco
function cambiarDescripcionBlanco(){
    let color = document.getElementById("blanco");
    apagarIncoloro();
    if(blanco){
        blanco=false;
        color.className = "";
    }else{
        blanco = true;
        color.className = "encendido";
    }
    comprobarColores();
}

//Para el color azul
function cambiarDescripcionAzul(){
    let color = document.getElementById("azul");
    apagarIncoloro()
    if(azul){
        azul=false;
        color.className = "";
    }else{
        azul = true;
        color.className = "encendido";
    }
    comprobarColores();
}

//Para el color negro
function cambiarDescripcionNegro(){
    let color = document.getElementById("negro");
    apagarIncoloro()
    if(negro){
        negro=false;
        color.className = "";
    }else{
        negro = true;
        color.className = "encendido";
    }
    comprobarColores();
}

//Para el color rojo
function cambiarDescripcionRojo(){
    let color = document.getElementById("rojo");
    apagarIncoloro()
    if(rojo){
        rojo=false;
        color.className = "";
    }else{
        rojo = true;
        color.className = "encendido";
    }
    comprobarColores();
}

//Para el color verde
function cambiarDescripcionVerde(){
    let color = document.getElementById("verde");
    apagarIncoloro()
    if(verde){
        verde=false;
        color.className = "";
    }else{
        verde = true;
        color.className = "encendido";
    }
    comprobarColores();
}
function cambiarDescripcionIncoloro(){
    let color = document.getElementById("incoloro");

    apagarColores();
    
    if(incoloro){
        incoloro=false;
        color.className = "";
    }else{
        incoloro = true;
        color.className = "encendido";
    }
    comprobarColores();
}

//Apaga el incoloro cuando un color es pulsado
function apagarIncoloro(){
    let color = document.getElementById("incoloro");
    if(incoloro){
        incoloro=false;
        color.className = "";
    }
}
//Apaga todos los colores cuando incoloro es pulsado
function apagarColores(){
    document.getElementById("blanco").className="";
    document.getElementById("azul").className="";
    document.getElementById("negro").className="";
    document.getElementById("rojo").className="";
    document.getElementById("verde").className="";

    blanco = false, azul = false, negro = false, rojo = false, verde = false;
}

//Funcion para comprobar colores encendidos
function comprobarColores(){
    let titulo = document.getElementById("tituloColor");
    let descripcion = document.getElementById("descripcionColor");

    let white = document.getElementById("blanco");
    let blue = document.getElementById("azul");
    let black = document.getElementById("negro");
    let red = document.getElementById("rojo");
    let green = document.getElementById("verde");
    let colorless = document.getElementById("incoloro")
    
    let imprimir = 1;
    /*
    Monocolores
    3 Blanco
    5 Azul
    7 Negro
    11 Rojo
    13 Verde
    0 Incoloro

    bicolores
    15 Azorius (Blanco Azul)
    21 Orzhov (Blanco Negro)
    33 Boros (Blanco rojo)
    39 Selesnya (Blanco Verde)
    35 Dimir (Azul Negro)
    55 Izzet (Azul Rojo)
    65 Simic (Azul Verde)
    77 Rakdos (Negro Rojo)
    91 Golgari (Negro Verde)
    143 Gruul (Rojo Verde)

    tricolores
    105 Esper (Blanco Azul Negro)
    165 Jeskai (Blanco Azul Rojo)
    195 Bant (Blanco Azul Verde)
    231 Mardu (Blanco Negro Rojo)
    273 Abzan (Blanco Negro Verde)
    429 Naya (Blanco Rojo Verde)
    385 Grixis (Azul Negro Rojo)
    455 Sultai (Azul Negro Verde)
    715 Temur (Azul Rojo Verde)
    1001 Jund (Negro Rojo Verde)

    Cuatricolores
    1155 Yore (Blanco Azul Negro Rojo)
    1365 Witch (Blanco Azul Negro Verde)
    5005 Glint (Azul Negro Rojo Verde)
    3003 Dune (Negro Rojo Verde Blanco)
    2145 Ink (Rojo Verde Blanco Azul)

    Pentacolor
    15015 Pentacolor (Blanco Azul Negro Rojo Verde)
    */
    if(white.className==="encendido"){
        imprimir*=3;
    }
    if(blue.className==="encendido"){
        imprimir*=5;
    }
    if(black.className==="encendido"){
        imprimir*=7;
    }
    if(red.className==="encendido"){
        imprimir*=11;
    }
    if(green.className==="encendido"){
        imprimir*=13;
    }
    if(colorless.className==="encendido"){
        imprimir*=0;
    }

    switch(imprimir){
        //Monocolores
        case 0:
            titulo.textContent = "Incoloro";
            descripcion.textContent = "La representación de lo artificial y la antimagia, solo con el incoloro podrás controlar máquinas y artefactos que te pueden brindar ventajas, en muchas ocasiones, el incoloro puede ser usado con cualquier color sin modificar al color al que asiste, aprovecha la máquinaria para aumentar tu poder.";
            break;    
        case 1:
            titulo.textContent = "";
            descripcion.textContent = "Seleccione la combinación de su preferencia.";
            break;
        case 3:
            titulo.textContent = "Blanco";
            descripcion.textContent = "El color de la vida y la protección, utiliza este color si te gusta formar ejercitos mientras que te proteges a ti mismo de las amenazas de tu rival.";
            break;
        case 5:
            titulo.textContent = "Azul";
            descripcion.textContent = "El color del control y el conicimiento, nada mejor para un jugador avanzado que poder mantener el control de la partida, decidiendo que puede hacer tu oponente y yendo siempre tres pasos por delante.";
            break;
        case 7:
            titulo.textContent = "Negro";
            descripcion.textContent = "El color de la muerte y el dolor, la magia de la nigromancia, tú decides quien vive y quien muere, no te importa sacrificar parte de tu vida si eso significa tu superioridad en la batalla.";
            break;
        case 11:
            titulo.textContent = "Rojo";
            descripcion.textContent = "El color de la destrucción y el caos, propaga el fuego mediante las explosiones que causarás, desde destruir criaturas de tus oponentes hasta lanzar explosiones sin cesar a tus oponentes.";
            break;
        case 13:
            titulo.textContent = "Verde";
            descripcion.textContent = "El color de la unidad y la naturaleza, sé uno con el entorno y forja vínculos con tus criaturas que las harán más fuertes, a mayor tu conexión, mayor el poder de tus aliados.";
            break;

        //Bicolores
        case 15:
            titulo.textContent = "Azorius";
            descripcion.textContent = "Nada mejor para mantener un control sobre la partida, la protección que te brinda el color blanco más el poder de control del azul es una de las combinaciones perfectas para asegurar tu manejo de la situación en la mayoría de escenarios.";
            break;
        case 21:
            titulo.textContent = "Orzhov";
            descripcion.textContent = "Blanco y negro, ambos opuestos, la protección y el dolor; la vida y la muerte. Usa Orzhov para protegerte a ti y a tus tropas mientras que drenas energía vital a tus oponentes.";
            break;
        case 33:
            titulo.textContent = "Boros";
            descripcion.textContent = "El potencial de generar y proteger a tus ejercitos, ejercitos destructores, rápidos y efectivos. Si tu objetivo es ganar rápido pero seguro, es el bicolor perfecto.";
            break;
        case 39:
            titulo.textContent = "Selesnya";
            descripcion.textContent = "Protégete a ti y a la naturaleza con Selesnya. Apoya tu poder de protector en la naturaleza para potenciar a tus criaturas y brindarles resistencia para que puedan protegerte. A mayor sea tu conexión con la naturaleza, mejor será la capacidad de protección que tendréis tanto tú como tus criaturas.";
            break;
        case 35:
            titulo.textContent = "Dimir";
            descripcion.textContent = "Controla todo lo que puedas controlar y elimina a aquellos que no te lo permitan. Dimir es la combinación que ansía el control a cualquier precio, mata a quién tengas que matar, derrota a quién tengas que derrotar, pero asegura siempre que mantienes el control de la partida.";
            break;
        case 55:
            titulo.textContent = "Izzet";
            descripcion.textContent = "Colores opuestos para una gran sinergia. ¿Deseas destruirlo todo pero no caer en el caos? Izzet es tu combinación. Destruye de manera estratégica a tus oponentes y lucha por mantener la situación bajo control.";
            break;
        case 65:
            titulo.textContent = "Simic";
            descripcion.textContent = "La naturaleza oculta de los mares no podía quedarse atrás. Controla el campo de batalla a través de criaturas marítimas como los tritones y gestiona tus recursos para mantener el control de la situación.";
            break;
        case 77:
            titulo.textContent = "Rakdos";
            descripcion.textContent = "El caos desatado, destroza todo lo que se te ponga por delante sin reparar en las consecuencias. No te debe importar nada, no hay ética, no hay principios morales, todo lo que importa es el hermoso paisaje de destrucción y muerte que contemplarás tras tu paso.";
            break;
        case 91:
            titulo.textContent = "Golgari";
            descripcion.textContent = "Todos los seres vivos cumplen estás normas: naces, vives, te reproduces, mueres. Controla la parte oscura de la naturaleza: insectos, ratas, hongos nocivos, no muertos, etc. No pueden matar a tus criaturas si tú las matas antes, beneficiate de la muerte de tus aliados para convertirte en un carroñero del poder.";
            break;
        case 143:
            titulo.textContent = "Gruul";
            descripcion.textContent = "Quémalo todo, desata tu ira a través de la naturaleza. Solo te debe de importar tu poder y tu conexión con la naturaleza, la conexión que tengan los demás debe de ser destruida y aquel que no deberá de ser destruido.";
            break;

        //Tricolores
        case 105:
            titulo.textContent = "Esper";
            descripcion.textContent = "El control de un dictador, mantén el control de todo y ve siempre tres pasos por delante; acaba con todos los que piensen de manera diferente a ti; y manipula a tus tropas para que estén dispuestas a morir por ti.";
            break;
        case 165:
            titulo.textContent = "Jeskai";
            descripcion.textContent = "Protegete, aguanta y planifica que van a hacer tus oponentes. Planea el momento perfecto para desatar el caos mientras que evitas que tus oponentes puedan resistir el golpe.";
            break;
        case 195:
            titulo.textContent = "Bant";
            descripcion.textContent = "¿Para que queremos ser uno con la naturaleza cuando podemos controlarla? Obtén y extrae poder de la naturaleza para sorprender a tus oponentes aumentando de forma exponencial el poder de tus criaturas.";
            break;
        case 231:
            titulo.textContent = "Mardu";
            descripcion.textContent = "Conviértete en el señor de la guerra más despiadado que pueda existir, haz que tu ejercito destruya civilizaciones y mate culturas completas mientras que tú luchas a su lado. Sume el mundo en un caos sin precedentes aunque parte de tu ejercito caiga en el proceso.";
            break;
        case 273:
            titulo.textContent = "Abzan";
            descripcion.textContent = "Por muy grande que sea tu conexión con la naturaleza, sabes que toda vida llega a su fin, así que en lugar de llorar por la muerte de tus criaturas, aprovechas su poder para impedir que su sacrificio sea en vano y sigan perteneciendo una unidad incluso tras su muerte.";
            break;
        case 429:
            titulo.textContent = "Naya";
            descripcion.textContent = "Tu conexión con la naturaleza y tu sentido de la unidad son firmes, pero caótica. Crea ejercitos de seres destructores como dinosaurios o agresivas tribus que adoran a la naturaleza, pero destruirán a aquellos que se topen en su camino.";
            break;
        case 385:
            titulo.textContent = "Grixis";
            descripcion.textContent = "Mantienes el control de las situaciones, pero serás incapaz de mantener el control de tu paciencia y destruirás de manera inmediata aquello que no te permita mantener el control. Destrúyelo todo y controla lo que quede";
            break;
        case 455:
            titulo.textContent = "Sultai";
            descripcion.textContent = "Aunque tienes conexión con la naturaleza, tu sentido de la unidad es nulo, solo te interesa el control y no te importa que tus criaturas sufran o mueran si puedes mantener el control.";
            break;
        case 715:
            titulo.textContent = "Temur";
            descripcion.textContent = "Aunque tienes gran capacidad de destrucción gracias a tu conexión con la naturaleza, tienes el conocimiento y la sabiduría suficiente para saber cuando será el momento perfecto para atacar. Gracias a tus conocimientos, puedes aprovecharte de la naturaleza para aumentar tu poder y tu conocimiento.";
            break;
        case 1001:
            titulo.textContent = "Jund";
            descripcion.textContent = "Muerte, caos y poder. Arrasarás todo a excepción de los tuyos, pero, seguramente mates a alguno de los tuyos por error, pero esto solo será un daño colateral ya que sabes que todo muere y no tendrás reparos en usar su muerte a tu favor.";
            break;
        
        //Cuatricolores
        case 1155:
            titulo.textContent = "Yore";
            descripcion.textContent = "Crea grandes ejércitos que lucharán sin miedo a la muerte ya que tienes el poder para revivirlos y que vuelvan a pelear, la muerte de tu ejercito para ti no es más que tramitar unas vacaciones para tus súbditos.";
            break;
        case 1365:
            titulo.textContent = "Witch";
            descripcion.textContent = "Tendrás ejercitos de seres mágicos los cuales se verán potenciados por cada hechizo que juegues, a cuanto más utilices tu poder, más poderosas serán tus criaturas ya que tienen la capacidad de absorber el poder residual.";
            break;
        case 5005:
            titulo.textContent = "Glint";
            descripcion.textContent = "Obtén poder y conocimiento a través del daño que puedes inflingir a tus oponentes, si esto no es suficiente, la naturaleza se encargará de darte lo que necesitas y brindar ayuda en momentos difíciles.";
            break;
        case 3003:
            titulo.textContent = "Dune";
            descripcion.textContent = "Tu poder nace de una parte dura y cruel de la naturaleza, los desiertos. Tendrás el mismo poder que tiene el desierto, serás cruel y destruirás con tu calor abrasador. No conoces lo que es estar hidratado, y harás que los demás lo sufran también.";
            break;
        case 2145:
            titulo.textContent = "Ink";
            descripcion.textContent = "Tienes gran poder destructivo y gran capacidad para crear ejercitos, pero mientras lo haces, puedes controlar tu poder y concentrarlo en la defensa. Si te lanzan un hechizo, puedes contrarrestarlo o destruirlo y si te atacan con criaturas no tendrás problemas en mandar a tus criaturas para destruirlas o destruirlas tú mismo.";
            break;
        
        //Pentacolor
        case 15015:
            titulo.textContent = "Pentacolor";
            descripcion.textContent = "La combinación de absolutamente todos los colores, todas las características de la magia reunidas en una sola combinación. Sin embargo, tanto poder no puede ser bien controlado por una sola persona ya que a cuantos más colores, más difícil de controlar será, por eso lo más común es controlar dos o tres colores.";
            break;
    }
    console.log(imprimir);
}

//La curva de maná
let cantidadCartas = 0;
let costeCartas = 0;

function anyadirCostes(){
    
    //Recuperamos el coste introducido por el usuario
    let coste = parseInt(document.getElementById("coste").value)
    //Recuperamos la cantidad introducida por el usuario
    let cantidad = parseInt(document.getElementById("cantidad").value)


    /*Primero comprobamos que los valores no sean nulos, blancos o negativos, 
    si lo son, no se guardarán datos */
    if(coste!=null && cantidad!=null
    && coste>=0 && cantidad>0){

        //Limpiamos los inputs
        document.getElementById("coste").value = "";
        document.getElementById("cantidad").value = "";

        //calculamos el coste total, la media de la curva y las tierras para el mazo
        cantidadCartas += cantidad;
        costeCartas += coste*cantidad;

        //Calculamos el coste medio con dos decimales
        let costeMedio=Number(costeCartas/cantidadCartas).toFixed(2);
        document.getElementById("resultado").textContent = "Coste medio: "+costeMedio;

        //Mostramos el total de cartas que lleva el usuario
        document.getElementById("totalST").textContent = "Cartas totales (Sin tierras): " +cantidadCartas;

        //Calculamos las tierras recomendadas sin tener en cuenta cartas que te permitan acelerar el mazo
        let tierras = Math.round((cantidadCartas*costeMedio)*0.33);
        document.getElementById("tierras").textContent = "Tierras recomendadas (sin robo de carta): "+tierras;

        //Mostramos el total de cartas
        document.getElementById("total").textContent = "Cartas totales: " +(cantidadCartas+tierras);
    }
}