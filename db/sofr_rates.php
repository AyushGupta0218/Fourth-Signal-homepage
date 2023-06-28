<!DOCTYPE html>
<html>
<head>
    <title>Sofr rates</title>
</head>
<body>
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

    // Check if a file was uploaded successfully
    if (isset($_FILES['csv_file']) && $_FILES['csv_file']['error'] === UPLOAD_ERR_OK) {
        // Get the uploaded file details
        $file = $_FILES['csv_file']['tmp_name'];
        $fileName = $_FILES['csv_file']['name'];

        // Verify file extension
        $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
        if ($fileExtension === 'csv') {
            // Open the CSV file
            if (($handle = fopen($file, 'r')) !== false) {
                // Skip the header row if needed
                // fgetcsv($handle);

                // Read and insert data
                while (($data = fgetcsv($handle)) !== false) {
                    // Parse and sanitize the data
                    $column1 = mysqli_real_escape_string($conn, $data[0]);
                    $column3 = mysqli_real_escape_string($conn, $data[1]);
                    $column2 = mysqli_real_escape_string($conn, $data[2]);
                    
                    // ...

                    // Create the INSERT query
                    $query = "INSERT INTO sofr (date,rate, type  ) VALUES ('$column1', '$column2','$column3')";

                    // Execute the query
                    if (mysqli_query($conn, $query)) {
                        echo "Row inserted successfully!<br>";
                    } else {
                        echo "Error inserting row: " . mysqli_error($conn) . "<br>";
                    }
                }

                // Close the file
                fclose($handle);
            } else {
                echo "Error opening the CSV file.";
            }
        } else {
            echo "Invalid file format. Only CSV files are allowed.";
        }
    } else {
        echo "Error uploading the file.";
    }

    // Close the database connection
    mysqli_close($conn);
    ?>

    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" enctype="multipart/form-data">
        <input type="file" name="csv_file" accept=".csv">
        <input type="submit" value="Upload">
    </form>
</body>
</html>
