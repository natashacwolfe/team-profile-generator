function renderEngineer(engineerInfo) {
    return `
    <div class="employee-card">
        <div class="employee-title">
            <p class="name">${engineerInfo.name}</p>
            <p class="role">${engineerInfo.role}</p>
        </div>
        <div class="employee-info">
            <ul class="info-list">
                <li class='id'>ID: ${engineerInfo.id}</li>
                <li class='email'>Email:<a href="mailto:${engineerInfo.email}">${engineerInfo.email}</a></li>
                <li class='GitHub'>GitHub:<a href="https://github.com/${engineerInfo.github}" target="_blank" rel="noopener noreferrer">${engineerInfo.github}</a></li>
            </ul>
        </div>
    </div>
    `

};
 
module.exports = renderEngineer;



