<?php
 

 $dbhost = "localhost";
 $dbuser = "root";
 $dbpass = "piyushbangar";
 $db = "example";
 
if(isset($_POST['submit'])){
$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
mysql_select_db("college",$conn);
$query="insert into additional_info(board,boardmarks,mains,advance,state,category) as ('$_POST[board]','$_POST[boardm]','$_POST[mainsm]','$_POST[advancedm]','$_POST[state],'$_POST[cate]')";	
mysql_query($query,$conn);
}

   
?>