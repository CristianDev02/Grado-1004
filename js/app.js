/* =========================================================
   ESTADO DE LA APLICACIÓN
========================================================= */

let progreso = 0;
let seccionActual = "inicio";

/* =========================================================
   ELEMENTOS DE LA APLICACIÓN
========================================================= */

const secciones = document.querySelectorAll(".section");
const botonesNavegacion = document.querySelectorAll(".nav-btn");
const tituloPagina = document.getElementById("pageTitle");
const sidebar = document.getElementById("sidebar");

/* =========================================================
   CAMBIAR SECCIÓN (UNIFICADO)
========================================================= */

function showSection(nombre) {
    seccionActual = nombre;

    /* Ocultar todas las secciones */
    secciones.forEach(seccion => {
        seccion.classList.remove("active");
    });

    /* Quitar estilo activo de los botones */
    botonesNavegacion.forEach(boton => {
        boton.classList.remove("active");
    });

    /* Mostrar sección seleccionada */
    const seccionObjetivo = document.getElementById(nombre);
    if (seccionObjetivo) {
        seccionObjetivo.classList.add("active");
    }

    /* Activar botón correspondiente y actualizar título */
    const botonActivo = document.querySelector(`.nav-btn[data-section="${nombre}"]`);
    if (botonActivo) {
        botonActivo.classList.add("active");
        if (tituloPagina) {
            tituloPagina.textContent = botonActivo.querySelector("span")?.textContent.trim() || "Inicio";
        }
    }

    /* Cerrar menú móvil si está abierto */
    if (typeof closeMobileMenu === "function") {
        closeMobileMenu();
    } else if (sidebar) {
        sidebar.classList.remove("open", "show");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    /* Ejecutar callbacks según la sección activada */
    if (nombre === "circulo") {
        if (typeof actualizarCirculo === "function") actualizarCirculo();
        if (typeof window.redrawCirculo === "function") {
            setTimeout(() => window.redrawCirculo(), 50);
        }
    }

    if (nombre === "graficas") {
        setTimeout(() => {
            if (typeof configurarCanvasGrafica === "function") configurarCanvasGrafica();
            if (typeof dibujarGrafica === "function") dibujarGrafica();
            if (typeof actualizarInformacionGrafica === "function") actualizarInformacionGrafica();
            if (typeof window.redrawGraph === "function") window.redrawGraph();
        }, 100);
    }

    if (nombre === "teoricos" && typeof mostrarProblemaTeorico === "function") {
        mostrarProblemaTeorico();
    }
}

/* =========================================================
   EVENTOS DE NAVEGACIÓN
========================================================= */

botonesNavegacion.forEach(boton => {
    boton.addEventListener("click", () => {
        const seccion = boton.dataset.section;
        if (seccion) showSection(seccion);
    });
});

/* =========================================================
   MENÚ MÓVIL (ABRIR / CERRAR CON OVERLAY)
========================================================= */

let closeMobileMenu = function() {};

document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu && sidebar) {
        /* Crear Overlay Dinámico si no existe */
        let overlay = document.querySelector(".mobile-overlay");
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.className = "mobile-overlay";
            document.body.appendChild(overlay);
        }

        /* Función para Cerrar Menú */
        closeMobileMenu = function() {
            sidebar.classList.remove("show", "open");
            overlay.classList.remove("show", "active");
            mobileMenu.textContent = "☰";
            mobileMenu.setAttribute("title", "Abrir menú");
        };

        /* Alternar Menú (Abrir / Cerrar) */
        mobileMenu.addEventListener("click", (event) => {
            event.stopPropagation();
            const abierto = sidebar.classList.toggle("show");
            sidebar.classList.toggle("open", abierto);
            overlay.classList.toggle("show", abierto);
            overlay.classList.toggle("active", abierto);

            if (abierto) {
                mobileMenu.textContent = "✕";
                mobileMenu.setAttribute("title", "Cerrar menú");
            } else {
                mobileMenu.textContent = "☰";
                mobileMenu.setAttribute("title", "Abrir menú");
            }
        });

        /* Cerrar al hacer clic en el overlay */
        overlay.addEventListener("click", closeMobileMenu);

        /* Cerrar al redimensionar a pantalla de escritorio */
        window.addEventListener("resize", () => {
            if (window.innerWidth > 1024) {
                closeMobileMenu();
            }
        });
    }

    if (typeof configurarBotonesGraficas === "function") {
        configurarBotonesGraficas();
    }
});

/* =========================================================
   TEMA
========================================================= */

const themeButton = document.getElementById("themeButton");

if (themeButton) {
    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const modoOscuro = document.body.classList.contains("dark");
        themeButton.textContent = modoOscuro ? "☀️" : "🌙";

        if (typeof actualizarCirculo === "function") actualizarCirculo();
        if (typeof dibujarGrafica === "function") dibujarGrafica();
    });
}

/* =========================================================
   PROGRESO
========================================================= */

