function showContent(section) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => {
        sec.style.display = 'none';
    });
    // Muestra la sección seleccionada
    document.getElementById(section).style.display = 'block';
}

function editProfile() {
    document.getElementById('user-info').style.display = 'none';
    document.getElementById('edit-profile').style.display = 'block';
}

function saveProfile() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Aquí puedes agregar lógica para guardar los cambios, como una llamada a una API.

    // Actualiza la vista
    document.getElementById('user-info').innerHTML = `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <button onclick="editProfile()">Editar Datos</button>
    `;
    document.getElementById('user-info').style.display = 'block';
    document.getElementById('edit-profile').style.display = 'none';
}

function cancelEdit() {
    document.getElementById('edit-profile').style.display = 'none';
    document.getElementById('user-info').style.display = 'block';
}


function viewHistory() {
    document.getElementById('historial').style.display = 'block';
    document.getElementById('liberar-recurso').style.display = 'none';

    const historyList = document.getElementById('history-list');
    historyList.innerHTML = ''; // Limpiar la tabla antes de mostrar nuevos datos

    history.forEach(item => {
        const row = `
            <tr>
                <td>${item.code}</td>
                <td>${item.name}</td>
                <td>${item.description}</td>
                <td>${item.date}</td>
            </tr>
        `;
        historyList.innerHTML += row;
    });
}

const history = [
    { code: 'T001', name: 'Proyector', description: 'Proyector 1080p para presentaciones', date: '2024-10-29' },
    { code: 'T003', name: 'Laptop', description: 'Laptop Dell con Windows 10', date: '2024-10-30' },
    { code: 'H005', name: 'Cinta métrica', description: 'Herramienta para medir distancias.', date: '2024-10-31' },
    { code: 'T004', name: 'Tablet', description: 'Tablet Samsung para actividades', date: '2024-11-01' },
];

const releaseResources = [
    { code: 'T001', name: 'Proyector', description: 'Proyector 1080p para presentaciones', date: '2024-11-02' },
    { code: 'T004', name: 'Tablet', description: 'Tablet Samsung para actividades', date: '2024-11-03' },
    { code: 'T003', name: 'Laptop', description: 'Laptop Dell con Windows 10', date: '2024-11-04' },
    { code: 'R004', name: 'Cámara', description: 'Cámara para grabación de clases.', date: '2024-11-05' },
];

let currentYear = 2024;
let currentMonth = 9; // Enero (meses en JavaScript van de 0 a 11)

// Función para abrir el modal de información de eventos con detalles
function openDayInfoModal(day, history, releaseResources, year, month) {
    const modalContent = document.getElementById('dayInfoContent');
    const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

    const historyItem = history.find(item => item.date === formattedDate);
    const requestItem = releaseResources.find(item => item.date === formattedDate);

    if (historyItem && requestItem) {
        modalContent.innerHTML = `
            <strong>Historial</strong><br>
            Nombre: ${historyItem.name}<br>
            Código: ${historyItem.code}<br>
            Descripción: ${historyItem.description}<br>
            <hr>
            <strong>Petición</strong><br>
            Nombre: ${requestItem.name}<br>
            Código: ${requestItem.code}<br>
            Descripción: ${requestItem.description}
        `;
    } else if (historyItem) {
        modalContent.innerHTML = `
            <strong>Historial</strong><br>
            Nombre: ${historyItem.name}<br>
            Código: ${historyItem.code}<br>
            Descripción: ${historyItem.description}
        `;
    } else if (requestItem) {
        modalContent.innerHTML = `
            <strong>Petición</strong><br>
            Nombre: ${requestItem.name}<br>
            Código: ${requestItem.code}<br>
            Descripción: ${requestItem.description}
        `;
    } else {
        modalContent.textContent = `El día ${day} no tiene eventos.`;
    }

    $('#dayInfoModal').modal('show'); // Muestra el modal usando jQuery
}

