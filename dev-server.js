import { spawn } from 'child_process';

const originalArgs = process.argv.slice(2);
const filteredArgs = [];

for (let i = 0; i < originalArgs.length; i++) {
  const arg = originalArgs[i];
  if (arg === '--host') {
    const nextArg = originalArgs[i + 1];
    if (nextArg && !nextArg.startsWith('-')) {
      i++; // Skip the value of --host (e.g. 0.0.0.0 or true)
    }
    continue;
  }
  if (arg.startsWith('--host=')) {
    continue;
  }
  filteredArgs.push(arg);
}

// Make sure we always bind to port 3000 and 0.0.0.0 for Cloud Run
if (!filteredArgs.includes('-p') && !filteredArgs.includes('--port')) {
  filteredArgs.push('-p', '3000');
}
// if (!filteredArgs.includes('-H') && !filteredArgs.includes('--hostname')) {
//   filteredArgs.push('-H', '0.0.0.0');
// }

console.log('[Dev Wrapper] Starting Next.js with filtered args:', filteredArgs);

const nextProcess = spawn('npx', ['next', 'dev', ...filteredArgs], {
  stdio: 'inherit',
  shell: true
});

nextProcess.on('exit', (code) => {
  process.exit(code || 0);
});
