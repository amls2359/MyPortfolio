const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const authRoutes = require('./routes/authRoutes');

const app = express();
const frontendPath = path.join(__dirname, '../frontend/build');
const indexPath = path.join(frontendPath, 'index.html');
const manifestPath = path.join(frontendPath, 'asset-manifest.json');

function getMainBundlePath() {
  if (!fs.existsSync(manifestPath)) return null;
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const mainJs = manifest.files?.['main.js'];
  if (!mainJs) return null;
  return path.join(frontendPath, mainJs.replace(/^\//, ''));
}

const mainBundlePath = getMainBundlePath();

// 🔥 Changed: Log warning instead of exiting
if (!fs.existsSync(indexPath) || !mainBundlePath || !fs.existsSync(mainBundlePath)) {
  console.warn('⚠️ Warning: Frontend build is missing or incomplete.');
  console.warn('The API will still work, but frontend routes may fail.');
  console.warn('Make sure to build the frontend before deployment.');
} else {
  console.log('✅ Frontend build found successfully');
}

app.use(cors());
app.use(express.json());

// Only serve static files if build exists
if (fs.existsSync(frontendPath)) {
  app.use(express.static(frontendPath));
}

app.use('/', authRoutes);

// Only serve index.html if it exists
if (fs.existsSync(indexPath)) {
  app.get(/.*/, (req, res) => {
    res.sendFile(indexPath);
  });
} else {
  // Fallback API route
  app.get('/', (req, res) => {
    res.json({ message: 'API is running, but frontend is not built yet' });
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📁 Frontend build path: ${frontendPath}`);
  console.log(`📄 Index exists: ${fs.existsSync(indexPath)}`);
});