// Seleccionamos los elementos del DOM
const calendarSection = document.getElementById('calendar-section');
const statsSection = document.getElementById('stats');
const mainTitle = document.getElementById('main-title');
const submenu = document.getElementById('submenu');

// Nuevos elementos para Registro y Login
const registerSection = document.getElementById('register-section');
const loginSection = document.getElementById('login-section');

// Manejamos los clics del menú principal
document.getElementById('menu-calendario').addEventListener('click', function() {
    mainTitle.textContent = "Calendario de Reservas";
    calendarSection.style.display = 'block';
    statsSection.style.display = 'none';
    registerSection.style.display = 'none';
    loginSection.style.display = 'none';
    submenu.style.display = 'flex';
});

document.getElementById('menu-aulas').addEventListener('click', function() {
    mainTitle.textContent = "Gestión de Aulas";
    calendarSection.style.display = 'none';
    statsSection.style.display = 'flex';
    registerSection.style.display = 'none';
    loginSection.style.display = 'none';
    submenu.style.display = 'flex';
});

document.getElementById('menu-recursos').addEventListener('click', function() {
    mainTitle.textContent = "Gestión de Recursos";
    calendarSection.style.display = 'none';
    statsSection.style.display = 'flex';
    registerSection.style.display = 'none';
    loginSection.style.display = 'none';
    submenu.style.display = 'flex';
});

document.getElementById('menu-cuenta').addEventListener('click', function() {
    mainTitle.textContent = "Mi Cuenta";
    calendarSection.style.display = 'none';
    statsSection.style.display = 'none';
    registerSection.style.display = 'none';
    loginSection.style.display = 'none';
    submenu.style.display = 'none';
});

// Opciones para Registro y Login
document.getElementById('menu-registro').addEventListener('click', function() {
    mainTitle.textContent = "Registro de Usuario";
    calendarSection.style.display = 'none';
    statsSection.style.display = 'none';
    registerSection.style.display = 'block';
    loginSection.style.display = 'none';
    submenu.style.display = 'none';
});

document.getElementById('menu-login').addEventListener('click', function() {
    mainTitle.textContent = "Inicio de Sesión";
    calendarSection.style.display = 'none';
    statsSection.style.display = 'none';
    registerSection.style.display = 'none';
    loginSection.style.display = 'block';
    submenu.style.display = 'none';
});

// Eventos para los botones del submenú
document.getElementById('btn-resumen').addEventListener('click', function() {
    alert('Mostrar Resumen');
});

document.getElementById('btn-panel-control').addEventListener('click', function() {
    alert('Mostrar Panel de Control');
});

document.getElementById('btn-historial').addEventListener('click', function() {
    alert('Mostrar Historial');
});

// calendario básico 
function loadCalendar() {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Dom</th>
                    <th>Lun</th>
                    <th>Mar</th>
                    <th>Mié</th>
                    <th>Jue</th>
                    <th>Vie</th>
                    <th>Sáb</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td><td></td><td></td><td></td><td>1</td><td>2</td><td>3</td>
                </tr>
                <tr>
                    <td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>
                </tr>
                <tr>
                    <td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td>
                </tr>
                <tr>
                    <td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td>
                </tr>
                <tr>
                    <td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td>
                </tr>
            </tbody>
        </table>
    `;
}

loadCalendar();

