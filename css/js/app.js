// ==========================
// SPA: Navegación entre módulos
// ==========================
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);

            // Ocultar todas las vistas
            document.querySelectorAll('.view').forEach(v => v.classList.add('d-none'));

            // Mostrar vista seleccionada
            const selected = document.getElementById(target);
            if (selected) selected.classList.remove('d-none');

            // Actualizar la URL sin recargar la página
            history.pushState({ page: target }, '', `#${target}`);
        });
    });

    // Mostrar módulo desde URL si viene con hash
    const hash = window.location.hash.substring(1);
    if (hash) {
        const initialView = document.getElementById(hash);
        if (initialView) {
            document.querySelectorAll('.view').forEach(v => v.classList.add('d-none'));
            initialView.classList.remove('d-none');
        }
    }
});

// ==========================
// Validación de Formularios
// ==========================
function validarFormulario(formId) {
    const form = document.getElementById(formId);
    if (!form.checkValidity()) {
        form.reportValidity();
        return false;
    }

    // Validación de teléfono (10 dígitos)
    const telefono = form.querySelector('input[type="tel"]');
    if (telefono && !/^\d{10}$/.test(telefono.value)) {
        alert('El teléfono debe tener 10 dígitos.');
        telefono.focus();
        return false;
    }

    // Validación de código de asignatura
    const codigo = form.querySelector('input[pattern]');
    if (codigo && codigo.pattern && !(new RegExp(codigo.pattern)).test(codigo.value)) {
        alert('El código de asignatura no cumple con el formato requerido.');
        codigo.focus();
        return false;
    }

    alert('Formulario válido. Se puede enviar.');
    return true;
}

// ==========================
// Inicializar Tooltips Bootstrap
// ==========================
document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));
});

// ==========================
// Función de Login (opcional)
// ==========================
function validarLogin(usuarioInputId, passwordInputId, redirectUrl) {
    const usuario = document.getElementById(usuarioInputId).value;
    const password = document.getElementById(passwordInputId).value;

    if (usuario === "admin" && password === "123456") {
        window.location.href = redirectUrl;
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}
