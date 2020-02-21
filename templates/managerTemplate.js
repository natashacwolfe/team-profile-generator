
function renderManager(managerInfo) {
    return  `
    <div class=" manager employee-card">
        <div class='employee-title'>
            <p class="name">${managerInfo.name}</p>
            <p class="role">${managerInfo.role}</p>
        </div>
        <div class="employee-info">
            <ul class="info-list">
                <li class='id'>ID: ${managerInfo.id}</li>
                <li class='email'>Email: <a href="mailto:${managerInfo.email}">${managerInfo.email}</a></li>
                <li class='office'>Office Number: ${managerInfo.office}</li>
            </ul>
    </div>
    </div>

    `
}


module.exports = renderManager; 