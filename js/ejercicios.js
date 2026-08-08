/* =========================================================
   PROBLEMAS TEÓRICOS
========================================================= */

const problemasTeoricos = [

    {
        pregunta:
            "¿Cuál es la ecuación del círculo unitario?",

        opciones: [
            "x² + y² = 1",
            "x² + y² = 2",
            "x + y = 1",
            "x² - y² = 1"
        ],

        correcta: 0,

        explicacion:
            "El círculo unitario tiene centro en (0,0) y radio 1. Por eso su ecuación es x² + y² = 1."
    },


    {
        pregunta:
            "¿Cuál es el radio del círculo unitario?",

        opciones: [
            "0",
            "1",
            "π",
            "2"
        ],

        correcta: 1,

        explicacion:
            "Por definición, el círculo unitario tiene radio igual a 1."
    },


    {
        pregunta:
            "¿Cuántos grados tiene una vuelta completa?",

        opciones: [
            "90°",
            "180°",
            "270°",
            "360°"
        ],

        correcta: 3,

        explicacion:
            "Una vuelta completa alrededor del círculo equivale a 360°."
    },


    {
        pregunta:
            "¿Cuántos radianes equivalen a una vuelta completa?",

        opciones: [
            "π/2",
            "π",
            "2π",
            "4π"
        ],

        correcta: 2,

        explicacion:
            "Una vuelta completa equivale a 2π radianes."
    },


    {
        pregunta:
            "¿Qué coordenada representa el coseno en el círculo unitario?",

        opciones: [
            "Coordenada X",
            "Coordenada Y",
            "El radio",
            "El centro"
        ],

        correcta: 0,

        explicacion:
            "El coseno representa la coordenada X del punto sobre el círculo unitario."
    },


    {
        pregunta:
            "¿Qué coordenada representa el seno?",

        opciones: [
            "Coordenada X",
            "Coordenada Y",
            "El radio",
            "El ángulo"
        ],

        correcta: 1,

        explicacion:
            "El seno representa la coordenada Y del punto sobre el círculo unitario."
    },


    {
        pregunta:
            "¿En qué cuadrante se encuentra 120°?",

        opciones: [
            "I",
            "II",
            "III",
            "IV"
        ],

        correcta: 1,

        explicacion:
            "120° está entre 90° y 180°, por lo que pertenece al cuadrante II."
    },


    {
        pregunta:
            "¿Cuál es la relación correcta para la tangente?",

        opciones: [
            "tan(θ) = cos(θ) / sen(θ)",
            "tan(θ) = sen(θ) / cos(θ)",
            "tan(θ) = sen(θ) + cos(θ)",
            "tan(θ) = sen(θ) × cos(θ)"
        ],

        correcta: 1,

        explicacion:
            "La tangente se obtiene dividiendo el seno entre el coseno."
    },


    {
        pregunta:
            "¿Cuál es el período de la función seno?",

        opciones: [
            "π/2",
            "π",
            "2π",
            "4π"
        ],

        correcta: 2,

        explicacion:
            "La función seno se repite cada 2π radianes."
    },


    {
        pregunta:
            "¿Por qué tan(90°) no está definida?",

        opciones: [
            "Porque sen(90°) = 0",
            "Porque cos(90°) = 0",
            "Porque el radio es 0",
            "Porque 90° no existe"
        ],

        correcta: 1,

        explicacion:
            "La tangente es sen(θ)/cos(θ). Como cos(90°)=0, se produciría una división entre cero."
    }

];


let preguntaTeoricaActual = 0;

let respuestasTeoricas = [];

let preguntaRespondida = false;


/* =========================================================
   MOSTRAR PREGUNTA
========================================================= */

function mostrarPreguntaTeorica() {

    const contenedor =
        document.getElementById(
            "theoryQuestion"
        );


    if (!contenedor) {
        return;
    }


    const pregunta =
        problemasTeoricos[
            preguntaTeoricaActual
        ];


    const contador =
        document.getElementById(
            "theoryCounter"
        );


    const progreso =
        document.getElementById(
            "theoryProgress"
        );


    const siguiente =
        document.getElementById(
            "nextTheory"
        );


    preguntaRespondida =
        false;


    contador.textContent =
        `Pregunta ${
            preguntaTeoricaActual + 1
        } de 10`;


    progreso.style.width =
        `${
            (
                preguntaTeoricaActual /
                10
            ) * 100
        }%`;


    siguiente.disabled =
        true;


    siguiente.style.display =
        "inline-block";


    contenedor.innerHTML = `

        <div class="question-number">

            Pregunta ${
                preguntaTeoricaActual + 1
            }

        </div>


        <h2 class="question-title">

            ${pregunta.pregunta}

        </h2>


        <div class="theory-options">

            ${pregunta.opciones
                .map(
                    (
                        opcion,
                        indice
                    ) => `

                        <button
                            class="theory-option"
                            data-option="${indice}"
                        >

                            <span
                                class="option-letter"
                            >
                                ${
                                    String.fromCharCode(
                                        65 + indice
                                    )
                                }
                            </span>

                            <span>
                                ${opcion}
                            </span>

                        </button>

                    `
                )
                .join("")}

        </div>


        <div
            id="theoryFeedback"
            class="theory-feedback"
        ></div>

    `;


    document
        .querySelectorAll(
            ".theory-option"
        )
        .forEach(
            boton => {

                boton.addEventListener(
                    "click",
                    () => {

                        seleccionarRespuestaTeorica(
                            Number(
                                boton.dataset.option
                            )
                        );

                    }
                );

            }
        );

}


