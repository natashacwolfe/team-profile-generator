function renderHeader(){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='../css/style.css'>
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <title>Team-Profile</title>
</head>
<body>
 
    <div class="container">
        <div class='header'>
            <h1 class="title">My Team</h1>
        </div>   
    `
};
 

function renderFooter() {
    return `
    </div>

    </body>
    </html>
    `
};

module.exports = {
    renderHeader,
    renderFooter
}


 

