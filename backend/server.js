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

if (!fs.existsSync(indexPath) || !mainBundlePath || !fs.existsSync(mainBundlePath)) {
  console.error(
    'Frontend build is missing or incomplete. Run "npm run build" in the frontend folder first.'
  );
  process.exit(1);
}

app.use(cors());
app.use(express.json());
app.use(express.static(frontendPath));
app.use('/', authRoutes);

app.get(/.*/, (req, res) => {
  res.sendFile(indexPath);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
