async function fetchUsers() {
	try {
		const response = await fetch(
			"https://earwig.greenriverdev.com/pages/Sprint_3/php/dbAccess/getUsers.php"
		);
		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}
		const users = await response.json();
		const listContainer = document.getElementById("usersList");
        console.log(users);

		// 遍历所有筛选后的应用程序数据
		users.forEach((app) => {
			const appDiv = document.createElement("div");
			appDiv.innerHTML = `
                    <li class="row py-3" data-appId="${app.userId}">
                        <div class="col-0 col-sm-4 d-none d-sm-flex align-items-center">
                            <span class="d-inline-block text-truncate text-start">
                                ${app.firstName} ${app.lastName}
                            </span>
                        </div>
                        <div class="col-12 col-sm-8 d-flex align-items-center justify-content-between">
                            <span>${app.email}</span>
                            <div class="col-4 justify-content-end d-flex icons">
                                <a class="me-3" href="/pages/edit-app.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"></path>
                                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"></path>
                                    </svg>
                                </a>
                                <a href="/pages/delete-app.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="gray" class="bi bi-trash3" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>   
                    </li>`;
			listContainer.appendChild(appDiv);
		});
	} catch (error) {
		console.error("Fetch error:", error);
	}
}

// userDiv.innerHTML = `
//                      <div class="d-flex mt-3">
//                         <div class="col-0 col-sm-4 d-none d-sm-flex align-items-center">
//                             <span class="d-inline-block text-truncate text-start">
//                                 Will Johnson
//                             </span>
//                         </div>
//                         <div class="col-9 col-sm-5 d-flex align-items-center">
//                             <span class="d-inline-block text-truncate text-start">
//                                 onemoreexample@email.com
//                             </span>
//                         </div>

//                         <div class="col-3 justify-content-end d-flex icons">
//                             <a class="me-2 me-lg-3" href="/pages/edit-app.html">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="gray" class="bi bi-eye" viewBox="0 0 16 16">
//                                     <path
//                                         d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
//                                     <path
//                                         d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
//                                 </svg>
//                             </a>
//                             <a href="/pages/edit-app.html">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="gray" class="bi bi-trash3"
//                                     viewBox="0 0 16 16">
//                                     <path
//                                         d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
//                                 </svg>
//                             </a>
//                         </div>
//                     </div>
//                 `;

// 当页面加载完成时调用函数，以获取并显示数据
window.addEventListener("DOMContentLoaded", () => fetchUsers());
