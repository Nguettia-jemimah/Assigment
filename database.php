<?php
$host = "db";          // The hostname of your DB server (in Docker, it’s the service name 'db')
$user = "user";        // The username for connecting to the DB
$password = "password";// The password for the DB user
$database = "medium_clone"; // The name of the database you want to use

// Create a new connection to the database
$conn = new mysqli($host, $user, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// You can also close the connection when done (optional)
// $conn->close(); // Uncomment this if you want to close the connection after using it
?>
