function showContent(section) {
    // Oculta todas las secciones de contenido
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

// Ejemplo de datos de recursos
const resources = {
    aulas: [
        { code: 'A001', name: 'Aula de Matemáticas 101', description: 'Aula equipada para clases de matemáticas.', availability: 'Disponible' },
        { code: 'A002', name: 'Aula de Ciencias 102', description: 'Aula equipada para experimentos de ciencias.', availability: 'Disponible' },
        { code: 'A003', name: 'Aula de Lengua 103', description: 'Aula dedicada a clases de lengua y literatura.', availability: 'Disponible' },
        { code: 'A004', name: 'Aula de Historia 104', description: 'Aula con recursos para clases de historia.', availability: 'Disponible' },
        { code: 'A005', name: 'Aula de Arte 105', description: 'Aula equipada para clases de arte y manualidades.', availability: 'Disponible' },
        { code: 'A006', name: 'Aula de Música 106', description: 'Aula diseñada para clases de música y práctica instrumental.', availability: 'Disponible' },
        { code: 'A007', name: 'Aula de Tecnología 107', description: 'Aula equipada con computadoras y tecnología educativa.', availability: 'Disponible' },
        { code: 'A008', name: 'Aula de Educación Física 108', description: 'Aula para actividades de educación física y deportes.', availability: 'Disponible' },
        { code: 'A009', name: 'Aula de Idiomas 109', description: 'Aula para clases de idiomas extranjeros.', availability: 'Disponible' },
        { code: 'A010', name: 'Aula de Informática 110', description: 'Aula con equipos para clases de informática.', availability: 'Disponible' },
        { code: 'A011', name: 'Aula de Biología 111', description: 'Aula con recursos para clases de biología.', availability: 'Disponible' },
        { code: 'A012', name: 'Aula de Química 112', description: 'Aula equipada para clases de química.', availability: 'Disponible' },
        { code: 'A013', name: 'Aula de Física 113', description: 'Aula con recursos para clases de física.', availability: 'Disponible' },
        { code: 'A014', name: 'Aula de Ciencias Sociales 114', description: 'Aula para clases de ciencias sociales.', availability: 'Disponible' },
        { code: 'A015', name: 'Aula de Psicología 115', description: 'Aula dedicada a clases de psicología.', availability: 'Disponible' },
        { code: 'A016', name: 'Aula de Filosofía 116', description: 'Aula para el estudio de la filosofía.', availability: 'Disponible' },
        { code: 'A017', name: 'Aula de Diseño Gráfico 117', description: 'Aula equipada para clases de diseño gráfico.', availability: 'Disponible' },
        { code: 'A018', name: 'Aula de Educación Artística 118', description: 'Aula para clases de educación artística.', availability: 'Disponible' },
        { code: 'A019', name: 'Aula de Robótica 119', description: 'Aula para el estudio de robótica y programación.', availability: 'Disponible' },
        { code: 'A020', name: 'Aula de Ética 120', description: 'Aula para clases de ética y valores.', availability: 'Disponible' },
        { code: 'A021', name: 'Aula de Medio Ambiente 121', description: 'Aula para el estudio del medio ambiente.', availability: 'Disponible' },
        { code: 'A022', name: 'Aula de Educación Cívica 122', description: 'Aula dedicada a clases de educación cívica.', availability: 'Disponible' },
        { code: 'A023', name: 'Aula de Desarrollo Personal 123', description: 'Aula para clases de desarrollo personal y social.', availability: 'Disponible' },
        { code: 'A024', name: 'Aula de Capacitación 124', description: 'Aula para programas de capacitación y talleres.', availability: 'Disponible' },
        { code: 'A025', name: 'Aula de Entrenamiento 125', description: 'Aula equipada para entrenamiento profesional.', availability: 'Disponible' },
        { code: 'A026', name: 'Aula de Literatura 126', description: 'Aula para el estudio de literatura universal.', availability: 'Disponible' },
        { code: 'A027', name: 'Aula de Historia del Arte 127', description: 'Aula dedicada a la historia del arte.', availability: 'Disponible' },
        { code: 'A028', name: 'Aula de Emprendimiento 128', description: 'Aula para clases de emprendimiento y negocios.', availability: 'Disponible' },
        { code: 'A029', name: 'Aula de Capacidades Diferentes 129', description: 'Aula adaptada para clases inclusivas.', availability: 'Disponible' },
        { code: 'A030', name: 'Aula de Juegos Educativos 130', description: 'Aula equipada para actividades lúdicas y educativas.', availability: 'Disponible' },
        { code: 'A031', name: 'Aula de Geografía 131', description: 'Aula dedicada a clases de geografía.', availability: 'Disponible' },
        { code: 'A032', name: 'Aula de Matemáticas Aplicadas 132', description: 'Aula para el estudio de matemáticas aplicadas.', availability: 'Disponible' },
        { code: 'A033', name: 'Aula de Física Aplicada 133', description: 'Aula para la aplicación de conceptos físicos.', availability: 'Disponible' },
        { code: 'A034', name: 'Aula de Tecnología Educativa 134', description: 'Aula para el uso de tecnología en la educación.', availability: 'Disponible' },
        { code: 'A035', name: 'Aula de Lingüística 135', description: 'Aula dedicada a la enseñanza de la lingüística.', availability: 'Disponible' },
        { code: 'A036', name: 'Aula de Literatura Infantil 136', description: 'Aula para la promoción de la lectura infantil.', availability: 'Disponible' },
        { code: 'A037', name: 'Aula de Ciencias de la Computación 137', description: 'Aula para clases de ciencias de la computación.', availability: 'Disponible' },
        { code: 'A038', name: 'Aula de Educación Sexual 138', description: 'Aula para clases de educación sexual.', availability: 'Disponible' },
        { code: 'A039', name: 'Aula de Debate 139', description: 'Aula para la práctica de habilidades de debate.', availability: 'Disponible' },
        { code: 'A040', name: 'Aula de Orientación Vocacional 140', description: 'Aula dedicada a la orientación vocacional de estudiantes.', availability: 'Disponible' },
    ],
    tecnologia: [
        { code: 'T001', name: 'Proyector', description: 'Dispositivo para proyectar imágenes y videos.', availability: 'Disponible' },
        { code: 'T002', name: 'Pantalla Interactiva', description: 'Pantalla táctil para presentaciones y clases.', availability: 'Disponible' },
        { code: 'T003', name: 'Laptop', description: 'Computadora portátil para uso educativo y laboral.', availability: 'Disponible' },
        { code: 'T004', name: 'Tableta', description: 'Dispositivo portátil con pantalla táctil.', availability: 'Disponible' },
        { code: 'T005', name: 'Cámara Web', description: 'Cámara para videoconferencias y clases en línea.', availability: 'Disponible' },
        { code: 'T006', name: 'Escáner', description: 'Dispositivo para digitalizar documentos.', availability: 'No disponible' },
        { code: 'T007', name: 'Impresora', description: 'Dispositivo para imprimir documentos y trabajos.', availability: 'Disponible' },
        { code: 'T008', name: 'Router', description: 'Dispositivo para conexión a internet y red local.', availability: 'Disponible' },
        { code: 'T009', name: 'Teclado Inalámbrico', description: 'Teclado sin cables para mayor comodidad.', availability: 'Disponible' },
        { code: 'T010', name: 'Mouse Inalámbrico', description: 'Ratón sin cables para uso en computadoras.', availability: 'Disponible' },
        { code: 'T011', name: 'Altavoces', description: 'Dispositivos para amplificar el sonido.', availability: 'Disponible' },
        { code: 'T012', name: 'Micrófono', description: 'Dispositivo para grabar y amplificar voz.', availability: 'Disponible' },
        { code: 'T013', name: 'Hub USB', description: 'Dispositivo para expandir puertos USB.', availability: 'No disponible' },
        { code: 'T014', name: 'Proyector de Documentos', description: 'Dispositivo para proyectar documentos físicos.', availability: 'Disponible' },
        { code: 'T015', name: 'Smartphone', description: 'Teléfono inteligente con múltiples funciones.', availability: 'Disponible' },
        { code: 'T016', name: 'Raspberry Pi', description: 'Mini computadora para proyectos de programación.', availability: 'Disponible' },
        { code: 'T017', name: 'Consola de Videojuegos', description: 'Dispositivo para jugar videojuegos.', availability: 'Disponible' },
        { code: 'T018', name: 'Dron', description: 'Vehículo aéreo no tripulado para filmación y exploración.', availability: 'No disponible' },
        { code: 'T019', name: 'Disco Duro Externo', description: 'Almacenamiento portátil de datos.', availability: 'Disponible' },
        { code: 'T020', name: 'Auriculares', description: 'Dispositivos para escuchar audio.', availability: 'Disponible' },
        { code: 'T021', name: 'Cámara Digital', description: 'Cámara para tomar fotos de alta calidad.', availability: 'Disponible' },
        { code: 'T022', name: 'Flash USB', description: 'Dispositivo de almacenamiento portátil.', availability: 'Disponible' },
        { code: 'T023', name: 'Cable HDMI', description: 'Cable para transmitir audio y video.', availability: 'Disponible' },
        { code: 'T024', name: 'Adaptador de Corriente', description: 'Dispositivo para cargar dispositivos electrónicos.', availability: 'Disponible' },
        { code: 'T025', name: 'Gafas de Realidad Virtual', description: 'Dispositivo para experiencias inmersivas en 3D.', availability: 'Disponible' },
    ],
    materiales: [
        { code: 'M001', name: 'Papel Bond', description: 'Papel blanco de alta calidad para impresión.', availability: 'Disponible' },
        { code: 'M002', name: 'Cartulina', description: 'Papel grueso ideal para manualidades.', availability: 'Disponible' },
        { code: 'M003', name: 'Tijeras', description: 'Herramienta para cortar papel y otros materiales.', availability: 'Disponible' },
        { code: 'M004', name: 'Pegamento', description: 'Adhesivo para unir materiales.', availability: 'Disponible' },
        { code: 'M005', name: 'Marcadores', description: 'Marcadores de colores para escribir y dibujar.', availability: 'Disponible' },
        { code: 'M006', name: 'Resaltadores', description: 'Marcadores fluorescentes para resaltar texto.', availability: 'Disponible' },
        { code: 'M007', name: 'Lápices', description: 'Utensilio de escritura con grafito.', availability: 'Disponible' },
        { code: 'M008', name: 'Goma de Borrar', description: 'Herramienta para borrar marcas de lápiz.', availability: 'Disponible' },
        { code: 'M009', name: 'Regla', description: 'Herramienta para medir y trazar líneas rectas.', availability: 'Disponible' },
        { code: 'M010', name: 'Cuaderno', description: 'Libro de hojas en blanco para escribir.', availability: 'Disponible' },
        { code: 'M011', name: 'Carpeta', description: 'Organizador de hojas y documentos.', availability: 'Disponible' },
        { code: 'M012', name: 'Post-it', description: 'Notas adhesivas para recordatorios.', availability: 'Disponible' },
        { code: 'M013', name: 'Pinceles', description: 'Herramientas para pintar con acuarelas o acrílicos.', availability: 'Disponible' },
        { code: 'M014', name: 'Pintura Acrílica', description: 'Pintura a base de agua de secado rápido.', availability: 'Disponible' },
        { code: 'M015', name: 'Tiza', description: 'Material para escribir en pizarras.', availability: 'Disponible' },
        { code: 'M016', name: 'Papel de Lija', description: 'Papel abrasivo para alisar superficies.', availability: 'Disponible' },
        { code: 'M017', name: 'Cinta Adhesiva', description: 'Cinta para pegar o unir materiales.', availability: 'Disponible' },
        { code: 'M018', name: 'Cartón', description: 'Material ligero y resistente, ideal para manualidades.', availability: 'Disponible' },
        { code: 'M019', name: 'Papel Crepé', description: 'Papel arrugado y colorido para decoraciones.', availability: 'Disponible' },
        { code: 'M020', name: 'Alambre', description: 'Material flexible y resistente para estructuras.', availability: 'Disponible' },
        { code: 'M021', name: 'Plastilina', description: 'Material moldeable para crear figuras.', availability: 'Disponible' },
        { code: 'M022', name: 'Foam', description: 'Material ligero y suave para manualidades.', availability: 'Disponible' },
        { code: 'M023', name: 'Cuentas', description: 'Elementos decorativos para manualidades.', availability: 'Disponible' },
        { code: 'M024', name: 'Lana', description: 'Material textil para tejer y crear.', availability: 'Disponible' },
        { code: 'M025', name: 'Cuerda', description: 'Material resistente para atar o colgar.', availability: 'Disponible' },
        { code: 'M026', name: 'Carteles', description: 'Pósteres informativos para decoración.', availability: 'Disponible' },
        { code: 'M027', name: 'Etiquetas', description: 'Papel para identificar objetos o documentos.', availability: 'Disponible' },
        { code: 'M028', name: 'Material Didáctico', description: 'Recursos para facilitar el aprendizaje.', availability: 'Disponible' },
        { code: 'M029', name: 'Plantillas', description: 'Diseños prehechos para guiar la creación.', availability: 'Disponible' },
        { code: 'M030', name: 'Sellos', description: 'Herramientas para estampar imágenes o textos.', availability: 'Disponible' },
    ],
    herramientas: [
        { code: 'H001', name: 'Martillo', description: 'Herramienta de golpeo para clavar clavos.', availability: 'Disponible' },
        { code: 'H002', name: 'Destornillador', description: 'Herramienta para atornillar y desatornillar.', availability: 'Disponible' },
        { code: 'H003', name: 'Alicates', description: 'Herramienta para sujetar o cortar alambre.', availability: 'Disponible' },
        { code: 'H004', name: 'Sierra Manual', description: 'Herramienta para cortar madera y otros materiales.', availability: 'No disponible' },
        { code: 'H005', name: 'Cinta Métrica', description: 'Herramienta para medir distancias.', availability: 'Disponible' },
        { code: 'H006', name: 'Nivel de Burbuja', description: 'Herramienta para verificar la horizontalidad y verticalidad.', availability: 'Disponible' },
        { code: 'H007', name: 'Llave Inglesa', description: 'Herramienta ajustable para apretar o aflojar tuercas.', availability: 'Disponible' },
        { code: 'H008', name: 'Taladro', description: 'Herramienta eléctrica para perforar agujeros.', availability: 'No disponible' },
        { code: 'H009', name: 'Lijadora', description: 'Herramienta eléctrica para alisar superficies.', availability: 'Disponible' },
        { code: 'H010', name: 'Pala', description: 'Herramienta para excavar y mover tierra.', availability: 'Disponible' },
        { code: 'H011', name: 'Rasqueta', description: 'Herramienta para raspar o quitar pintura.', availability: 'Disponible' },
        { code: 'H012', name: 'Cuchillo de Corta Cartón', description: 'Herramienta para cortar cartón y otros materiales finos.', availability: 'Disponible' },
        { code: 'H013', name: 'Gafas de Seguridad', description: 'Protección ocular para trabajos de construcción.', availability: 'Disponible' },
        { code: 'H014', name: 'Guantes de Trabajo', description: 'Protección para las manos durante el trabajo.', availability: 'No disponible' },
        { code: 'H015', name: 'Escalera', description: 'Herramienta para alcanzar lugares altos.', availability: 'Disponible' },
        { code: 'H016', name: 'Cortadora de Césped', description: 'Herramienta para cortar el césped del jardín.', availability: 'Disponible' },
        { code: 'H017', name: 'Compresora de Aire', description: 'Herramienta para inflar neumáticos y otros objetos.', availability: 'Disponible' },
        { code: 'H018', name: 'Llave de Boca', description: 'Herramienta fija para apretar tuercas.', availability: 'No disponible' },
        { code: 'H019', name: 'Sierra Circular', description: 'Herramienta eléctrica para cortes rápidos y precisos.', availability: 'Disponible' },
        { code: 'H020', name: 'Pintura Spray', description: 'Herramienta para aplicar pintura en spray.', availability: 'Disponible' },
        { code: 'H021', name: 'Paleta de Pintor', description: 'Herramienta para aplicar y extender pintura.', availability: 'Disponible' },
        { code: 'H022', name: 'Cortatubos', description: 'Herramienta para cortar tubos de metal.', availability: 'No disponible' },
        { code: 'H023', name: 'Mascarilla de Protección', description: 'Protección para las vías respiratorias.', availability: 'Disponible' },
        { code: 'H024', name: 'Tijeras de Jardín', description: 'Herramienta para podar plantas.', availability: 'Disponible' },
        { code: 'H025', name: 'Sierra de Calar', description: 'Herramienta eléctrica para cortes en madera y metal.', availability: 'Disponible' },
    ],
    libros: [
        { code: 'L001', name: 'Matemáticas Avanzadas', description: 'Libro de texto de matemáticas', availability: 'Disponible' },
        { code: 'L002', name: 'Física Moderna', description: 'Libro de texto de física', availability: 'Disponible' },
        { code: 'L003', name: 'Química General', description: 'Introducción a la química básica', availability: 'Disponible' },
        { code: 'L004', name: 'Biología Molecular', description: 'Estudio de la biología a nivel molecular', availability: 'Disponible' },
        { code: 'L005', name: 'Historia Universal', description: 'Libro sobre los eventos más importantes de la historia', availability: 'No disponible' },
        { code: 'L006', name: 'Literatura Clásica', description: 'Colección de obras literarias clásicas', availability: 'Disponible' },
        { code: 'L007', name: 'Programación en Python', description: 'Guía de inicio a la programación en Python', availability: 'Disponible' },
        { code: 'L008', name: 'Desarrollo Web', description: 'Manual de desarrollo web moderno', availability: 'Disponible' },
        { code: 'L009', name: 'Economía para Todos', description: 'Introducción a los conceptos económicos básicos', availability: 'No disponible' },
        { code: 'L010', name: 'Filosofía Contemporánea', description: 'Exploración de las corrientes filosóficas modernas', availability: 'Disponible' },
        { code: 'L011', name: 'Psicología Infantil', description: 'Estudio del desarrollo psicológico en la infancia', availability: 'Disponible' },
        { code: 'L012', name: 'Geografía del Mundo', description: 'Análisis de la geografía y culturas del mundo', availability: 'Disponible' },
        { code: 'L013', name: 'Ética y Moral', description: 'Reflexiones sobre la ética en la sociedad actual', availability: 'Disponible' },
        { code: 'L014', name: 'Arte Moderno', description: 'Historia del arte desde el siglo XX hasta hoy', availability: 'No disponible' },
        { code: 'L015', name: 'Redes Sociales', description: 'Impacto de las redes sociales en la comunicación', availability: 'Disponible' },
        { code: 'L016', name: 'Música y Cultura', description: 'Estudio de la relación entre música y cultura', availability: 'Disponible' },
        { code: 'L017', name: 'Matemáticas para la Vida', description: 'Aplicaciones de las matemáticas en situaciones cotidianas', availability: 'Disponible' },
        { code: 'L018', name: 'Ciencia Ficción', description: 'Antología de cuentos de ciencia ficción', availability: 'No disponible' },
        { code: 'L019', name: 'Cuentos Infantiles', description: 'Colección de cuentos para niños', availability: 'Disponible' },
        { code: 'L020', name: 'Salud y Bienestar', description: 'Guía para un estilo de vida saludable', availability: 'Disponible' },
    ]
};  

// Función para filtrar recursos
function filterResources(category) {
    const resourceList = document.getElementById('resource-list');
    resourceList.innerHTML = ''; // Limpiar la tabla antes de mostrar nuevos datos

    resources[category].forEach(resource => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${resource.code}</td>
            <td>${resource.name}</td>
            <td>${resource.description}</td>
            <td>${resource.availability}</td>
            <td><button class="btn btn-success" onclick="reserveResource('${resource.code}')">Reservar</button></td>
        `;
        resourceList.appendChild(row);
    });
}

// Función para reservar un recurso
function reserveResource(code) {
    alert(`Recurso ${code} reservado con éxito!`);
}
// Función para mostrar la tabla de recursos según la categoría seleccionada
function filterResources(category) {
    // Obtén la lista de recursos de la categoría seleccionada
    const resourceList = resources[category];
    

    // Selecciona el elemento HTML donde se insertarán los recursos
    const resourceListElement = document.getElementById('resource-list');

    // Limpiar el contenido previo
    resourceListElement.innerHTML = '';

    // Recorre los recursos de la categoría y agrega cada uno a la tabla
    resourceList.forEach(resource => {
        const row = `
            <tr>
                <td>${resource.code}</td>
                <td>${resource.name}</td>
                <td>${resource.description}</td>
                <td>${resource.availability}</td>
                <td>
                    <button class="btn btn-danger" onclick="requestResource('${resource.code}')">Solicitar</button>
                </td>
            </tr>
        `;
        resourceListElement.innerHTML += row;
    });
}

// Función para manejar la solicitud de un recurso
function requestResource(code) {
    alert(`Has solicitado el recurso con código: ${code}`);
    // Aquí podrías agregar lógica adicional para gestionar la solicitud
}

// Función para ver el historial de recursos solicitados
function viewHistory() {
    // Lógica para mostrar el historial de recursos solicitados
    alert('Aquí se mostrará el historial de recursos solicitados.');
    // Puedes agregar aquí una funcionalidad real para mostrar el historial en la interfaz
}

// Función para liberar un recurso
function releaseResource() {
    // Lógica para liberar el recurso seleccionado
    alert('Función para liberar el recurso seleccionado.');
    // Puedes agregar aquí funcionalidad adicional para liberar el recurso
}


// Función para confirmar la liberación de un recurso específico
function confirmRelease(resourceCode) {
    alert(`Recurso con código ${resourceCode} ha sido liberado.`);
    // Aquí puedes agregar lógica adicional para actualizar la base de datos o el estado del recurso.
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

function releaseResource() {
    document.getElementById('historial').style.display = 'none';
    document.getElementById('liberar-recurso').style.display = 'block';

    const releaseList = document.getElementById('release-list');
    releaseList.innerHTML = ''; // Limpiar la tabla antes de mostrar nuevos datos

    releaseResources.forEach(item => {
        const row = `
            <tr>
                <td>${item.code}</td>
                <td>${item.name}</td>
                <td>${item.description}</td>
                <td>${item.date}</td>
                <td><button class="btn btn-danger" onclick="confirmRelease('${item.code}')">Liberar</button></td>
            </tr>
        `;
        releaseList.innerHTML += row;
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

