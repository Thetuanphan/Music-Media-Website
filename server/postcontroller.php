<?php

   $action =  $_GET['action'];

    //login
    if($action == "login"){
        login();
    }
    //load nội dung của người dùng
    elseif($action == "select"){
        $ma = $_COOKIE['mand'];
        $stringsql ="SELECT * FROM `album` WHERE `MaNguoiDung` = ".$ma."";
        select($stringsql);
    }
    //tìm kiếm album
    elseif($action =="search"){      
        $keyword=$_GET['keyword'];     
        $stringsql ="SELECT * FROM `album` WHERE `TenAlbum` like '%".$keyword."%'";
        select($stringsql);
    }

    //funtion
    //funtion login ajax
    function login(){
        $user = $_GET['user'];
        $pass = $_GET['pass'];    
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "wednhac";

            // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        $conn->set_charset('utf8');
        // Check connection
        if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        }
        //SELECT * FROM nguoidung WHERE TaiKhoan LIKE '%linh%' AND MatKhau LIKE '%1%'
        $sql = "SELECT * FROM NguoiDung WHERE TaiKhoan LIKE '".$user."' AND MatKhau LIKE '".$pass."' ";
        $result = $conn->query($sql);
        //http://localhost/Music-Media-Website/server/postcontroller.php?action=login&user=linh&pass=1
        if ($result->num_rows > 0) {
            $data = $result->fetch_all(MYSQLI_ASSOC);    
           // var_dump($data); 
            $mand = $data[0]['MaNguoiDung'];
            $tennd = $data[0]['TenNguoiDung'];
            $taikhoan =$data[0]['TaiKhoan'];
            $matkhau = $data[0]['MatKhau'];
            $hinhanh = $data[0]['Avatar'];
            //lưu thông tin người dùng vào cookie
            setcookie('mand', $mand, time() + (86400 * 30),"/"); // 86400 = 1 day
            setcookie('tennd', $tennd, time() + (86400 * 30),"/"); // 86400 = 1 day
            setcookie('tk', $taikhoan, time() + (86400 * 30),"/"); // 86400 = 1 day
            setcookie('mk', $matkhau, time() + (86400 * 30),"/"); // 86400 = 1 day
            setcookie('ava', $hinhanh, time() + (86400 * 30),"/"); // 86400 = 1 day
            //chuyển mảng kết quả thành mảng kết quả json
		    //echo json_encode($data);
            echo "true";   
        }
         else {
            echo "false";
         }
        $conn->close();
    }
    //funtion select ajax
    function select($stringsql){
                       
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "wednhac";

            // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        $conn->set_charset('utf8');
        // Check connection
        if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        }
        $sql = "".$stringsql."";
 
        $result = $conn->query($sql);
       
        //http://localhost/Music-Media-Website/server/postcontroller.php?action=search
        if ($result->num_rows > 0) {
            $data = $result->fetch_all(MYSQLI_ASSOC); 
            echo json_encode($data,JSON_UNESCAPED_UNICODE);
        }
         else {
            echo "0 result";

         }
        $conn->close();

    }

          
?>