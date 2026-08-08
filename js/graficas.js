/* =========================================================
   GRÁFICAS TRIGONOMÉTRICAS
========================================================= */

let funcionActual = "sin";


const nombresFunciones = {

    sin: "Seno",

    cos: "Coseno",

    tan: "Tangente",

    csc: "Cosecante",

    sec: "Secante",

    cot: "Cotangente"

};


const formulasFunciones = {

    sin: "sen(x)",

    cos: "cos(x)",

    tan: "tan(x)",

    csc: "csc(x) = 1/sen(x)",

    sec: "sec(x) = 1/cos(x)",

    cot: "cot(x) = 1/tan(x)"

};


/* =========================================================
   OBTENER CANVAS
========================================================= */

function obtenerCanvas() {

    return document.getElementById(
        "trigGraph"
    );

}


/* =========================================================
   DIBUJAR GRÁFICA
========================================================= */

function drawGraph() {

    const canvas =
        obtenerCanvas();


    if (!canvas) {

        return;

    }


    const container =
        canvas.parentElement;


    if (
        !container ||
        container.clientWidth === 0
    ) {

        return;

    }


    const width =
        Math.max(
            container.clientWidth,
            300
        );


    const height = 480;


    const dpr =
        window.devicePixelRatio || 1;


    canvas.width =
        width * dpr;


    canvas.height =
        height * dpr;


    canvas.style.width =
        `${width}px`;


    canvas.style.height =
        `${height}px`;


    const ctx =
        canvas.getContext(
            "2d"
        );


    ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
    );


    ctx.clearRect(
        0,
        0,
        width,
        height
    );


    const left = 60;

    const right = 25;

    const top = 25;

    const bottom = 50;


    const graphWidth =
        width -
        left -
        right;


    const graphHeight =
        height -
        top -
        bottom;


    const centerY =
        top +
        graphHeight / 2;


    /*
       Escala vertical.
       Para tangente y funciones recíprocas
       limitamos los valores muy grandes.
    */

    const scaleY =
        graphHeight / 6;


    /* =====================================================
       FONDO
    ===================================================== */

    ctx.fillStyle =
        getComputedStyle(
            document.body
        ).getPropertyValue(
            "--card"
        ) || "#ffffff";


    ctx.fillRect(
        0,
        0,
        width,
        height
    );


    /* =====================================================
       CUADRÍCULA
    ===================================================== */

    ctx.strokeStyle =
        "#e5e7eb";

    ctx.lineWidth = 1;


    for (
        let i = -6;
        i <= 6;
        i++
    ) {

        const y =
            centerY -
            i * scaleY;


        ctx.beginPath();

        ctx.moveTo(
            left,
            y
        );

        ctx.lineTo(
            width - right,
            y
        );

        ctx.stroke();

    }


    /*
       Líneas verticales cada π/2
    */

    for (
        let i = -4;
        i <= 4;
        i++
    ) {

        const x =
            left +
            (
                (i + 4) / 8
            ) *
            graphWidth;


        ctx.beginPath();

        ctx.moveTo(
            x,
            top
        );

        ctx.lineTo(
            x,
            height - bottom
        );

        ctx.stroke();

    }


    /* =====================================================
       EJES
    ===================================================== */

    ctx.strokeStyle =
        "#374151";

    ctx.lineWidth = 2;


    /* eje X */

    ctx.beginPath();

    ctx.moveTo(
        left,
        centerY
    );

    ctx.lineTo(
        width - right,
        centerY
    );

    ctx.stroke();


    /* eje Y */

    ctx.beginPath();

    ctx.moveTo(
        left +
        graphWidth / 2,
        top
    );

    ctx.lineTo(
        left +
        graphWidth / 2,
        height - bottom
    );

    ctx.stroke();


    /* =====================================================
       ETIQUETAS X
    ===================================================== */

    ctx.fillStyle =
        "#374151";

    ctx.font =
        "13px Arial";

    ctx.textAlign =
        "center";


    const etiquetas = [

        {
            posicion: 0,
            texto: "-2π"
        },

        {
            posicion: 1,
            texto: "-3π/2"
        },

        {
            posicion: 2,
            texto: "-π"
        },

        {
            posicion: 3,
            texto: "-π/2"
        },

        {
            posicion: 4,
            texto: "0"
        },

        {
            posicion: 5,
            texto: "π/2"
        },

        {
            posicion: 6,
            texto: "π"
        },

        {
            posicion: 7,
            texto: "3π/2"
        },

        {
            posicion: 8,
            texto: "2π"
        }

    ];


    etiquetas.forEach(
        etiqueta => {

            const x =
                left +
                (
                    etiqueta.posicion /
                    8
                ) *
                graphWidth;


            ctx.fillText(
                etiqueta.texto,
                x,
                height - 22
            );

        }
    );


    /* =====================================================
       FUNCIÓN MATEMÁTICA
    ===================================================== */

    function calcular(x) {

        switch (
            funcionActual
        ) {

            case "sin":

                return Math.sin(x);


            case "cos":

                return Math.cos(x);


            case "tan":

                return Math.tan(x);


            case "csc":

                return 1 /
                    Math.sin(x);


            case "sec":

                return 1 /
                    Math.cos(x);


            case "cot":

                return 1 /
                    Math.tan(x);


            default:

                return Math.sin(x);

        }

    }


    /* =====================================================
       GRÁFICA
    ===================================================== */

    ctx.strokeStyle =
        "#2563eb";

    ctx.lineWidth = 3;


    ctx.beginPath();


    let started =
        false;


    const samples =
        Math.max(
            800,
            width * 2
        );


    const minX =
        -2 * Math.PI;


    const maxX =
        2 * Math.PI;


    for (
        let i = 0;
        i <= samples;
        i++
    ) {

        const x =
            minX +
            (
                i /
                samples
            ) *
            (
                maxX -
                minX
            );


        let y =
            calcular(x);


        /*
           Evitamos dibujar
           valores infinitos.
        */

        if (
            !Number.isFinite(y) ||
            Math.abs(y) > 6
        ) {

            started = false;

            continue;

        }


        const canvasX =
            left +
            (
                (x - minX) /
                (maxX - minX)
            ) *
            graphWidth;


        const canvasY =
            centerY -
            y *
            scaleY;


        if (
            !started
        ) {

            ctx.beginPath();

            ctx.moveTo(
                canvasX,
                canvasY
            );

            started = true;

        } else {

            ctx.lineTo(
                canvasX,
                canvasY
            );

        }

    }


    ctx.stroke();


    /* =====================================================
       INFORMACIÓN
    ===================================================== */

    const info =
        document.getElementById(
            "functionInfo"
        );


    if (info) {

        info.innerHTML = `

            <div>

                <strong>
                    ${nombresFunciones[funcionActual]}
                </strong>

                <span>
                    ${formulasFunciones[funcionActual]}
                </span>

            </div>

        `;

    }

}


