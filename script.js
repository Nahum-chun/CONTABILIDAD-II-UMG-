
const boton = document.getElementById("btn-rentabilidad");

boton.addEventListener("click", function () {

    let ventasTexto = document.getElementById("ventas").value;
    let costosTexto = document.getElementById("costos").value;

    let resultado = document.getElementById(
        "resultado-rentabilidad"
    );

    let ventas = Number(ventasTexto);
    let costos = Number(costosTexto);

    if (
        ventasTexto.trim() === "" ||
        costosTexto.trim() === "" ||
        !Number.isFinite(ventas) ||
        !Number.isFinite(costos) ||
        ventas <= 0 ||
        costos < 0
    ) {
        resultado.textContent =
            "Ingresa valores válidos. Las ventas deben ser mayores que cero.";
        return;
    }

    let utilidad = ventas - costos;
    let margen = (utilidad / ventas) * 100;

    resultado.textContent =
        "Utilidad neta: Q" + utilidad.toFixed(2) +
        " | Margen neto: " + margen.toFixed(2) + "%";

});


/* CALCULADORA DE CUMPLIMIENTO OPERATIVO */

const botonEficiencia =
    document.getElementById("btn-eficiencia");

botonEficiencia.addEventListener("click", function () {

    let programadasTexto =
        document.getElementById("programadas").value;

    let realizadasTexto =
        document.getElementById("realizadas").value;

    let resultado =
        document.getElementById("resultado-eficiencia");

    let programadas = Number(programadasTexto);
    let realizadas = Number(realizadasTexto);

    if (
        programadasTexto.trim() === "" ||
        realizadasTexto.trim() === "" ||
        !Number.isInteger(programadas) ||
        !Number.isInteger(realizadas) ||
        programadas <= 0 ||
        realizadas < 0
    ) {
        resultado.textContent =
            "Ingresa cantidades enteras válidas.";
        return;
    }

    let porcentaje =
        (realizadas / programadas) * 100;

    resultado.textContent =
        "Cumplimiento operativo: " +
        porcentaje.toFixed(2) + "%";
});



/* CALCULADORA DE FLUJO DE EFECTIVO */

const botonFlujo = document.getElementById("btn-flujo");

botonFlujo.addEventListener("click", function () {

    let entradasTexto =
        document.getElementById("entradas").value;

    let salidasTexto =
        document.getElementById("salidas").value;

    let resultado =
        document.getElementById("resultado-flujo");

    let entradas = Number(entradasTexto);
    let salidas = Number(salidasTexto);

    if (
        entradasTexto.trim() === "" ||
        salidasTexto.trim() === "" ||
        !Number.isFinite(entradas) ||
        !Number.isFinite(salidas) ||
        entradas < 0 ||
        salidas < 0
    ) {
        resultado.textContent =
            "Ingresa cantidades válidas y no negativas.";
        return;
    }

    let flujoNeto = entradas - salidas;

    let interpretacion;

    if (flujoNeto > 0) {
        interpretacion = "Flujo positivo.";
    } else if (flujoNeto < 0) {
        interpretacion = "Flujo negativo.";
    } else {
        interpretacion = "Flujo equilibrado.";
    }

    resultado.textContent =
        "Flujo neto: Q" + flujoNeto.toFixed(2) +
        " | " + interpretacion;

});



/* CALCULADORA COMPRAR O PRODUCIR */

const botonComprarProducir =
    document.getElementById("btn-comprar-producir");

botonComprarProducir.addEventListener("click", function () {

    const cantidadTexto =
        document.getElementById("cantidad-cp").value;

    const producirTexto =
        document.getElementById("costo-producir").value;

    const fijosTexto =
        document.getElementById("costos-fijos").value;

    const comprarTexto =
        document.getElementById("precio-comprar").value;

    const resultado =
        document.getElementById(
            "resultado-comprar-producir"
        );

    const textos = [
        cantidadTexto,
        producirTexto,
        fijosTexto,
        comprarTexto
    ];

    const valores = textos.map(Number);

    const [cantidad, costoProducir, costosFijos, precioComprar] =
        valores;

    if (
        textos.some(texto => texto.trim() === "") ||
        valores.some(valor => !Number.isFinite(valor) || valor < 0) ||
        !Number.isInteger(cantidad) ||
        cantidad <= 0
    ) {
        resultado.textContent =
            "Ingresa valores válidos. La cantidad debe ser un entero positivo.";
        return;
    }

    const totalProducir =
        cantidad * costoProducir + costosFijos;

    const totalComprar =
        cantidad * precioComprar;

    const diferencia =
        Math.abs(totalProducir - totalComprar);

    let recomendacion;

    if (totalProducir < totalComprar) {
        recomendacion = "Conviene producir";
    } else if (totalComprar < totalProducir) {
        recomendacion = "Conviene comprar";
    } else {
        recomendacion = "Ambas alternativas tienen el mismo costo";
    }

    resultado.textContent =
        "Costo de producir: Q" + totalProducir.toFixed(2) +
        " | Costo de comprar: Q" + totalComprar.toFixed(2) +
        " | " + recomendacion +
        " | Diferencia: Q" + diferencia.toFixed(2);
});



/* CALCULADORA DE PATRIMONIO */

const botonPatrimonio =
    document.getElementById("btn-patrimonio");

