const express = require('express');

const app = express();
const PORT = 8080;

// Simple route
app.get('/', (req, res) => {
  res.send(`
     <!DOCTYPE html>
<html>
<head>
    <title>Azure Web App Demo</title>
</head>
<body>
    <h1>Welcome to Azure App Service</h1>
    <p>My first HTML website hosted on Azure.</p>

    <h2>Features</h2>
    <ul>
        <li>Static HTML Page</li>
        <li>Hosted on Azure</li>
        <li>Publicly Accessible</li>
    </ul>
</body>
</html>

  `);
});



// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
