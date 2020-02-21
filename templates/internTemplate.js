
function renderIntern(internInfo){
    return `
    <div class=" intern employee-card">
    <div class="employee-title">
        <p class="name">${internInfo.name}</p>
        <p class="role">${internInfo.role}</p>
    </div>
    <div class="employee-info">
        <ul class="info-list">
            <li class='id'>ID: ${internInfo.id}</li>
            <li class='email'>Email: <a href="mailto:${internInfo.email}">${internInfo.email}</a> </li>
            <li class='school'>School: ${internInfo.school}</li>
        </ul>
    </div>
</div>
    `
};

module.exports = renderIntern;