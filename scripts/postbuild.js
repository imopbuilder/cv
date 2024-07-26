const fs = require('node:fs');

async function copyCloudflareHeaders() {
  fs.copyFileSync('_headers', 'out/_headers');
  console.log('Successfully copied _headers to out/_headers file for cloudflare pages');
}

copyCloudflareHeaders();

console.log('Success - postbuild 🎉🎉');