/* =========================================================
   BOTONES
========================================================= */

function configurarBotonesGraficas() {

    const botones =
        document.querySelectorAll(
            ".function-btn"
        );


    botones.forEach(
        boton => {

            boton.addEventListener(
                "click",
                () => {

                    botones.forEach(
                        b =>
                            b.classList.remove(
                                "active"
                            )
                    );


                    boton.classList.add(
                        "active"
                    );


                    funcionActual =
                        boton.dataset.function;


                    drawGraph();

                }
            );

        }
    );

}


/* =========================================================
   REDIBUJAR
========================================================= */

function redrawGraph() {

    setTimeout(
        () => {

            drawGraph();

        },
        30
    );

}


/* =========================================================
   EXPONER FUNCIÓN
========================================================= */

window.redrawGraph =
    redrawGraph;


/* =========================================================
   INICIALIZAR
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        configurarBotonesGraficas();

        /*
           La sección está inicialmente oculta,
           así que no dependemos de que tenga
           ancho visible en este momento.
        */

    }
);


/* =========================================================
   REDIBUJAR AL CAMBIAR TAMAÑO
========================================================= */

window.addEventListener(
    "resize",
    () => {

        const graficas =
            document.getElementById(
                "graficas"
            );


        if (
            graficas &&
            graficas.classList.contains(
                "active"
            )
        ) {

            drawGraph();

        }

    }
);