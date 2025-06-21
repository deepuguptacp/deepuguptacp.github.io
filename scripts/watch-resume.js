const chokidar = require('chokidar');
const { exec } = require('child_process');
const path = require('path');

// Path to the resume markdown file
const resumePath = path.join(__dirname, '..', 'public', 'resume.md');

console.log('🔍 Watching for resume changes...');
console.log(`📁 Monitoring: ${resumePath}`);

// Initialize watcher
const watcher = chokidar.watch(resumePath, {
  persistent: true,
  ignoreInitial: true,
  awaitWriteFinish: {
    stabilityThreshold: 2000,
    pollInterval: 100
  }
});

// Function to regenerate resume
function regenerateResume() {
  console.log('📝 Resume changed, regenerating...');
  exec('npm run generate-resume', (error, stdout, stderr) => {
    if (error) {
      console.error('❌ Error regenerating resume:', error);
      return;
    }
    if (stderr) {
      console.error('⚠️  Warning:', stderr);
    }
    console.log('✅ Resume regenerated successfully');
    console.log(stdout);
  });
}

// Watch for changes
watcher
  .on('add', path => {
    console.log(`📄 File ${path} has been added`);
    regenerateResume();
  })
  .on('change', path => {
    console.log(`📝 File ${path} has been changed`);
    regenerateResume();
  })
  .on('unlink', path => {
    console.log(`🗑️  File ${path} has been removed`);
  })
  .on('error', error => {
    console.error('❌ Watcher error:', error);
  });

console.log('🚀 Resume watcher is running. Press Ctrl+C to stop.'); 