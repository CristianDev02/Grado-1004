/* =========================================================
   ESTADO DE LA APLICACIÓN
========================================================= */

let progreso = 0;

let seccionActual = "inicio";


/* =========================================================
   ELEMENTOS
========================================================= */

const secciones =
    document.querySelectorAll(".section");

const botonesNavegacion =
    document.querySelectorAll(".nav-btn");

const tituloPagina =
    document.getElementById("pageTitle");

const sidebar =
    document.getElementById("sidebar");


/* =========================================================
   NAVEGACIÓN
========================================================= */

botonesNavegacion.forEach(
    boton => {

        boton.addEventListener(
            "click",
            () => {

                const seccion =
                    boton.dataset.section;

                showSection(seccion);

            }
        );

    }
);


/* =========================================================
   CAMBIAR SECCIÓN
========================================================= */

function showSection(nombre) {

    seccionActual =
        nombre;


    /* Ocultar todas */

    secciones.forEach(
        seccion => {

            seccion.classList.remove(
                "active"
            );

        }
    );


    /* Quitar active del menú */

    botonesNavegacion.forEach(
        boton => {

            boton.classList.remove(
                "active"
            );

        }
    );


    /* Mostrar sección */

    const seccion =
        document.getElementById(
            nombre
        );


    if (seccion) {

        seccion.classList.add(
            "active"
        );

    }


    /* Activar botón */

    const boton =
        document.querySelector(
            `.nav-btn[data-section="${nombre}"]`
        );


    if (boton) {

        boton.classList.add(
            "active"
        );

        tituloPagina.textContent =
            boton.querySelector("span")
                ?.textContent
                .trim()
            || "Inicio";

    }


    /* Cerrar menú móvil */

    if (
        window.innerWidth <= 800
    ) {

        sidebar.classList.remove(
            "open"
        );

    }


    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    );


    /* Actualizaciones */

    if (
        nombre === "circulo" &&
        typeof actualizarCirculo === "function"
    ) {

        actualizarCirculo();

    }


    if (
    nombre === "graficas"
) {

    setTimeout(
        () => {

            if (
                typeof configurarCanvasGrafica === "function"
            ) {

                configurarCanvasGrafica();

            }


            if (
                typeof dibujarGrafica === "function"
            ) {

                dibujarGrafica();

            }


            if (
                typeof actualizarInformacionGrafica === "function"
            ) {

                actualizarInformacionGrafica();

            }

        },
        100
    );

}

}


/* =========================================================
   MENÚ MÓVIL
========================================================= */

document
    .getElementById("mobileMenu")
    .addEventListener(
        "click",
        () => {

            sidebar.classList.toggle(
                "open"
            );

        }
    );


/* =========================================================
   TEMA
========================================================= */

const themeButton =
    document.getElementById(
        "themeButton"
    );


themeButton.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );


        const modoOscuro =
            document.body.classList.contains(
                "dark"
            );


        themeButton.textContent =
            modoOscuro
                ? "☀️"
                : "🌙";


        if (
            typeof actualizarCirculo === "function"
        ) {

            actualizarCirculo();

        }


        if (
            typeof dibujarGrafica === "function"
        ) {

            dibujarGrafica();

        }

    }
);


/* =========================================================
   PROGRESO
========================================================= */

function actualizarProgreso(valor) {

    progreso =
        Math.max(
            0,
            Math.min(
                100,
                valor
            )
        );


    const barra =
        document.getElementById(
            "progressBar"
        );


    const porcentaje =
        document.getElementById(
            "progressPercentage"
        );


    const progresoGrande =
        document.getElementById(
            "bigProgress"
        );


    if (barra) {

        barra.style.width =
            progreso + "%";

    }


    if (porcentaje) {

        porcentaje.textContent =
            progreso + "%";

    }


    if (progresoGrande) {

        progresoGrande.textContent =
            progreso + "%";

    }


    const circulo =
        document.getElementById(
            "bigProgressCircle"
        );


    if (circulo) {

        circulo.style.background =
            `conic-gradient(
                var(--primary)
                ${progreso * 3.6}deg,
                var(--border)
                ${progreso * 3.6}deg
            )`;

    }

}


/* =========================================================
   INICIO
========================================================= */

actualizarProgreso(0);


/* =========================================================
   MÓDULO DE TEORÍA
========================================================= */

