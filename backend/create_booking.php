$data = json_decode(file_get_contents("php://input"), true);

$user_id = $data['user_id'];
$tour_name = $data['tour_name'];
$tour_date = $data['booking_date'];
$price = $data['total_price'];
$image_url = $data['image_url'];

$sql = "INSERT INTO bookings (user_id, tour_name, tour_date, price, status, image_url) 
        VALUES ('$user_id', '$tour_name', '$tour_date', '$price', 'Confirmed', '$image_url')";