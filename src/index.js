const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const storagePath = path.join(__dirname, 'urlDatabase.json');

function readDatabase() {
  try {
    const data = fs.readFileSync(storagePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
}

function writeDatabase(urlDatabase) {
  fs.writeFileSync(storagePath, JSON.stringify(urlDatabase, null, 2), 'utf8');
}

function generateShortCode(length = 6) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let shortCode = '';
  for (let i = 0; i < length; i++) {
    shortCode += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return shortCode;
}

function shortenURL(originalURL) {
  const urlDatabase = readDatabase();

  for (const [key, value] of Object.entries(urlDatabase)) {
    if (value === originalURL) {
      return key; 
    }
  }

  let shortCode;
  do {
    shortCode = generateShortCode();
  } while (urlDatabase[shortCode]); 

  urlDatabase[shortCode] = originalURL;
  writeDatabase(urlDatabase);

  return shortCode;
}

function getOriginalURL(shortCode) {
  const urlDatabase = readDatabase();
  return urlDatabase[shortCode] || null;
}

app.use(express.json());

app.post('/shorten', (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  const shortCode = shortenURL(url);
  res.json({ shortCode, shortenedURL: `http://localhost:${PORT}/${shortCode}` });
});

app.get('/:shortCode', (req, res) => {
  const { shortCode } = req.params;
  const originalURL = getOriginalURL(shortCode);

  if (!originalURL) {
    return res.status(404).json({ error: 'Short URL not found' });
  }

  res.redirect(originalURL);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
