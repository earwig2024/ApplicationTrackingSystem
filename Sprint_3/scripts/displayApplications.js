async function fetchApplications() {
	try {
		const response = await fetch(
			"https://earwig.greenriverdev.com/application-tracking-system/Sprint_3/php/dbAccess/getApplications.php"
		);
		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}
		const applications = await response.json();
	
		const filteredApplications = applications.filter(
			(app) => app.userId === "1"
		);
	
		const listContainer = document.getElementById("applicationsList");
	
		filteredApplications.forEach((app) => {
	    // creating formatted date for dashboard
		    const formattedDate = `${app.dateApplied.substring(5)}-${app.dateApplied.substring(2, 4)}`;
	
		    // creating url parameters for editing
		    let params = "?";
		    const neededParams = Object.entries(app).slice(0, -1);
		    for (const [key, value] of neededParams) {
			params += `${key}=${value}&`
			}
	    
		const appDiv = document.createElement("div");
	
		appDiv.innerHTML = `
		    <li class="row py-3" data-appId="${app.applicationId}" data-sqlDate="${app.dateApplied}">
			<div class="col-5 col-sm-6 me-auto d-md-flex align-items-center">
			    <span class="col-4 d-none d-md-inline">${formattedDate}</span>
			    <span class="d-inline-block text-truncate text-start">${app.jobPosition}</span>
			</div>
			<div class="col-7 col-sm-6 d-flex justify-content-between align-items-center">
			    <span>${app.status}</span>
			    <div class="col-4 justify-content-end d-flex icons">
				<a class="me-3" href="/pages/Sprint_3/editApplication.html${params}">
				    <svg xmlns="http://www.w3.org/2000/svg" fill="gray" class="bi bi-pencil" viewBox="0 0 16 16">
					<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
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
		    </li>            
		    `;
		listContainer.appendChild(appDiv);
	});
	} catch (error) {
		console.error("Fetch error:", error);
	}
}

window.onload = fetchApplications;
