<?php
require '/path/to/your/database/connection/file.php';



// 检查是否有applicationId和userId参数传入
if (isset($_POST['applicationId']) && isset($_POST['userId'])) {
    $applicationId = $_POST['applicationId'];
    $userId = $_POST['userId'];

    // 准备软删除（更新isDeleted字段）的语句
    $sql = "UPDATE Applications SET isDeleted = 1 WHERE applicationId = ? AND userId = ?";

    // 创建预处理语句
    if ($stmt = mysqli_prepare($conn, $sql)) {
        // 绑定变量到预处理语句作为参数
        mysqli_stmt_bind_param($stmt, "ii", $param_applicationId, $param_userId);

        // 设置参数并执行
        $param_applicationId = $applicationId;
        $param_userId = $userId;
        if (mysqli_stmt_execute($stmt)) {
            echo "Application marked as deleted successfully.";
        } else {
            echo "Error marking application as deleted: " . mysqli_error($conn);
        }
    }

    // 关闭语句
    mysqli_stmt_close($stmt);
} else {
    echo "Application ID or User ID not provided!";
}

// 关闭连接
mysqli_close($conn);
?>
