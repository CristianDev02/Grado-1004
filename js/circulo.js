/* =========================================================
   CÍRCULO UNITARIO INTERACTIVO
========================================================= */

const canvasCirculo = document.getElementById("unitCircle");
const sliderAngulo = document.getElementById("angleSlider");
const valorAngulo = document.getElementById("angleValue");
const valoresCirculo = document.getElementById("circleValues");

let anguloActual = 45;


/* =========================================================
   CONFIGURACIÓN DEL CANVAS
========================================================= */

function configurarCanvas() {

    if (!canvasCirculo) {
        return;
    }

    const rect =
        canvasCirculo.getBoundingClientRect();

    const dpr =
        window.devicePixelRatio || 1;

    canvasCirculo.width =
        rect.width * dpr;

    canvasCirculo.height =
        rect.height * dpr;

    const ctx =
        canvasCirculo.getContext("2d");

    ctx.scale(dpr, dpr);

}


/* =========================================================
   CONVERTIR GRADOS A RADIANES
========================================================= */

function gradosARadianes(grados) {

    return grados * Math.PI / 180;

}


/* =========================================================
   FORMATEAR NÚMEROS
========================================================= */

function formatearNumero(numero) {

    if (
        Math.abs(numero) < 0.00001
    ) {

        return "0";

    }

    return numero
        .toFixed(4)
        .replace("-0.0000", "0");

}


/* =========================================================
   OBTENER NOMBRE DEL CUADRANTE
========================================================= */

function obtenerCuadrante(grados) {

    if (
        grados > 0 &&
        grados < 90
    ) {

        return "I";

    }

    if (
        grados > 90 &&
        grados < 180
    ) {

        return "II";

    }

    if (
        grados > 180 &&
        grados < 270
    ) {

        return "III";

    }

    if (
        grados > 270 &&
        grados < 360
    ) {

        return "IV";

    }

    if (
        grados === 0 ||
        grados === 360
    ) {

        return "Eje X positivo";

    }

    if (
        grados === 90
    ) {

        return "Eje Y positivo";

    }

    if (
        grados === 180
    ) {

        return "Eje X negativo";

    }

    if (
        grados === 270
    ) {

        return "Eje Y negativo";

    }

    return "—";

}


/* =========================================================
   NOMBRE DEL ÁNGULO NOTABLE
========================================================= */

function obtenerNombreAngulo(grados) {

    const angulos = {

        0: "0°",

        30: "30°",

        45: "45°",

        60: "60°",

        90: "90°",

        120: "120°",

        135: "135°",

        150: "150°",

        180: "180°",

        210: "210°",

        225: "225°",

        240: "240°",

        270: "270°",

        300: "300°",

        315: "315°",

        330: "330°",

        360: "360°"

    };

    return angulos[grados] || "Ángulo general";

}


/* =========================================================
   DIBUJAR CÍRCULO
========================================================= */