const temasTeoria = [

    {
        titulo: "¿Qué es la trigonometría?",
        icono: "📐",

        contenido: `
            <p>
                La <strong>trigonometría</strong> es la rama de las
                matemáticas que estudia las relaciones entre los
                ángulos y los lados de los triángulos.
            </p>

            <p>
                También permite estudiar fenómenos periódicos como
                ondas, movimientos circulares, sonido y muchas
                aplicaciones de la física y la ingeniería.
            </p>

            <div class="theory-highlight">
                💡 <strong>Idea clave:</strong>
                las funciones trigonométricas permiten relacionar
                un ángulo con determinados valores numéricos.
            </div>
        `,

        formula: null,

        ejemplo: `
            Si tenemos un ángulo de 30°, podemos determinar valores
            como su seno, coseno y tangente.
        `
    },


    {
        titulo: "⭕ El círculo unitario",
        icono: "⭕",

        contenido: `
            <p>
                El <strong>círculo unitario</strong> es una
                circunferencia cuyo centro está ubicado en el origen
                del plano cartesiano y cuyo radio mide exactamente
                <strong>1 unidad</strong>.
            </p>

            <p>
                Su ecuación es:
            </p>
        `,

        formula: "x² + y² = 1",

        ejemplo: `
            Un punto ubicado sobre el círculo unitario puede
            representarse mediante las coordenadas
            <strong>(cos θ, sen θ)</strong>.
        `
    },


    {
        titulo: "📏 Grados y radianes",
        icono: "📏",

        contenido: `
            <p>
                Los ángulos pueden medirse principalmente en
                <strong>grados</strong> y <strong>radianes</strong>.
            </p>

            <p>
                Una vuelta completa alrededor del círculo corresponde
                a 360° o a 2π radianes.
            </p>

            <div class="theory-table">

                <div>
                    <strong>Grados</strong>
                    <strong>Radianes</strong>
                </div>

                <div>
                    <span>0°</span>
                    <span>0</span>
                </div>

                <div>
                    <span>90°</span>
                    <span>π/2</span>
                </div>

                <div>
                    <span>180°</span>
                    <span>π</span>
                </div>

                <div>
                    <span>270°</span>
                    <span>3π/2</span>
                </div>

                <div>
                    <span>360°</span>
                    <span>2π</span>
                </div>

            </div>
        `,

        formula: `
            radianes = grados × π / 180
        `,

        ejemplo: `
            Para convertir 180° a radianes:

            180 × π / 180 = π
        `
    },


    {
        titulo: "🧭 Los cuatro cuadrantes",
        icono: "🧭",

        contenido: `
            <p>
                El plano cartesiano está dividido en cuatro
                cuadrantes. La posición del ángulo determina los
                signos de sus funciones trigonométricas.
            </p>

            <div class="quadrants">

                <div class="quadrant q1">
                    <strong>I</strong>
                    <span>sen +</span>
                    <span>cos +</span>
                    <span>tan +</span>
                </div>

                <div class="quadrant q2">
                    <strong>II</strong>
                    <span>sen +</span>
                    <span>cos −</span>
                    <span>tan −</span>
                </div>

                <div class="quadrant q3">
                    <strong>III</strong>
                    <span>sen −</span>
                    <span>cos −</span>
                    <span>tan +</span>
                </div>

                <div class="quadrant q4">
                    <strong>IV</strong>
                    <span>sen −</span>
                    <span>cos +</span>
                    <span>tan −</span>
                </div>

            </div>
        `,

        formula: null,

        ejemplo: `
            El ángulo 120° se encuentra en el segundo cuadrante.
            Allí el seno es positivo y el coseno es negativo.
        `
    },


    {
        titulo: "⭐ Ángulos notables",
        icono: "⭐",

        contenido: `
            <p>
                Los ángulos notables son aquellos cuyos valores
                trigonométricos podemos obtener fácilmente.
            </p>

            <div class="theory-table notable">

                <div>
                    <strong>Ángulo</strong>
                    <strong>sen</strong>
                    <strong>cos</strong>
                    <strong>tan</strong>
                </div>

                <div>
                    <span>0°</span>
                    <span>0</span>
                    <span>1</span>
                    <span>0</span>
                </div>

                <div>
                    <span>30°</span>
                    <span>1/2</span>
                    <span>√3/2</span>
                    <span>√3/3</span>
                </div>

                <div>
                    <span>45°</span>
                    <span>√2/2</span>
                    <span>√2/2</span>
                    <span>1</span>
                </div>

                <div>
                    <span>60°</span>
                    <span>√3/2</span>
                    <span>1/2</span>
                    <span>√3</span>
                </div>

                <div>
                    <span>90°</span>
                    <span>1</span>
                    <span>0</span>
                    <span>No existe</span>
                </div>

            </div>
        `,

        formula: null,

        ejemplo: `
            Para θ = 45°:

            sen(45°) = √2/2

            cos(45°) = √2/2

            tan(45°) = 1
        `
    },


    {
        titulo: "📈 Seno, coseno y tangente",
        icono: "📈",

        contenido: `
            <p>
                Las tres funciones trigonométricas fundamentales
                son seno, coseno y tangente.
            </p>

            <div class="formula-grid">

                <div class="formula-card">

                    <h3>sen(θ)</h3>

                    <p>
                        Relaciona la coordenada vertical
                        del punto en el círculo unitario.
                    </p>

                </div>

                <div class="formula-card">

                    <h3>cos(θ)</h3>

                    <p>
                        Relaciona la coordenada horizontal
                        del punto en el círculo unitario.
                    </p>

                </div>

                <div class="formula-card">

                    <h3>tan(θ)</h3>

                    <p>
                        Es la relación entre seno y coseno.
                    </p>

                </div>

            </div>
        `,

        formula: `
            tan(θ) = sen(θ) / cos(θ)
        `,

        ejemplo: `
            Si sen(θ) = 1/2 y cos(θ) = √3/2:

            tan(θ) =
            (1/2) / (√3/2)
            = 1/√3
        `
    },


    {
        titulo: "🔄 Funciones trigonométricas recíprocas",
        icono: "🔄",

        contenido: `
            <p>
                Además del seno, coseno y tangente existen tres
                funciones recíprocas.
            </p>

            <div class="formula-grid">

                <div class="formula-card">

                    <h3>cosecante</h3>

                    <p>
                        csc(θ) = 1 / sen(θ)
                    </p>

                </div>

                <div class="formula-card">

                    <h3>secante</h3>

                    <p>
                        sec(θ) = 1 / cos(θ)
                    </p>

                </div>

                <div class="formula-card">

                    <h3>cotangente</h3>

                    <p>
                        cot(θ) = 1 / tan(θ)
                    </p>

                </div>

            </div>
        `,

        formula: `
            csc θ = 1/sen θ
            ·
            sec θ = 1/cos θ
            ·
            cot θ = 1/tan θ
        `,

        ejemplo: `
            Si sen(θ) = 1/2:

            csc(θ) = 1/(1/2) = 2
        `
    },


    {
        titulo: "🧮 Identidades fundamentales",
        icono: "🧮",

        contenido: `
            <p>
                Las identidades trigonométricas son igualdades que
                se cumplen para todos los valores donde las
                funciones están definidas.
            </p>

            <div class="identity-box">

                <div>
                    sen²(θ) + cos²(θ) = 1
                </div>

                <div>
                    1 + tan²(θ) = sec²(θ)
                </div>

                <div>
                    1 + cot²(θ) = csc²(θ)
                </div>

            </div>
        `,

        formula: `
            sen²(θ) + cos²(θ) = 1
        `,

        ejemplo: `
            Si conocemos que:

            sen(θ) = 3/5

            podemos encontrar el coseno utilizando
            la identidad fundamental.
        `
    },


    {
        titulo: "🔁 Periodicidad, dominio y rango",
        icono: "🔁",

        contenido: `
            <p>
                Las funciones trigonométricas son periódicas.
                Esto significa que sus valores se repiten después
                de determinados intervalos.
            </p>

            <div class="formula-grid">

                <div class="formula-card">

                    <h3>Seno</h3>

                    <p>
                        Periodo: 2π
                    </p>

                    <p>
                        Rango: [-1, 1]
                    </p>

                </div>

                <div class="formula-card">

                    <h3>Coseno</h3>

                    <p>
                        Periodo: 2π
                    </p>

                    <p>
                        Rango: [-1, 1]
                    </p>

                </div>

                <div class="formula-card">

                    <h3>Tangente</h3>

                    <p>
                        Periodo: π
                    </p>

                    <p>
                        Rango: todos los reales
                    </p>

                </div>

            </div>
        `,

        formula: `
            sen(θ + 2π) = sen(θ)

            cos(θ + 2π) = cos(θ)

            tan(θ + π) = tan(θ)
        `,

        ejemplo: `
            El seno de 30° es igual al seno de 390°,
            porque ambos ángulos representan la misma
            posición después de una vuelta completa.
        `
    }

];


