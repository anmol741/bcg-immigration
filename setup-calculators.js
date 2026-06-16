const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(process.cwd(), 'public', 'calculators');
fs.mkdirSync(dir, { recursive: true });
console.log('✅ public/calculators/ ready');

const files = [
  'bcpnp-calculator.html',
  'alberta-pnp-calculator.html',
  'saskatchewan-pnp-calculator.html',
  'manitoba-pnp-calculator.html',
  'ontario-pnp-calculator.html',
  'novascotia-pnp-calculator.html',
  'newbrunswick-pnp-calculator.html',
  'yukon-pnp-calculator.html',
  'atlantic-aip-calculator.html'
];

console.log('Files needed in public/calculators/:');
files.forEach(f => {
  const fp = path.join(dir, f);
  const exists = fs.existsSync(fp);
  console.log((exists ? '✅' : '❌ MISSING:'), f);
});
