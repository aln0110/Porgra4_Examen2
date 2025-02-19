const express = require('express');
const axios = require('axios');
const cors = require('cors'); 
const app = express();
const port = 3000; 


const apiBaseUrl = 'http://localhost:8000';

app.use(express.json());

app.use(cors());

app.put('/updateEmergencia', async (req, res) => {
  try {
    const response = await axios.put(`${apiBaseUrl}/updateEmergencia.php`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/createEmergencia', async (req, res) => {
    try {
      const response = await axios.post(`${apiBaseUrl}/createEmergencia.php`, req.body);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

app.get('/getEmergencia/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${apiBaseUrl}/getEmergencia.php?id=${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/getEmergencias', async (req, res) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/getEmergencias.php`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/deleteEmergencia/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.delete(`${apiBaseUrl}/deleteEmergencia.php?id=${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port} UwU`);
});