/* =========================================================
   VARIABLES DE TEORÍA
========================================================= */

let temaTeoriaActual = 0;


/* =========================================================
   GENERAR TEORÍA
========================================================= */

function cargarTeoria() {

    const contenedor =
        document.getElementById(
            "theoryContent"
        );

    if (!contenedor) {
        return;
    }


    const tema =
        temasTeoria[
            temaTeoriaActual
        ];


    contenedor.innerHTML = `

        <div class="theory-card">

            <div class="theory-header">

                <span class="theory-icon">
                    ${tema.icono}
                </span>

                <div>

                    <span class="theory-number">
                        Tema ${temaTeoriaActual + 1}
                        de ${temasTeoria.length}
                    </span>

                    <h2>
                        ${tema.titulo}
                    </h2>

                </div>

            </div>


            <div class="theory-content">

                ${tema.contenido}


                ${
                    tema.formula
                    ?
                    `
                    <div class="main-formula">

                        <span>
                            📌 Fórmula importante
                        </span>

                        <strong>
                            ${tema.formula}
                        </strong>

                    </div>
                    `
                    :
                    ""
                }


                <div class="example-box">

                    <h3>
                        💡 Ejemplo
                    </h3>

                    <p>
                        ${tema.ejemplo}
                    </p>

                </div>

            </div>


            <div class="theory-navigation">

                <button
                    class="btn theory-prev"
                    onclick="temaAnterior()"
                    ${
                        temaTeoriaActual === 0
                        ? "disabled"
                        : ""
                    }
                >
                    ← Anterior
                </button>


                <div class="theory-dots">

                    ${temasTeoria
                        .map(
                            (_, index) =>
                                `
                                <span
                                    class="
                                        theory-dot
                                        ${
                                            index ===
                                            temaTeoriaActual
                                            ? "active"
                                            : ""
                                        }
                                    "
                                ></span>
                                `
                        )
                        .join("")
                    }

                </div>


                <button
                    class="btn primary"
                    onclick="temaSiguiente()"
                >
                    ${
                        temaTeoriaActual ===
                        temasTeoria.length - 1
                        ? "Finalizar ✓"
                        : "Siguiente →"
                    }
                </button>

            </div>

        </div>

    `;

}


