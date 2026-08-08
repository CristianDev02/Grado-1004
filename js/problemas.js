/* =========================================================
   PROBLEMAS DE PRÁCTICA
========================================================= */

const problemasPractica = [

    {
        pregunta:
            "Calcula el valor de sen(30°).",

        tipo: "numero",

        respuesta: 0.5,

        tolerancia: 0.02,

        pista:
            "Es uno de los valores notables del círculo unitario.",

        explicacion:
            "sen(30°) = 1/2 = 0.5."
    },


    {
        pregunta:
            "Calcula el valor de cos(60°).",

        tipo: "numero",

        respuesta: 0.5,

        tolerancia: 0.02,

        pista:
            "Observa la coordenada X correspondiente a 60°.",

        explicacion:
            "cos(60°) = 1/2 = 0.5."
    },


    {
        pregunta:
            "Calcula el valor de tan(45°).",

        tipo: "numero",

        respuesta: 1,

        tolerancia: 0.02,

        pista:
            "Utiliza tan(θ) = sen(θ)/cos(θ).",

        explicacion:
            "sen(45°)=√2/2 y cos(45°)=√2/2. Por tanto, tan(45°)=1."
    },


    {
        pregunta:
            "¿Cuál es el valor de sen(180°)?",

        tipo: "numero",

        respuesta: 0,

        tolerancia: 0.02,

        pista:
            "Observa la coordenada Y del punto situado en 180°.",

        explicacion:
            "El punto de 180° es (-1,0), por lo que sen(180°)=0."
    },


    {
        pregunta:
            "¿Cuál es el valor de cos(270°)?",

        tipo: "numero",

        respuesta: 0,

        tolerancia: 0.02,

        pista:
            "El coseno representa la coordenada X.",

        explicacion:
            "El punto de 270° es (0,-1), por lo que cos(270°)=0."
    },


    {
        pregunta:
            "Convierte 180° a radianes.",

        tipo: "numero",

        respuesta: Math.PI,

        tolerancia: 0.02,

        pista:
            "Recuerda que 180° equivale a π.",

        explicacion:
            "180° = π radianes."
    },


    {
        pregunta:
            "Convierte 90° a radianes.",

        tipo: "numero",

        respuesta: Math.PI / 2,

        tolerancia: 0.02,

        pista:
            "90° es la mitad de 180°.",

        explicacion:
            "90° = π/2 radianes ≈ 1.5708."
    },


    {
        pregunta:
            "¿En qué cuadrante se encuentra 225°?",

        tipo: "opcion",

        opciones: [
            "I",
            "II",
            "III",
            "IV"
        ],

        respuesta: "III",

        pista:
            "225° está entre 180° y 270°.",

        explicacion:
            "225° pertenece al cuadrante III."
    },


    {
        pregunta:
            "Calcula aproximadamente tan(60°).",

        tipo: "numero",

        respuesta: Math.sqrt(3),

        tolerancia: 0.03,

        pista:
            "El resultado exacto es √3.",

        explicacion:
            "tan(60°)=√3≈1.732."
    },


    {
        pregunta:
            "El punto (0,-1) corresponde a ¿qué ángulo?",

        tipo: "opcion",

        opciones: [
            "0°",
            "90°",
            "180°",
            "270°"
        ],

        respuesta: "270°",

        pista:
            "Busca el punto inferior del círculo unitario.",

        explicacion:
            "El punto (0,-1) corresponde a 270°."
    }

];


let practicaActual = 0;

let respuestasPractica = [];


/* =========================================================
   MOSTRAR
========================================================= */

function mostrarPractica() {

    const contenedor =
        document.getElementById(
            "practiceQuestion"
        );


    if (!contenedor) {
        return;
    }


    const problema =
        problemasPractica[
            practicaActual
        ];


    document
        .getElementById(
            "practiceCounter"
        )
        .textContent =
        `Ejercicio ${
            practicaActual + 1
        } de 10`;


    document
        .getElementById(
            "practiceProgress"
        )
        .style.width =
        `${
            (
                practicaActual /
                10
            ) * 100
        }%`;


    document
        .getElementById(
            "practiceFeedback"
        )
        .innerHTML =
        "";


    document
        .getElementById(
            "practiceHint"
        )
        .classList.remove(
            "show"
        );


    document
        .getElementById(
            "checkPractice"
        )
        .style.display =
        "inline-block";


    document
        .getElementById(
            "nextPractice"
        )
        .style.display =
        "none";


    if (
        problema.tipo ===
        "numero"
    ) {

        contenedor.innerHTML = `

            <div class="practice-number">

                Ejercicio ${
                    practicaActual + 1
                }

            </div>


            <h2>
                ${problema.pregunta}
            </h2>


            <div class="practice-input-area">

                <label>
                    Tu respuesta:
                </label>


                <input
                    type="number"
                    id="practiceAnswer"
                    step="any"
                    placeholder="Escribe tu respuesta"
                >

            </div>

        `;

    } else {

        contenedor.innerHTML = `

            <div class="practice-number">

                Ejercicio ${
                    practicaActual + 1
                }

            </div>


            <h2>
                ${problema.pregunta}
            </h2>


            <div class="practice-options">

                ${problema.opciones
                    .map(
                        opcion => `

                            <button
                                class="practice-option"
                                data-answer="${opcion}"
                            >

                                ${opcion}

                            </button>

                        `
                    )
                    .join("")}

            </div>

        `;


        document
            .querySelectorAll(
                ".practice-option"
            )
            .forEach(
                boton => {

                    boton.addEventListener(
                        "click",
                        () => {

                            document
                                .querySelectorAll(
                                    ".practice-option"
                                )
                                .forEach(
                                    otro =>
                                        otro.classList.remove(
                                            "selected"
                                        )
                                );


                            boton.classList.add(
                                "selected"
                            );

                        }
                    );

                }
            );

    }

}