botonPatrimonio.addEventListener("click", function () {

    const activosTexto =
        document.getElementById("activos").value;

    const pasivosTexto =
        document.getElementById("pasivos").value;

    const activos = Number(activosTexto);
    const pasivos = Number(pasivosTexto);

    const resultado =
        document.getElementById("resultado-patrimonio");

    if (
        activosTexto.trim() === "" ||
        pasivosTexto.trim() === "" ||
        !Number.isFinite(activos) ||
        !Number.isFinite(pasivos) ||
        activos < 0 ||
        pasivos < 0
    ) {
        resultado.textContent =
            "Ingresa valores válidos y no negativos.";
        return;
    }

    const patrimonio = activos - pasivos;

    let interpretacion;

    if (patrimonio > 0) {
        interpretacion = "Patrimonio positivo";
    } else if (patrimonio < 0) {
        interpretacion = "Patrimonio negativo";
    } else {
        interpretacion = "Patrimonio igual a cero";
    }

    resultado.textContent =
        "Patrimonio: Q" +
        patrimonio.toLocaleString("es-GT", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }) +
        " | " + interpretacion;
});




/* CALCULADORA DE VALOR ACTUAL NETO */

const botonVan =
    document.getElementById("btn-van");

botonVan.addEventListener("click", function () {

    const ids = [
        "inversion-van",
        "tasa-van",
        "flujo1-van",
        "flujo2-van",
        "flujo3-van"
    ];

    const campos = ids.map(id =>
        document.getElementById(id).value.trim()
    );

    const resultado =
        document.getElementById("resultado-van");

    if (
        campos.some(valor => valor === "") ||
        campos.some(valor =>
            !Number.isFinite(Number(valor))
        )
    ) {
        resultado.textContent =
            "Ingresa todos los datos correctamente.";
        return;
    }

    const [inversion, tasa, flujo1, flujo2, flujo3] =
        campos.map(Number);

    if (inversion < 0 || tasa < 0) {
        resultado.textContent =
            "La inversión y la tasa no pueden ser negativas.";
        return;
    }

    const r = tasa / 100;

    const van =
        -inversion +
        flujo1 / Math.pow(1 + r, 1) +
        flujo2 / Math.pow(1 + r, 2) +
        flujo3 / Math.pow(1 + r, 3);

    let interpretacion;

    if (van > 0.005) {
        interpretacion =
            "Proyecto financieramente viable.";
    } else if (van < -0.005) {
        interpretacion =
            "Proyecto no viable con la tasa indicada.";
    } else {
        interpretacion =
            "Proyecto en punto de equilibrio financiero.";
    }

    resultado.textContent =
        "VAN: " +
        (van < 0 ? "-" : "") +
        "Q" +
        Math.abs(van).toLocaleString("es-GT", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }) +
        " | " + interpretacion;
});



/* ==========================================
   CALCULADORA DE TASA INTERNA DE RETORNO
   PROYECTO FINAL - CONTABILIDAD II
========================================== */

const botonTIR = document.getElementById("btn-tir");

if (botonTIR) {
    botonTIR.addEventListener("click", function () {

        const ids = [
            "inversion-tir",
            "flujo1-tir",
            "flujo2-tir",
            "flujo3-tir",
            "tasa-minima-tir"
        ];

        const campos = ids.map(id =>
            document.getElementById(id)
        );

        const resultado =
            document.getElementById("resultado-tir");

        if (campos.some(campo =>
            !campo || campo.value.trim() === ""
        )) {
            resultado.textContent =
                "Error: completa todos los campos.";
            return;
        }

        const valores = campos.map(campo =>
            Number(campo.value)
        );

        if (valores.some(valor =>
            !Number.isFinite(valor)
        )) {
            resultado.textContent =
                "Error: ingresa números válidos.";
            return;
        }

        const [inversion, flujo1, flujo2,
               flujo3, tasaMinima] = valores;

        if (inversion <= 0 ||
            flujo1 < 0 ||
            flujo2 < 0 ||
            flujo3 < 0 ||
            tasaMinima < 0) {

            resultado.textContent =
                "Error: inversión positiva, flujos " +
                "no negativos y tasa mínima no negativa.";
            return;
        }

        const flujos = [flujo1, flujo2, flujo3];

        function calcularVAN(tasa) {
            let van = -inversion;

            for (let i = 0; i < flujos.length; i++) {
                van += flujos[i] /
                    Math.pow(1 + tasa, i + 1);
            }

            return van;
        }

        if (flujos.every(flujo => flujo === 0)) {
            resultado.textContent =
                "No existe una TIR con flujos iguales a cero.";
            return;
        }

        let inferior = -0.999999;
        let superior = 1;

        while (calcularVAN(superior) > 0 &&
               superior < 1000000) {
            superior = superior * 2 + 1;
        }

        if (calcularVAN(superior) > 0) {
            resultado.textContent =
                "No se pudo determinar la TIR.";
            return;
        }

        for (let i = 0; i < 200; i++) {
            const medio = (inferior + superior) / 2;

            if (calcularVAN(medio) > 0) {
                inferior = medio;
            } else {
                superior = medio;
            }
        }

        const tir = ((inferior + superior) / 2) * 100;

        const interpretacion = tir >= tasaMinima
            ? "El proyecto cumple la rentabilidad mínima."
            : "El proyecto no alcanza la rentabilidad mínima.";

        resultado.textContent =
            "TIR: " + tir.toFixed(2) + "% | " +
            "Tasa mínima: " + tasaMinima.toFixed(2) +
            "% | " + interpretacion;
    });
}


/* Reducir encabezado al desplazarse */

document.addEventListener("DOMContentLoaded", function () {
    const cabecera = document.querySelector(".cabecera-fija");

    if (!cabecera) return;

    let compacta = false;

    function actualizarCabecera() {
        const desplazar = window.scrollY;

        if (!compacta && desplazar > 180) {
            compacta = true;
            cabecera.classList.add("compacta");
        } else if (compacta && desplazar < 80) {
            compacta = false;
            cabecera.classList.remove("compacta");
        }
    }

    window.addEventListener("scroll", actualizarCabecera, {
        passive: true
    });

    actualizarCabecera();
});


