const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/update-status', (req, res) => {
    const { status } = req.body;

    fs.writeFile('status.json', JSON.stringify({ status }), err => {
        if (err) {
            console.error('Error updating status:', err);
            return res.status(500).send('Error updating status');
        }

        return res.status(200).send('Status updated successfully');
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
