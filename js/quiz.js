/* =====================================================
   QUIZ DE FUNCIONES TRIGONOMÉTRICAS
   20 PREGUNTAS
===================================================== */


/* =====================================================
   BANCO DE PREGUNTAS
===================================================== */

const quizQuestions = [

    {
        question: "¿Cuál es el radio del círculo unitario?",

        options: [
            "0",
            "1",
            "2",
            "π"
        ],

        answer: 1,

        explanation:
            "El círculo unitario se define como un círculo cuyo radio es exactamente 1 unidad."
    },


    {
        question: "¿Cuántos grados tiene una vuelta completa?",

        options: [
            "90°",
            "180°",
            "270°",
            "360°"
        ],

        answer: 3,

        explanation:
            "Una vuelta completa alrededor del círculo corresponde a 360° o 2π radianes."
    },


    {
        question: "¿Cuántos radianes corresponden a 180°?",

        options: [
            "π/2",
            "π",
            "2π",
            "3π"
        ],

        answer: 1,

        explanation:
            "180° equivalen exactamente a π radianes."
    },


    {
        question: "¿Cuál es el valor de sen(0°)?",

        options: [
            "0",
            "1",
            "-1",
            "√2/2"
        ],

        answer: 0,

        explanation:
            "En el círculo unitario, el punto de 0° es (1, 0), por lo tanto sen(0°) = 0."
    },


    {
        question: "¿Cuál es el valor de cos(0°)?",

        options: [
            "0",
            "1",
            "-1",
            "√3/2"
        ],

        answer: 1,

        explanation:
            "En 0°, el punto del círculo unitario es (1, 0). La coordenada x representa el coseno, por lo que cos(0°) = 1."
    },


    {
        question: "¿Cuál es el valor de sen(90°)?",

        options: [
            "0",
            "1",
            "-1",
            "1/2"
        ],

        answer: 1,

        explanation:
            "En 90°, el punto del círculo unitario es (0, 1), por lo tanto sen(90°) = 1."
    },


    {
        question: "¿Cuál es el valor de cos(180°)?",

        options: [
            "0",
            "1",
            "-1",
            "√2/2"
        ],

        answer: 2,

        explanation:
            "En 180°, el punto del círculo unitario es (-1, 0). Por eso cos(180°) = -1."
    },


    {
        question: "¿Cuál es el valor de tan(45°)?",

        options: [
            "0",
            "1",
            "-1",
            "√3"
        ],

        answer: 1,

        explanation:
            "tan(45°) = sen(45°) / cos(45°) = 1."
    },


    {
        question: "¿Cuál es el valor de sen(30°)?",

        options: [
            "1/2",
            "√2/2",
            "√3/2",
            "1"
        ],

        answer: 0,

        explanation:
            "Uno de los valores notables es sen(30°) = 1/2."
    },


    {
        question: "¿Cuál es el valor de cos(60°)?",

        options: [
            "1",
            "√3/2",
            "1/2",
            "0"
        ],

        answer: 2,

        explanation:
            "Uno de los valores trigonométricos notables es cos(60°) = 1/2."
    },


    {
        question: "¿Cuál es el valor de cos(90°)?",

        options: [
            "0",
            "1",
            "-1",
            "1/2"
        ],

        answer: 0,

        explanation:
            "En 90°, el punto del círculo unitario es (0, 1), por lo tanto cos(90°) = 0."
    },


    {
        question: "¿En qué cuadrante el seno es positivo y el coseno negativo?",

        options: [
            "Primer cuadrante",
            "Segundo cuadrante",
            "Tercer cuadrante",
            "Cuarto cuadrante"
        ],

        answer: 1,

        explanation:
            "En el segundo cuadrante, x es negativa y y es positiva. Por eso coseno es negativo y seno positivo."
    },


    {
        question: "¿En qué cuadrante seno y coseno son negativos?",

        options: [
            "Primer cuadrante",
            "Segundo cuadrante",
            "Tercer cuadrante",
            "Cuarto cuadrante"
        ],

        answer: 2,

        explanation:
            "En el tercer cuadrante las coordenadas x e y son negativas, por lo que seno y coseno son negativos."
    },


    {
        question: "¿Cuál es la relación entre tangente, seno y coseno?",

        options: [
            "tan(θ) = cos(θ) / sen(θ)",
            "tan(θ) = sen(θ) / cos(θ)",
            "tan(θ) = sen(θ) · cos(θ)",
            "tan(θ) = 1 / cos(θ)"
        ],

        answer: 1,

        explanation:
            "La tangente se define como tan(θ) = sen(θ) / cos(θ), siempre que cos(θ) sea diferente de cero."
    },


    {
        question: "¿Cuál es la función recíproca del seno?",

        options: [
            "Secante",
            "Cotangente",
            "Cosecante",
            "Coseno"
        ],

        answer: 2,

        explanation:
            "La cosecante es la función recíproca del seno: csc(θ) = 1 / sen(θ)."
    },


    {
        question: "¿Cuál es la función recíproca del coseno?",

        options: [
            "Cosecante",
            "Secante",
            "Tangente",
            "Cotangente"
        ],

        answer: 1,

        explanation:
            "La secante es la función recíproca del coseno: sec(θ) = 1 / cos(θ)."
    },


    {
        question: "¿Cuál es la función recíproca de la tangente?",

        options: [
            "Secante",
            "Cosecante",
            "Cotangente",
            "Coseno"
        ],

        answer: 2,

        explanation:
            "La cotangente es la función recíproca de la tangente: cot(θ) = 1 / tan(θ)."
    },


    {
        question: "¿Para qué valores de θ la tangente no está definida?",

        options: [
            "Cuando sen(θ) = 0",
            "Cuando cos(θ) = 0",
            "Cuando tan(θ) = 1",
            "Cuando cos(θ) = 1"
        ],

        answer: 1,

        explanation:
            "Como tan(θ) = sen(θ) / cos(θ), la tangente no está definida cuando cos(θ) = 0, por ejemplo en 90° y 270°."
    },


    {
        question: "¿Cuál es el período de la función seno?",

        options: [
            "π/2",
            "π",
            "2π",
            "4π"
        ],

        answer: 2,

        explanation:
            "La función seno se repite cada 2π radianes, equivalentes a 360°."
    },


    {
        question: "¿Cuál es el rango de la función seno?",

        options: [
            "[-1, 1]",
            "[0, 1]",
            "(-∞, ∞)",
            "[-2, 2]"
        ],

        answer: 0,

        explanation:
            "El seno siempre toma valores entre -1 y 1 inclusive. Por eso su rango es [-1, 1]."
    }

];


