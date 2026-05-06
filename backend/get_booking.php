<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json");

include 'db_connection.php';

$user_id = isset($_GET['user_id']) ? $_GET['user_id'] : null;

if (!$user_id) {
    echo json_encode(["error" => "No user ID provided"]);
    exit();
}

$sql = "SELECT b.id, t.tour_name, t.price, t.image_url, b.tour_date, b.status 
        FROM bookings b
        JOIN tours t ON b.tour_id = t.id
        WHERE b.user_id = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

$data = [];
while($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
$stmt->close();
$conn->close();
?>