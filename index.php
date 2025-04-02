<?php
// Start the session
session_start();

// Include the header (make sure it does not duplicate <html>, <head>)
require_once 'header.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Medium Clone</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Include Navbar -->
    <?php require_once 'navbar.php'; ?>

    <!-- Main Content Section -->
    <div class="container">
        <div class="content">
            <?php require_once 'blog.php'; ?>
        </div>

        <!-- Sidebar Section -->
        <aside class="sidebar">
            <?php require_once 'sidebar.php'; ?>
        </aside>
    </div>

    <!-- Include Footer -->
    <?php require_once 'footer.php'; ?>

    <!-- JavaScript -->
    <script src="script.js"></script>

</body>
</html>
