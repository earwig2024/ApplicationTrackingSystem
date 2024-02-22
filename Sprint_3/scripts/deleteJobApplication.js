document.addEventListener('DOMContentLoaded', function () {
    const deleteLinks = document.querySelectorAll('.delete-link');

    deleteLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // 阻止链接默认行为
            const applicationId = this.getAttribute('data-id');

            if (confirm('Are you sure you want to delete this application?')) {
                fetch('deleteApplication.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `applicationId=${applicationId}`
                })
                .then(response => response.text())
                .then(data => {
                    alert(data);
                    // 可以在这里添加逻辑，比如移除页面上的记录等
                    location.reload(); // 或者刷新页面
                })
                .catch(error => console.error('Error:', error));
            }
        });
    });
});