// Función para generar el calendario
function generateCalendar(year, month, history, releaseResources) {
    const calendarElement = document.getElementById('calendar');
    const monthYearDisplay = document.getElementById('month-year-display');
    calendarElement.innerHTML = ''; // Limpia el calendario

    const monthNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    monthYearDisplay.textContent = `${monthNames[month]} ${year}`;
    const date = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0).getDate(); // Último día del mes actual
    const firstDay = date.getDay();

    const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    dayNames.forEach(day => {
        const headerElement = document.createElement('div');
        headerElement.classList.add('day', 'day-header');
        headerElement.textContent = day;
        calendarElement.appendChild(headerElement);
    });

    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('day');
        calendarElement.appendChild(emptyDay);
    }

    for (let day = 1; day <= lastDay; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;

        const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        if (history.some(item => item.date === formattedDate)) {
            const eventMarker = document.createElement('div');
            eventMarker.classList.add('event', 'history');
            eventMarker.textContent = 'H'; // Marcador para historial
            dayElement.appendChild(eventMarker);
        }

        if (releaseResources.some(item => item.date === formattedDate)) {
            const eventMarker = document.createElement('div');
            eventMarker.classList.add('event', 'request');
            eventMarker.textContent = 'P'; // Marcador para petición
            dayElement.appendChild(eventMarker);
        }

        dayElement.addEventListener('click', () => openDayInfoModal(day, history, releaseResources, year, month));
        calendarElement.appendChild(dayElement);
    }
}

// Función para cambiar el mes
function changeMonth(direction) {
    currentMonth += direction;

    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }

    generateCalendar(currentYear, currentMonth, history, releaseResources);
}

// Inicialización cuando la ventana carga
window.onload = function() {
    generateCalendar(currentYear, currentMonth, history, releaseResources);

    // Añade funcionalidad a los botones de cambio de mes
    document.getElementById('prevMonth').addEventListener('click', () => changeMonth(-1));
    document.getElementById('nextMonth').addEventListener('click', () => changeMonth(1));
};

// Función para manejar la solicitud de un recurso
function requestResource(code) {
    document.getElementById('resourceCode').value = code;
    const modal = new bootstrap.Modal(document.getElementById('requestResourceModal'));
    modal.show();
}

// Agregar un evento para manejar el envío del formulario
document.getElementById('requestForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío por defecto

    const code = document.getElementById('resourceCode').value;
    const dateTime = document.getElementById('resourceDate').value;

    // Aquí puedes agregar la lógica para guardar los cambios
    // Por ejemplo, enviar los datos a un servidor o almacenarlos localmente
    alert(`Has solicitado el recurso con código: ${code} para la fecha y hora: ${dateTime}`);

    // Cerrar el modal después de enviar el formulario
    const modal = bootstrap.Modal.getInstance(document.getElementById('requestResourceModal'));
    modal.hide();
});

// Gestión de Aulas y Recursos

// Alternar la visibilidad del historial y gestionar la visibilidad de las otras secciones
function toggleHistory() {
    const historial = document.getElementById('historial');
    const classroomOptions = document.getElementById('classroom-options');
    const resourceOptions = document.getElementById('resource-options');
    
    // Ocultar las secciones de Gestión de Aulas y Gestión de Recursos si están visibles
    if (classroomOptions) classroomOptions.style.display = 'none';
    if (resourceOptions) resourceOptions.style.display = 'none';

    // Si el historial ya está visible, lo ocultamos
    if (historial.style.display === 'block') {
        historial.style.display = 'none';
    } else {
        // Si el historial no está visible, lo mostramos
        historial.style.display = 'block';
        document.getElementById('liberar-recurso').style.display = 'none';

        // Limpiar la tabla antes de mostrar nuevos datos
        const historyList = document.getElementById('history-list');
        historyList.innerHTML = '';

        // Cargar los datos de historial en la tabla (lógica de viewHistory)
        history.forEach(item => {
            const row = `
                <tr>
                    <td>${item.code}</td>
                    <td>${item.name}</td>
                    <td>${item.description}</td>
                    <td>${item.date}</td>
                </tr>
            `;
            historyList.innerHTML += row;
        });
    }
}

// Alternar visibilidad de otras secciones, como Gestión de Aulas y Gestión de Recursos
function toggleSection(sectionId) {
    // Obtener todas las secciones
    const sections = document.querySelectorAll('.info-section');

    // Ocultar todas las secciones
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Obtener la sección que debe ser mostrada
    const section = document.getElementById(sectionId);

    // Alternar visibilidad: si la sección está visible, ocultarla; si no, mostrarla
    if (section.style.display === 'block') {
        section.style.display = 'none';
    } else {
        section.style.display = 'block';
    }
}

