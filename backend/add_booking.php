<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include 'db_connection.php'; // Ensure you have this file to connect to your DB

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->user_id) && !empty($data->tour_name)) {
    $user_id = $data->user_id;
    $tour_name = $data->tour_name;
    $tour_date = $data->tour_date;
    $price = $data->price;
    $image_url = $data->image_url;
    $status = $data->status;

    $query = "INSERT INTO bookings (user_id, tour_name, tour_date, price, image_url, status) 
              VALUES (?, ?, ?, ?, ?, ?)";
    
    $stmt = $conn->prepare($query);
    $stmt->bind_param("isssss", $user_id, $tour_name, $tour_date, $price, $image_url, $status);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Booking saved successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Database error: " . $stmt->error]);
    }
    $stmt->close();
} else {
    echo json_encode(["success" => false, "message" => "Incomplete data"]);
}
$conn->close();
?>