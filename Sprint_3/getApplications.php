<?php
require '/home/earwiggr/ATSdb.php';

// 限定SQL查询条件以只获取ID为1的记录
$sql = "SELECT * FROM newApplicationsTest WHERE ApplicationId = 1";

$result = mysqli_query($cnxn, $sql);

// 初始化数组来存储查询结果
$applications = [];

// 检查是否有返回的行
if ($row = mysqli_fetch_assoc($result)) {
    $applications[] = $row;
}

header('Content-Type: application/json');
echo json_encode($applications);
?>
