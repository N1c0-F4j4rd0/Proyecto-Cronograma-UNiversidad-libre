<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];

    $sql = "SELECT contrasena FROM usuario WHERE correo = ?";
    
    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("s", $correo);
        $stmt->execute();
        $stmt->bind_result($hashed_password);

        if ($stmt->fetch()) {
            if (password_verify($contrasena, $hashed_password)) {
                echo "Inicio de sesión exitoso.";
            } else {
                echo "Contraseña incorrecta.";
            }
        } else {
            echo "Usuario no encontrado.";
        }

        $stmt->close();
    }
}

$conn->close();
?>
