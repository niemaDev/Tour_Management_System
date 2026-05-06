<?php
// Clear any previous output buffers to ensure only JSON is sent
ob_clean(); 

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include 'db.php';

// Disable error reporting for display, but keep it for logs 
// This prevents PHP errors from corrupting the JSON output
error_reporting(0); 

$user_id = isset($_GET['user_id']) ? $conn->real_escape_string($_GET['user_id']) : null;

try {
    if ($user_id) {
        $sql = "SELECT * FROM bookings WHERE user_id = '$user_id' ORDER BY id ASC";
    } else {
        // We use a simpler query first to see if it works
        // We will add the JOIN for customer_name once this is stable
        $sql = "SELECT * FROM bookings ORDER BY id ASC";
    }

    $result = $conn->query($sql);
    $bookings = [];

    if ($result) {
        while ($row = $result->fetch_assoc()) {
            $bookings[] = $row;
        }
        echo json_encode($bookings);
    } else {
        echo json_encode(["error" => "Query failed: " . $conn->error]);
    }
} catch (Exception $e) {
    echo json_encode(["error" => "Server exception: " . $e->getMessage()]);
}

$conn->close();
?>