function dibujarCirculo() {

    if (!canvasCirculo) {
        return;
    }


    const rect =
        canvasCirculo.getBoundingClientRect();


    const width =
        rect.width;

    const height =
        rect.height;


    const ctx =
        canvasCirculo.getContext("2d");


    ctx.clearRect(
        0,
        0,
        width,
        height
    );


    /* Centro */

    const centroX =
        width / 2;

    const centroY =
        height / 2;


    /* Radio */

    const radio =
        Math.min(
            width,
            height
        ) * 0.35;


    /* =====================================================
       COLORES
    ====================================================== */

    const darkMode =
        document.body.classList.contains(
            "dark"
        );


    const colorTexto =
        darkMode
            ? "#e2e8f0"
            : "#334155";


    const colorGrid =
        darkMode
            ? "#334155"
            : "#cbd5e1";


    const colorPrincipal =
        "#2563eb";


    const colorPunto =
        "#dc2626";


    /* =====================================================
       CUADRÍCULA
    ====================================================== */

    ctx.lineWidth = 1;

    ctx.strokeStyle =
        colorGrid;


    for (
        let i = -2;
        i <= 2;
        i++
    ) {

        const posicion =
            i * radio / 2;


        /* Vertical */

        ctx.beginPath();

        ctx.moveTo(
            centroX + posicion,
            centroY - radio - 20
        );

        ctx.lineTo(
            centroX + posicion,
            centroY + radio + 20
        );

        ctx.stroke();


        /* Horizontal */

        ctx.beginPath();

        ctx.moveTo(
            centroX - radio - 20,
            centroY + posicion
        );

        ctx.lineTo(
            centroX + radio + 20,
            centroY + posicion
        );

        ctx.stroke();

    }


    /* =====================================================
       EJES
    ====================================================== */

    ctx.lineWidth = 2;

    ctx.strokeStyle =
        colorTexto;


    /* Eje X */

    ctx.beginPath();

    ctx.moveTo(
        centroX - radio - 30,
        centroY
    );

    ctx.lineTo(
        centroX + radio + 30,
        centroY
    );

    ctx.stroke();


    /* Eje Y */

    ctx.beginPath();

    ctx.moveTo(
        centroX,
        centroY - radio - 30
    );

    ctx.lineTo(
        centroX,
        centroY + radio + 30
    );

    ctx.stroke();


    /* =====================================================
       FLECHAS DE LOS EJES
    ====================================================== */

    dibujarFlecha(
        ctx,
        centroX + radio + 30,
        centroY,
        "derecha",
        colorTexto
    );


    dibujarFlecha(
        ctx,
        centroX,
        centroY - radio - 30,
        "arriba",
        colorTexto
    );


    /* =====================================================
       CÍRCULO
    ====================================================== */

    ctx.beginPath();

    ctx.arc(
        centroX,
        centroY,
        radio,
        0,
        Math.PI * 2
    );

    ctx.lineWidth = 3;

    ctx.strokeStyle =
        colorPrincipal;

    ctx.stroke();


    /* =====================================================
       ÁNGULO
    ====================================================== */

    const radianes =
        gradosARadianes(
            anguloActual
        );


    const puntoX =
        centroX +
        radio *
        Math.cos(radianes);


    const puntoY =
        centroY -
        radio *
        Math.sin(radianes);


    /* =====================================================
       ARCO DEL ÁNGULO
    ====================================================== */

    ctx.beginPath();

    ctx.arc(
        centroX,
        centroY,
        50,
        0,
        -radianes,
        true
    );

    ctx.lineWidth = 3;

    ctx.strokeStyle =
        "#7c3aed";

    ctx.stroke();


    /* =====================================================
       LÍNEA DEL RADIO
    ====================================================== */

    ctx.beginPath();

    ctx.moveTo(
        centroX,
        centroY
    );

    ctx.lineTo(
        puntoX,
        puntoY
    );

    ctx.lineWidth = 3;

    ctx.strokeStyle =
        colorPunto;

    ctx.stroke();


    /* =====================================================
       PROYECCIÓN EN X
    ====================================================== */

    ctx.beginPath();

    ctx.moveTo(
        puntoX,
        puntoY
    );

    ctx.lineTo(
        puntoX,
        centroY
    );

    ctx.setLineDash([6, 6]);

    ctx.lineWidth = 2;

    ctx.strokeStyle =
        "#16a34a";

    ctx.stroke();

    ctx.setLineDash([]);


    /* =====================================================
       PROYECCIÓN EN Y
    ====================================================== */

    ctx.beginPath();

    ctx.moveTo(
        puntoX,
        puntoY
    );

    ctx.lineTo(
        centroX,
        puntoY
    );

    ctx.setLineDash([6, 6]);

    ctx.strokeStyle =
        "#f59e0b";

    ctx.stroke();

    ctx.setLineDash([]);


    /* =====================================================
       PUNTO
    ====================================================== */

    ctx.beginPath();

    ctx.arc(
        puntoX,
        puntoY,
        7,
        0,
        Math.PI * 2
    );

    ctx.fillStyle =
        colorPunto;

    ctx.fill();


    /* =====================================================
       CENTRO
    ====================================================== */

    ctx.beginPath();

    ctx.arc(
        centroX,
        centroY,
        5,
        0,
        Math.PI * 2
    );

    ctx.fillStyle =
        colorTexto;

    ctx.fill();


    /* =====================================================
       ETIQUETAS
    ====================================================== */

    ctx.font =
        "bold 14px Arial";

    ctx.fillStyle =
        colorTexto;


    ctx.fillText(
        "X",
        centroX + radio + 35,
        centroY - 8
    );


    ctx.fillText(
        "Y",
        centroX + 8,
        centroY - radio - 35
    );


    /* =====================================================
       VALORES DEL CÍRCULO
    ====================================================== */

    ctx.font =
        "13px Arial";


    ctx.fillText(
        "1",
        centroX + radio - 5,
        centroY - 8
    );


    ctx.fillText(
        "-1",
        centroX - radio - 15,
        centroY - 8
    );


    ctx.fillText(
        "1",
        centroX + 8,
        centroY - radio + 5
    );


    ctx.fillText(
        "-1",
        centroX + 8,
        centroY + radio
    );


    /* =====================================================
       ETIQUETA DEL PUNTO
    ====================================================== */

    ctx.font =
        "bold 14px Arial";

    ctx.fillStyle =
        colorPunto;


    const textoPunto =
        `(${formatearNumero(
            Math.cos(radianes)
        )}, ${formatearNumero(
            Math.sin(radianes)
        )})`;


    ctx.fillText(
        textoPunto,
        puntoX + 10,
        puntoY - 10
    );


    /* =====================================================
       ETIQUETA DEL ÁNGULO
    ====================================================== */

    ctx.fillStyle =
        "#7c3aed";


    ctx.fillText(
        `${anguloActual}°`,
        centroX + 55,
        centroY - 15
    );

}


