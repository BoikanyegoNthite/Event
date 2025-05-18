<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "event_db";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$attendanceType = $_POST['attendanceType'];

// Define the event date (hardcoded or fetched from DB/config)
$eventDate = "21 June 2025";

$sql = "INSERT INTO registrations ( name, email, phone, attendance_type)
        VALUES (?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $name, $email, $phone, $attendanceType);

if ($stmt->execute()) {
  echo "🎉 Thank you, <strong>$name</strong>! You have successfully registered for the Fun Walk event on <strong>$eventDate</strong>. We can't wait to see you there!";
} else {
  echo "❌ Registration failed: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
