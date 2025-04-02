<header>
    <div class="Medium">
        <h2><a href="index.php">Medium</a></h2>
    </div>

    <?php 
    // Include navbar only if the file exists
    if (file_exists('navbar.php')) {
        include 'navbar.php'; 
    } else {
        echo "<p style='color: red;'>Navbar not found!</p>"; // Debugging message
    }
    ?>
</header>
