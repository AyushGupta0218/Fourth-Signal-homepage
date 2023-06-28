<?php
    // Database configuration
    $host = 'localhost';
    $dbname = 'test';
    $user = 'root';
    $password = 'root';

    // Connect to the database
    $conn = mysqli_connect($host, $user, $password, $dbname);

    // Check the connection
    if (!$conn) {
        die("Error connecting to the database: " . mysqli_connect_error());
    }

    $sql = "SELECT date, open,currency,open,high,low,close FROM fxrate WHERE currency = 'JPY' ";
    $result = $conn->query($sql);

    // Prepare data for the graph
$data = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Close the database connection
$conn->close();

// Output data as JSON
header('Content-Type: application/json');
echo json_encode($data);
    
?>