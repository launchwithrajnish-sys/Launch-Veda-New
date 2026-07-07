import { spawn } from 'child_process';
import http from 'http';

console.log("Starting debug Next dev server on port 3001...");
const child = spawn('npx', ['next', 'dev', '-p', '3001'], {
  shell: true,
  env: { ...process.env, PORT: '3001' }
});

child.stdout.on('data', (data) => {
  console.log('[Next Out]', data.toString().trim());
});

child.stderr.on('data', (data) => {
  console.error('[Next Err]', data.toString().trim());
});

// Wait 10 seconds for Next dev server to start up and compile
setTimeout(() => {
  console.log("Sending request to debug server...");
  const req = http.get('http://localhost:3001/', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log("Response Status:", res.statusCode);
      console.log("Response Body preview:", data.slice(0, 500));
      
      // Wait another 3 seconds for async render errors to log, then exit
      setTimeout(() => {
        child.kill('SIGINT');
        process.exit(0);
      }, 3000);
    });
  });

  req.on('error', (err) => {
    console.error("Fetch error:", err);
    child.kill('SIGINT');
    process.exit(1);
  });
}, 10000);