/* =========================================================
   SIGUIENTE TEMA
========================================================= */

function temaSiguiente() {

    if (
        temaTeoriaActual <
        temasTeoria.length - 1
    ) {

        temaTeoriaActual++;

        cargarTeoria();

    } else {

        actualizarProgreso(
            Math.max(
                progreso,
                20
            )
        );

        alert(
            "🎉 ¡Excelente! Has completado la teoría."
        );

    }

}


/* =========================================================
   TEMA ANTERIOR
========================================================= */

function temaAnterior() {

    if (
        temaTeoriaActual > 0
    ) {

        temaTeoriaActual--;

        cargarTeoria();

    }

}


/* =========================================================
   CARGAR TEORÍA
========================================================= */

cargarTeoria();


const enlacesMenu =
    document.querySelectorAll(
        "[data-page]"
    );


const paginas =
    document.querySelectorAll(
        ".page"
    );


enlacesMenu.forEach(
    enlace => {

        enlace.addEventListener(
            "click",
            event => {

                event.preventDefault();


                const pagina =
                    enlace.dataset.page;


                paginas.forEach(
                    elemento => {

                        elemento.classList.remove(
                            "active"
                        );

                    }
                );


                const paginaObjetivo =
                    document.getElementById(
                        pagina
                    );


                if (paginaObjetivo) {

                    paginaObjetivo.classList.add(
                        "active"
                    );

                }


                enlacesMenu.forEach(
                    otro => {

                        otro.classList.remove(
                            "active"
                        );

                    }
                );


                enlace.classList.add(
                    "active"
                );

            }
        );

    }
);


function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));

    // Mostrar la sección seleccionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Ejecutar la renderización de preguntas si entran a la sección 'teoricos'
    if (sectionId === 'teoricos' && typeof mostrarProblemaTeorico === 'function') {
        mostrarProblemaTeorico();
    }
}