/* =========================================================
   RESPONDER
========================================================= */

function seleccionarRespuestaTeorica(
    indice
) {

    if (preguntaRespondida) {
        return;
    }


    preguntaRespondida =
        true;


    const pregunta =
        problemasTeoricos[
            preguntaTeoricaActual
        ];


    const correcta =
        indice ===
        pregunta.correcta;


    respuestasTeoricas[
        preguntaTeoricaActual
    ] =
        correcta;


    const botones =
        document.querySelectorAll(
            ".theory-option"
        );


    botones.forEach(
        boton => {

            boton.disabled =
                true;

        }
    );


    botones.forEach(
        (
            boton,
            index
        ) => {

            if (
                index ===
                pregunta.correcta
            ) {

                boton.classList.add(
                    "correct"
                );

            }


            if (
                index === indice &&
                index !== pregunta.correcta
            ) {

                boton.classList.add(
                    "incorrect"
                );

            }

        }
    );


    const feedback =
        document.getElementById(
            "theoryFeedback"
        );


    if (correcta) {

        feedback.className =
            "theory-feedback correct-feedback";


        feedback.innerHTML = `

            <strong>
                ✅ ¡Correcto!
            </strong>

            <p>
                ${pregunta.explicacion}
            </p>

        `;

    } else {

        feedback.className =
            "theory-feedback incorrect-feedback";


        feedback.innerHTML = `

            <strong>
                ❌ Incorrecto
            </strong>

            <p>
                ${pregunta.explicacion}
            </p>

        `;

    }


    document
        .getElementById(
            "nextTheory"
        )
        .disabled =
        false;

}


/* =========================================================
   SIGUIENTE
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            event.target.id !==
            "nextTheory"
        ) {

            return;

        }


        if (!preguntaRespondida) {
            return;
        }


        if (
            preguntaTeoricaActual <
            problemasTeoricos.length - 1
        ) {

            preguntaTeoricaActual++;

            mostrarPreguntaTeorica();

        } else {

            mostrarResultadoTeorico();

        }

    }
);


/* =========================================================
   RESULTADO
========================================================= */

function mostrarResultadoTeorico() {

    const correctas =
        respuestasTeoricas.filter(
            respuesta =>
                respuesta === true
        ).length;


    const porcentaje =
        Math.round(
            (
                correctas /
                10
            ) * 100
        );


    const contenedor =
        document.getElementById(
            "theoryQuestion"
        );


    const resultado =
        document.getElementById(
            "theoryResult"
        );


    const siguiente =
        document.getElementById(
            "nextTheory"
        );


    const progreso =
        document.getElementById(
            "theoryProgress"
        );


    contenedor.style.display =
        "none";


    siguiente.style.display =
        "none";


    progreso.style.width =
        "100%";


    resultado.classList.add(
        "show"
    );


    resultado.innerHTML = `

        <div class="result-icon">
            🏆
        </div>


        <h2>
            ¡Problemas teóricos terminados!
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
                    : "📚 Sigue estudiando y vuelve a intentarlo."
            }

        </p>


        <button
            class="btn primary"
            onclick="reiniciarProblemasTeoricos()"
        >

            🔄 Intentar nuevamente

        </button>

    `;

}


/* =========================================================
   REINICIAR
========================================================= */

function reiniciarProblemasTeoricos() {

    preguntaTeoricaActual =
        0;


    respuestasTeoricas =
        [];


    const contenedor =
        document.getElementById(
            "theoryQuestion"
        );


    const resultado =
        document.getElementById(
            "theoryResult"
        );


    contenedor.style.display =
        "block";


    resultado.classList.remove(
        "show"
    );


    mostrarPreguntaTeorica();

}


/* =========================================================
   INICIAR
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        mostrarPreguntaTeorica();

    }
);