/* =====================================================
   VARIABLES
===================================================== */

let currentQuizQuestion = 0;

let quizScore = 0;

let quizAnswered = false;


/* =====================================================
   INICIALIZAR QUIZ
===================================================== */

function initQuiz() {

    const container =
        document.getElementById("quizContainer");


    if (!container) {

        console.warn(
            "No se encontró #quizContainer"
        );

        return;

    }


    currentQuizQuestion = 0;

    quizScore = 0;

    quizAnswered = false;


    showQuizQuestion();

}


/* =====================================================
   MOSTRAR PREGUNTA
===================================================== */

function showQuizQuestion() {

    const container =
        document.getElementById("quizContainer");


    if (!container) return;


    const question =
        quizQuestions[currentQuizQuestion];


    quizAnswered = false;


    const percentage =
        Math.round(
            (currentQuizQuestion /
            quizQuestions.length) * 100
        );


    container.innerHTML = `

        <div class="quiz-card">

            <!-- CABECERA -->

            <div class="quiz-header">

                <div>

                    <span class="quiz-label">
                        📝 QUIZ
                    </span>

                    <h3>
                        Pregunta
                        ${currentQuizQuestion + 1}
                        de
                        ${quizQuestions.length}
                    </h3>

                </div>


                <div class="quiz-score">

                    Puntaje:
                    <strong>
                        ${quizScore}
                    </strong>

                </div>

            </div>


            <!-- PROGRESO -->

            <div class="quiz-progress-container">

                <div
                    class="quiz-progress-bar"
                    style="width: ${percentage}%"
                ></div>

            </div>


            <!-- PREGUNTA -->

            <div class="quiz-question">

                <h2>
                    ${question.question}
                </h2>

            </div>


            <!-- OPCIONES -->

            <div class="quiz-options">

                ${question.options.map(
                    (option, index) => `

                    <button
                        class="quiz-option"
                        data-answer="${index}"
                    >

                        <span class="quiz-option-letter">

                            ${String.fromCharCode(
                                65 + index
                            )}

                        </span>

                        <span>
                            ${option}
                        </span>

                    </button>

                `).join("")}

            </div>


            <!-- EXPLICACIÓN -->

            <div
                id="quizExplanation"
                class="quiz-explanation"
            ></div>


            <!-- ACCIONES -->

            <div class="quiz-actions">

                <button
                    id="nextQuiz"
                    class="primary-btn"
                    disabled
                >

                    Siguiente →

                </button>

            </div>

        </div>

    `;


    /* =================================================
       EVENTOS DE LAS OPCIONES
    ================================================= */

    const options =
        document.querySelectorAll(
            ".quiz-option"
        );


    options.forEach(option => {

        option.addEventListener(
            "click",
            () => {

                const selectedAnswer =
                    Number(
                        option.dataset.answer
                    );


                checkQuizAnswer(
                    selectedAnswer
                );

            }
        );

    });


    /* =================================================
       EVENTO BOTÓN SIGUIENTE
    ================================================= */

    const nextButton =
        document.getElementById(
            "nextQuiz"
        );


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            nextQuizQuestion
        );

    }

}


