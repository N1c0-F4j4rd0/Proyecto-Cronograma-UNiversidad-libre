<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];
    $contrasena = password_hash($_POST['contrasena'], PASSWORD_BCRYPT);  // Encripta la contraseña

    $sql = "INSERT INTO usuario (nombre, apellidos, correo, telefono, contrasena) VALUES (?, ?, ?, ?, ?)";

    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("sssss", $nombre, $apellidos, $correo, $telefono, $contrasena);

        if ($stmt->execute()) {
            echo "Usuario registrado exitosamente.";
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    }
}

$conn->close();
?>