function actualizarProgreso(valor) {
    progreso = Math.max(0, Math.min(100, valor));

    const barra = document.getElementById("progressBar");
    const porcentaje = document.getElementById("progressPercentage");
    const progresoGrande = document.getElementById("bigProgress");

    if (barra) barra.style.width = progreso + "%";
    if (porcentaje) porcentaje.textContent = progreso + "%";
    if (progresoGrande) progresoGrande.textContent = progreso + "%";

    const circulo = document.getElementById("bigProgressCircle");
    if (circulo) {
        circulo.style.background = `conic-gradient(
            var(--primary) ${progreso * 3.6}deg,
            var(--border) ${progreso * 3.6}deg
        )`;
    }
}

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
                <div><span>0°</span><span>0</span></div>
                <div><span>90°</span><span>π/2</span></div>
                <div><span>180°</span><span>π</span></div>
                <div><span>270°</span><span>3π/2</span></div>
                <div><span>360°</span><span>2π</span></div>
            </div>
        `,
        formula: `radianes = grados × π / 180`,
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
                    <span>sen +</span><span>cos +</span><span>tan +</span>
                </div>
                <div class="quadrant q2">
                    <strong>II</strong>
                    <span>sen +</span><span>cos −</span><span>tan −</span>
                </div>
                <div class="quadrant q3">
                    <strong>III</strong>
                    <span>sen −</span><span>cos −</span><span>tan +</span>
                </div>
                <div class="quadrant q4">
                    <strong>IV</strong>
                    <span>sen −</span><span>cos +</span><span>tan −</span>
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
                <div><span>0°</span><span>0</span><span>1</span><span>0</span></div>
                <div><span>30°</span><span>1/2</span><span>√3/2</span><span>√3/3</span></div>
                <div><span>45°</span><span>√2/2</span><span>√2/2</span><span>1</span></div>
                <div><span>60°</span><span>√3/2</span><span>1/2</span><span>√3</span></div>
                <div><span>90°</span><span>1</span><span>0</span><span>No existe</span></div>
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
                    <p>Relaciona la coordenada vertical del punto en el círculo unitario.</p>
                </div>
                <div class="formula-card">
                    <h3>cos(θ)</h3>
                    <p>Relaciona la coordenada horizontal del punto en el círculo unitario.</p>
                </div>
                <div class="formula-card">
                    <h3>tan(θ)</h3>
                    <p>Es la relación entre seno y coseno.</p>
                </div>
            </div>
        `,
        formula: `tan(θ) = sen(θ) / cos(θ)`,
        ejemplo: `
            Si sen(θ) = 1/2 y cos(θ) = √3/2:
            tan(θ) = (1/2) / (√3/2) = 1/√3
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
                    <p>csc(θ) = 1 / sen(θ)</p>
                </div>
                <div class="formula-card">
                    <h3>secante</h3>
                    <p>sec(θ) = 1 / cos(θ)</p>
                </div>
                <div class="formula-card">
                    <h3>cotangente</h3>
                    <p>cot(θ) = 1 / tan(θ)</p>
                </div>
            </div>
        `,
        formula: `csc θ = 1/sen θ · sec θ = 1/cos θ · cot θ = 1/tan θ`,
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
                <div>sen²(θ) + cos²(θ) = 1</div>
                <div>1 + tan²(θ) = sec²(θ)</div>
                <div>1 + cot²(θ) = csc²(θ)</div>
            </div>
        `,
        formula: `sen²(θ) + cos²(θ) = 1`,
        ejemplo: `
            Si conocemos que sen(θ) = 3/5,
            podemos encontrar el coseno utilizando la identidad fundamental.
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
                    <p>Periodo: 2π</p>
                    <p>Rango: [-1, 1]</p>
                </div>
                <div class="formula-card">
                    <h3>Coseno</h3>
                    <p>Periodo: 2π</p>
                    <p>Rango: [-1, 1]</p>
                </div>
                <div class="formula-card">
                    <h3>Tangente</h3>
                    <p>Periodo: π</p>
                    <p>Rango: todos los reales</p>
                </div>
            </div>
        `,
        formula: `sen(θ + 2π) = sen(θ) | cos(θ + 2π) = cos(θ) | tan(θ + π) = tan(θ)`,
        ejemplo: `
            El seno de 30° es igual al seno de 390°,
            porque ambos ángulos representan la misma
            posición después de una vuelta completa.
        `
    }
];

let temaTeoriaActual = 0;

function cargarTeoria() {
    const contenedor = document.getElementById("theoryContent");
    if (!contenedor) return;

    const tema = temasTeoria[temaTeoriaActual];

    contenedor.innerHTML = `
        <div class="theory-card">
            <div class="theory-header">
                <span class="theory-icon">${tema.icono}</span>
                <div>
                    <span class="theory-number">
                        Tema ${temaTeoriaActual + 1} de ${temasTeoria.length}
                    </span>
                    <h2>${tema.titulo}</h2>
                </div>
            </div>

            <div class="theory-content">
                ${tema.contenido}
                ${
                    tema.formula
                    ? `
                    <div class="main-formula">
                        <span>📌 Fórmula importante</span>
                        <strong>${tema.formula}</strong>
                    </div>
                    `
                    : ""
                }
                <div class="example-box">
                    <h3>💡 Ejemplo</h3>
                    <p>${tema.ejemplo}</p>
                </div>
            </div>

            <div class="theory-navigation">
                <button
                    class="btn theory-prev"
                    onclick="temaAnterior()"
                    ${temaTeoriaActual === 0 ? "disabled" : ""}
                >
                    ← Anterior
                </button>

                <div class="theory-dots">
                    ${temasTeoria
                        .map(
                            (_, index) => `
                                <span class="theory-dot ${index === temaTeoriaActual ? "active" : ""}"></span>
                            `
                        )
                        .join("")
                    }
                </div>

                <button class="btn primary" onclick="temaSiguiente()">
                    ${temaTeoriaActual === temasTeoria.length - 1 ? "Finalizar ✓" : "Siguiente →"}
                </button>
            </div>
        </div>
    `;
}

function temaSiguiente() {
    if (temaTeoriaActual < temasTeoria.length - 1) {
        temaTeoriaActual++;
        cargarTeoria();
    } else {
        actualizarProgreso(Math.max(progreso, 20));
        alert("🎉 ¡Excelente! Has completado la teoría.");
    }
}

function temaAnterior() {
    if (temaTeoriaActual > 0) {
        temaTeoriaActual--;
        cargarTeoria();
    }
}

cargarTeoria();