/* =========================================================
   FLECHAS
========================================================= */

function dibujarFlecha(
    ctx,
    x,
    y,
    direccion,
    color
) {

    ctx.fillStyle =
        color;


    ctx.beginPath();


    if (
        direccion === "derecha"
    ) {

        ctx.moveTo(
            x,
            y
        );

        ctx.lineTo(
            x - 10,
            y - 6
        );

        ctx.lineTo(
            x - 10,
            y + 6
        );

    } else {

        ctx.moveTo(
            x,
            y
        );

        ctx.lineTo(
            x - 6,
            y + 10
        );

        ctx.lineTo(
            x + 6,
            y + 10
        );

    }


    ctx.closePath();

    ctx.fill();

}


/* =========================================================
   ACTUALIZAR INFORMACIÓN
========================================================= */

function actualizarInformacionCirculo() {

    if (!sliderAngulo) {
        return;
    }


    const grados =
        Number(
            sliderAngulo.value
        );


    anguloActual =
        grados;


    const radianes =
        gradosARadianes(
            grados
        );


    const seno =
        Math.sin(
            radianes
        );


    const coseno =
        Math.cos(
            radianes
        );


    let tangente;


    if (
        Math.abs(coseno) < 0.000001
    ) {

        tangente =
            "No definida";

    } else {

        tangente =
            formatearNumero(
                seno / coseno
            );

    }


    valorAngulo.textContent =
        `${grados}°`;


    valoresCirculo.innerHTML = `

        <div class="value-row">

            <span>
                📐 Ángulo
            </span>

            <span>
                ${grados}°
            </span>

        </div>


        <div class="value-row">

            <span>
                🔄 Radianes
            </span>

            <span>
                ${formatearNumero(radianes)}
            </span>

        </div>


        <div class="value-row">

            <span>
                🧭 Cuadrante
            </span>

            <span>
                ${obtenerCuadrante(grados)}
            </span>

        </div>


        <div class="value-row">

            <span>
                ⭐ Tipo de ángulo
            </span>

            <span>
                ${obtenerNombreAngulo(grados)}
            </span>

        </div>


        <div class="value-row">

            <span>
                X = cos(θ)
            </span>

            <span>
                ${formatearNumero(coseno)}
            </span>

        </div>


        <div class="value-row">

            <span>
                Y = sen(θ)
            </span>

            <span>
                ${formatearNumero(seno)}
            </span>

        </div>


        <div class="value-row">

            <span>
                tan(θ)
            </span>

            <span>
                ${tangente}
            </span>

        </div>

    `;


    dibujarCirculo();

}


/* =========================================================
   FUNCIÓN PRINCIPAL
========================================================= */

function actualizarCirculo() {

    configurarCanvas();

    actualizarInformacionCirculo();

}


/* =========================================================
   SLIDER
========================================================= */

if (sliderAngulo) {

    sliderAngulo.addEventListener(
        "input",
        actualizarInformacionCirculo
    );

}


/* =========================================================
   CAMBIO DE TAMAÑO
========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            document
                .getElementById("circulo")
                ?.classList
                .contains("active")
        ) {

            configurarCanvas();

            dibujarCirculo();

        }

    }
);


/* =========================================================
   INICIALIZACIÓN
========================================================= */

if (canvasCirculo) {

    setTimeout(
        () => {

            configurarCanvas();

            actualizarInformacionCirculo();

        },
        100
    );

}

/* =========================================================
   EXPONER FUNCIÓN
========================================================= */
window.redrawCirculo = function() {
    configurarCanvas();
    actualizarInformacionCirculo();
};