/* =====================================================
   COMPROBAR RESPUESTA
===================================================== */

function checkQuizAnswer(
    selectedAnswer
) {

    if (quizAnswered) return;


    quizAnswered = true;


    const question =
        quizQuestions[currentQuizQuestion];


    const options =
        document.querySelectorAll(
            ".quiz-option"
        );


    const explanation =
        document.getElementById(
            "quizExplanation"
        );


    const nextButton =
        document.getElementById(
            "nextQuiz"
        );


    /* =================================================
       DESACTIVAR OPCIONES
    ================================================= */

    options.forEach(option => {

        option.disabled = true;

    });


    /* =================================================
       MOSTRAR RESPUESTA CORRECTA
    ================================================= */

    options.forEach(
        (option, index) => {

            if (
                index === question.answer
            ) {

                option.classList.add(
                    "correct"
                );

            }

        }
    );


    /* =================================================
       MOSTRAR RESPUESTA INCORRECTA
    ================================================= */

    if (
        selectedAnswer !==
        question.answer
    ) {

        options[selectedAnswer]
            .classList.add(
                "incorrect"
            );

    }


    /* =================================================
       CALCULAR PUNTAJE
    ================================================= */

    const isCorrect =
        selectedAnswer ===
        question.answer;


    if (isCorrect) {

        quizScore++;

    }


    /* =================================================
       EXPLICACIÓN
    ================================================= */

    if (explanation) {

        if (isCorrect) {

            explanation.innerHTML = `

                <div class="quiz-feedback correct-feedback">

                    <div class="feedback-title">

                        ✅ ¡Respuesta correcta!

                    </div>

                    <p>

                        ${question.explanation}

                    </p>

                </div>

            `;

        } else {

            explanation.innerHTML = `

                <div class="quiz-feedback incorrect-feedback">

                    <div class="feedback-title">

                        ❌ Respuesta incorrecta

                    </div>

                    <p>

                        ${question.explanation}

                    </p>

                </div>

            `;

        }

    }


    /* =================================================
       ACTIVAR SIGUIENTE
    ================================================= */

    if (nextButton) {

        nextButton.disabled = false;


        if (
            currentQuizQuestion ===
            quizQuestions.length - 1
        ) {

            nextButton.textContent =
                "Ver resultado →";

        }

    }

}


/* =====================================================
   SIGUIENTE PREGUNTA
===================================================== */