// Función para cambiar de sección de manera sincronizada
function changeSection(sectionId) {
    // Primero, ocultamos todas las secciones
    const sections = document.querySelectorAll('.info-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Ahora mostramos la sección seleccionada
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}




function showForm(type, action) {
    // Oculta todos los formularios y campos específicos
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('classroom-fields').style.display = 'none';
    document.getElementById('resource-fields').style.display = 'none';
    document.getElementById('delete-classroom-fields').style.display = 'none';
    document.getElementById('delete-resource-fields').style.display = 'none';
    // Configura el título del formulario y muestra el contenedor principal si no es de eliminación
    document.getElementById('form-title').innerText = `${capitalize(action)} ${capitalize(type)}`;

    // Muestra el formulario adecuado según el tipo y la acción
    if (action === 'delete') {
        showDeleteForm(type);  // Mostrar los formularios de eliminación
    } else {
        document.getElementById('form-container').style.display = 'block';  // Mostrar el contenedor del formulario
        if (type === 'aula') {
            document.getElementById('classroom-fields').style.display = 'block';  // Mostrar campos para aula
        } else if (type === 'recurso') {
            document.getElementById('resource-fields').style.display = 'block';  // Mostrar campos para recurso
        }
    }
}

function handleFormSubmit(event) {
    event.preventDefault(); // Evitar recargar la página

    if (document.getElementById('delete-classroom-form').style.display === 'block' ||
        document.getElementById('delete-resource-form').style.display === 'block') {
        // Confirmación de eliminación
        const code = document.getElementById('delete-classroom-form').style.display === 'block' 
            ? document.getElementById('classroom-delete-code').value 
            : document.getElementById('resource-delete-code').value;

        const confirmDelete = confirm(`¿Estás seguro de que deseas eliminar el código ${code}? Esta acción no se puede deshacer.`);
        if (confirmDelete) {
            alert(`Eliminando el elemento con código: ${code}...`);
            document.getElementById("dynamicForm").reset(); // Limpiar el formulario
        } else {
            alert('La eliminación ha sido cancelada.');
        }
    } else {
        alert("Datos guardados correctamente");
        clearForm(); // Limpiar el formulario después de guardar
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Alternar visibilidad de los paneles de gestión
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Usar las funciones en los botones
function showClassroomOptions() {
    toggleVisibility("classroom-options");
}

function showResourceOptions() {
    toggleVisibility("resource-options");
}

// Mostrar el formulario específico de agregar, modificar o eliminar para Aulas
function showClassroomForm(action) {
    document.getElementById("form-container").style.display = "block";
    document.getElementById("form-title").textContent = `${action === 'add' ? 'Agregar' : action === 'modify' ? 'Modificar' : 'Eliminar'} Aula`;
    document.getElementById("classroom-fields").style.display = action === 'delete' ? "none" : "block";
    document.getElementById("resource-fields").style.display = "none";
    clearForm();
}

// Mostrar el formulario específico de agregar, modificar 
function showResourceForm(action) {
    document.getElementById("form-container").style.display = "block";
    document.getElementById("form-title").textContent = `${action === 'add' ? 'Agregar' : action === 'modify' ? 'Modificar' : 'Eliminar'} Recurso`;
    document.getElementById("classroom-fields").style.display = "none";
    document.getElementById("resource-fields").style.display = action === 'delete' ? "none" : "block";
    clearForm();
}
// Función para manejar el envío del formulario de eliminación de aula
function handleDeleteClassroom(event) {
    event.preventDefault(); // Evita el envío del formulario
    const classroomCode = document.getElementById('classroom-delete-code').value;
    console.log(`Aula con código ${classroomCode} eliminada.`);
    alert(`Aula con código ${classroomCode} eliminada.`);
}

// Función para manejar el envío del formulario de eliminación de recurso
function handleDeleteResource(event) {
    event.preventDefault(); // Evita el envío del formulario
    const resourceCode = document.getElementById('resource-delete-code').value;
    console.log(`Recurso con código ${resourceCode} eliminado.`);
    alert(`Recurso con código ${resourceCode} eliminado.`);
}


// Mostrar formulario de eliminación (para Aulas y Recursos)
function showDeleteForm(type) {
    if (type === 'aula') {
        document.getElementById('delete-classroom-fields').style.display = 'block';  // Mostrar campos para eliminar aula
    } else if (type === 'recurso') {
        document.getElementById('delete-resource-fields').style.display = 'block';  // Mostrar campos para eliminar recurso
    }
    document.getElementById('form-container').style.display = 'block';  // Mostrar el contenedor del formulario
}


// Limpiar formulario después de guardar
function clearForm() {
    document.getElementById("dynamicForm").reset();
}