/* =========================================================
   PISTA
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            event.target.id !==
            "showHint"
        ) {

            return;

        }


        const problema =
            problemasPractica[
                practicaActual
            ];


        const pista =
            document.getElementById(
                "practiceHint"
            );


        pista.innerHTML = `

            💡 <strong>Pista:</strong>
            ${problema.pista}

        `;


        pista.classList.add(
            "show"
        );

    }
);


/* =========================================================
   OBTENER RESPUESTA
========================================================= */

function obtenerRespuestaPractica() {

    const problema =
        problemasPractica[
            practicaActual
        ];


    if (
        problema.tipo ===
        "numero"
    ) {

        const input =
            document.getElementById(
                "practiceAnswer"
            );


        if (
            !input ||
            input.value === ""
        ) {

            return null;

        }


        return Number(
            input.value
        );

    }


    const seleccion =
        document.querySelector(
            ".practice-option.selected"
        );


    if (!seleccion) {
        return null;
    }


    return seleccion.dataset.answer;

}


/* =========================================================
   COMPROBAR
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            event.target.id !==
            "checkPractice"
        ) {

            return;

        }


        const problema =
            problemasPractica[
                practicaActual
            ];


        const respuesta =
            obtenerRespuestaPractica();


        const feedback =
            document.getElementById(
                "practiceFeedback"
            );


        if (
            respuesta === null
        ) {

            feedback.innerHTML = `

                <div class="feedback-warning">

                    ⚠️ Debes introducir
                    o seleccionar una respuesta.

                </div>

            `;

            return;

        }


        let correcta;


        if (
            problema.tipo ===
            "numero"
        ) {

            correcta =
                Math.abs(
                    respuesta -
                    problema.respuesta
                ) <=
                problema.tolerancia;

        } else {

            correcta =
                respuesta ===
                problema.respuesta;

        }


        respuestasPractica[
            practicaActual
        ] =
        correcta;


        if (correcta) {

            feedback.innerHTML = `

                <div class="practice-correct">

                    <h3>
                        ✅ ¡Correcto!
                    </h3>

                    <p>
                        ${problema.explicacion}
                    </p>

                </div>

            `;

        } else {

            feedback.innerHTML = `

                <div class="practice-incorrect">

                    <h3>
                        ❌ Incorrecto
                    </h3>

                    <p>
                        ${problema.explicacion}
                    </p>

                </div>

            `;

        }


        document
            .getElementById(
                "checkPractice"
            )
            .style.display =
            "none";


        const siguiente =
            document.getElementById(
                "nextPractice"
            );


        siguiente.style.display =
            "inline-block";


        siguiente.textContent =
            practicaActual === 9
                ? "Ver resultado"
                : "Siguiente →";

    }
);


/* =========================================================
   SIGUIENTE
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            event.target.id !==
            "nextPractice"
        ) {

            return;

        }


        if (
            practicaActual <
            9
        ) {

            practicaActual++;

            mostrarPractica();

        } else {

            mostrarResultadoPractica();

        }

    }
);


/* =========================================================
   RESULTADO
========================================================= */

function mostrarResultadoPractica() {

    const correctas =
        respuestasPractica.filter(
            r => r === true
        ).length;


    const porcentaje =
        Math.round(
            (
                correctas /
                10
            ) * 100
        );


    document
        .getElementById(
            "practiceQuestion"
        )
        .style.display =
        "none";


    document
        .getElementById(
            "practiceFeedback"
        )
        .innerHTML =
        "";


    document
        .getElementById(
            "practiceHint"
        )
        .style.display =
        "none";


    document
        .getElementById(
            "checkPractice"
        )
        .style.display =
        "none";


    document
        .getElementById(
            "nextPractice"
        )
        .style.display =
        "none";


    const resultado =
        document.getElementById(
            "practiceResult"
        );


    resultado.classList.add(
        "show"
    );


    resultado.innerHTML = `

        <div class="result-icon">
            ${
                porcentaje >= 80
                    ? "🏆"
                    : "📚"
            }
        </div>


        <h2>
            Práctica terminada
        </h2>


        <div class="result-score">

            ${correctas}

            <span>
                / 10
            </span>

        </div>


        <div class="result-percentage">

            ${porcentaje}%

        </div>


        <p>

            ${
                porcentaje >= 80
                    ? "🌟 ¡Excelente trabajo!"
                    : "📚 Sigue practicando para mejorar."
            }

        </p>


        <button
            class="btn primary"
            onclick="reiniciarPractica()"
        >

            🔄 Intentar nuevamente

        </button>

    `;

}


/* =========================================================
   REINICIAR
========================================================= */

function reiniciarPractica() {

    practicaActual =
        0;


    respuestasPractica =
        [];


    document
        .getElementById(
            "practiceQuestion"
        )
        .style.display =
        "block";


    document
        .getElementById(
            "practiceResult"
        )
        .classList.remove(
            "show"
        );


    document
        .getElementById(
            "practiceHint"
        )
        .style.display =
        "";


    mostrarPractica();

}


/* =========================================================
   INICIAR
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        mostrarPractica();

    }
);