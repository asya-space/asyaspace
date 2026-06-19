<?php
$con = mysqli_connect("localhost","asya_test","oB%^B6COHnnc8r-0","asya_startdb");

$txtName = $_POST['txtName'];
$txtEmail = $_POST['txtEmail'];
$txtMessage = $_POST['txtMessage'];

$sql = "INSERT INTO `tbl_users` (`id`, `user`, `email`, `message`) VALUES ('0', '$txtName', '$txtEmail', '$txtMessage')";
$url = "https://asyaspace.com/index2.html";
$backUrl = "https://asyaspace.com/index3.html";
$result = mysqli_query($con, $sql);
if($result) {
	echo header("Location: https://asyaspace.com/index2.html");
   exit();
} else {
   echo header("Location: https://asyaspace.com/index3.html");
   exit();
}
?>