function showSection(sectionId) {
    // 1. Ocultar todas las secciones y activar la seleccionada
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // 2. Redibujar la gráfica si entran a la sección 'graficas'
    if (sectionId === 'graficas' && typeof window.redrawGraph === 'function') {
        window.redrawGraph();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    configurarBotonesGraficas();
    
    // Opcional: Si la gráfica fuera la sección por defecto
    const graficas = document.getElementById("graficas");
    if (graficas && graficas.classList.contains("active")) {
        drawGraph();
    }
});

setTimeout(() => {
    configurarCanvas();
    actualizarInformacionCirculo();
}, 100);

function showSection(sectionId) {
    // 1. Cambiar visibilidad de secciones
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // 2. Redibujar el Círculo Unitario si la sección activada es "circulo"
    if (sectionId === 'circulo' && typeof window.redrawCirculo === 'function') {
        // Un pequeño delay garantiza que el DOM ya calculó el ancho/alto del contenedor
        setTimeout(() => {
            window.redrawCirculo();
        }, 50);
    }
}

/* =========================================================
   CONTROLADOR PRINCIPAL (js/app.js)
========================================================= */

function showSection(sectionId) {
    // 1. Ocultar todas las secciones y mostrar la elegida
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // 2. Redibujar Canvas según la sección visible
    if (sectionId === 'graficas' && typeof window.redrawGraph === 'function') {
        window.redrawGraph();
    }
    
    if (sectionId === 'circulo' && typeof window.redrawCirculo === 'function') {
        setTimeout(() => {
            window.redrawCirculo();
        }, 50);
    }
}

// Eventos de los botones de la barra lateral (Sidebar)
document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const section = btn.dataset.section;
            showSection(section);
        });
    });
});

/* =====================================================
   MENÚ MÓVIL
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const mobileMenu =
            document.getElementById(
                "mobileMenu"
            );

        const sidebar =
            document.getElementById(
                "sidebar"
            );


        if (
            !mobileMenu ||
            !sidebar
        ) {

            return;

        }


        /* -------------------------------------------------
           CREAR OVERLAY
        ------------------------------------------------- */

        let overlay =
            document.querySelector(
                ".mobile-overlay"
            );


        if (!overlay) {

            overlay =
                document.createElement(
                    "div"
                );

            overlay.className =
                "mobile-overlay";

            document.body.appendChild(
                overlay
            );

        }


        /* -------------------------------------------------
           ABRIR / CERRAR MENÚ
        ------------------------------------------------- */

        mobileMenu.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                const abierto =
                    sidebar.classList.toggle(
                        "show"
                    );


                overlay.classList.toggle(
                    "show",
                    abierto
                );


                /* Cambiar icono */

                if (abierto) {

                    mobileMenu.textContent =
                        "✕";

                    mobileMenu.setAttribute(
                        "title",
                        "Cerrar menú"
                    );

                } else {

                    mobileMenu.textContent =
                        "☰";

                    mobileMenu.setAttribute(
                        "title",
                        "Abrir menú"
                    );

                }

            }
        );


        /* -------------------------------------------------
           CERRAR AL TOCAR EL OVERLAY
        ------------------------------------------------- */

        overlay.addEventListener(
            "click",
            function () {

                closeMobileMenu();

            }
        );


        /* -------------------------------------------------
           CERRAR AL SELECCIONAR UNA OPCIÓN
        ------------------------------------------------- */

        const navButtons =
            document.querySelectorAll(
                ".nav-btn"
            );


        navButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        if (
                            window.innerWidth <= 1024
                        ) {

                            closeMobileMenu();

                        }

                    }
                );

            }
        );


        /* -------------------------------------------------
           FUNCIÓN CERRAR MENÚ
        ------------------------------------------------- */

        function closeMobileMenu() {

            sidebar.classList.remove(
                "show"
            );

            overlay.classList.remove(
                "show"
            );


            mobileMenu.textContent =
                "☰";


            mobileMenu.setAttribute(
                "title",
                "Abrir menú"
            );

        }


        /* -------------------------------------------------
           CERRAR SI SE CAMBIA A PANTALLA GRANDE
        ------------------------------------------------- */

        window.addEventListener(
            "resize",
            function () {

                if (
                    window.innerWidth > 1024
                ) {

                    closeMobileMenu();

                }

            }
        );


    }
);

mobileMenu.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});