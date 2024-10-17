<?php
$servername = "localhost";
$username = "root";  // Cambia según tu configuración
$password = "";      // Cambia según tu configuración
$dbname = "gestion_recursos";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