function nextQuizQuestion() {

    if (!quizAnswered) return;


    currentQuizQuestion++;


    if (
        currentQuizQuestion >=
        quizQuestions.length
    ) {

        showQuizResult();

        return;

    }


    showQuizQuestion();

}


/* =====================================================
   RESULTADO FINAL
===================================================== */

function showQuizResult() {

    const container =
        document.getElementById(
            "quizContainer"
        );


    if (!container) return;


    const percentage =
        Math.round(
            (quizScore /
            quizQuestions.length) * 100
        );


    let title = "";

    let message = "";


    /* =================================================
       MENSAJE SEGÚN PUNTAJE
    ================================================= */

    if (percentage >= 90) {

        title =
            "🏆 ¡Excelente resultado!";

        message =
            "Demostraste un excelente dominio de los conceptos trigonométricos.";

    }

    else if (percentage >= 80) {

        title =
            "🎉 ¡Muy buen resultado!";

        message =
            "Tienes un muy buen manejo del círculo unitario y las funciones trigonométricas.";

    }

    else if (percentage >= 70) {

        title =
            "👏 ¡Buen trabajo!";

        message =
            "Tienes una buena base, pero todavía puedes reforzar algunos conceptos.";

    }

    else if (percentage >= 60) {

        title =
            "👍 Vas por buen camino";

        message =
            "Te recomendamos repasar la teoría y volver a intentarlo.";

    }

    else {

        title =
            "📚 Sigue practicando";

        message =
            "Repasa los temas de teoría y vuelve a realizar el quiz.";

    }


    container.innerHTML = `

        <div class="quiz-final-card">

            <div class="quiz-final-icon">

                ${percentage >= 60 ? "🎉" : "📚"}

            </div>


            <span class="quiz-label">

                📝 QUIZ COMPLETADO

            </span>


            <h2>

                ${title}

            </h2>


            <p class="quiz-final-message">

                ${message}

            </p>


            <!-- RESULTADO -->

            <div class="quiz-final-score">

                <div class="score-number">

                    ${quizScore}

                    <span>
                        / ${quizQuestions.length}
                    </span>

                </div>


                <div class="score-percentage">

                    ${percentage}%

                </div>

            </div>


            <div class="quiz-result-details">

                <div class="quiz-result-item">

                    <span class="result-icon">
                        ✅
                    </span>

                    <strong>
                        ${quizScore}
                    </strong>

                    <span>
                        Correctas
                    </span>

                </div>


                <div class="quiz-result-item">

                    <span class="result-icon">
                        ❌
                    </span>

                    <strong>
                        ${quizQuestions.length - quizScore}
                    </strong>

                    <span>
                        Incorrectas
                    </span>

                </div>

            </div>


            <!-- BOTÓN -->

            <button
                class="primary-btn"
                onclick="restartQuiz()"
            >

                🔄 Intentar nuevamente

            </button>

        </div>

    `;


    /* =================================================
       ACTUALIZAR PROGRESO GENERAL
    ================================================= */

    updateQuizProgress(
        percentage
    );

}


/* =====================================================
   REINICIAR QUIZ
===================================================== */

function restartQuiz() {

    currentQuizQuestion = 0;

    quizScore = 0;

    quizAnswered = false;


    showQuizQuestion();

}


/* =====================================================
   PROGRESO GENERAL
===================================================== */

function updateQuizProgress(
    percentage
) {

    const progressBar =
        document.getElementById(
            "progressBar"
        );


    const progressPercentage =
        document.getElementById(
            "progressPercentage"
        );


    /*
       El quiz representa una parte
       del progreso total.

       Aquí usamos 25% del progreso
       general.
    */

    const generalProgress =
        Math.round(
            percentage * 0.25
        );


    if (progressBar) {

        progressBar.style.width =
            `${generalProgress}%`;

    }


    if (progressPercentage) {

        progressPercentage.textContent =
            `${generalProgress}%`;

    }

}


/* =====================================================
   INICIALIZACIÓN
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initQuiz();

    }
);