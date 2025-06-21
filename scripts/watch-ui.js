const chokidar = require('chokidar');
const { exec } = require('child_process');
const path = require('path');

// Directories to watch
const watchPaths = [
  path.join(__dirname, '..', 'app'),
  path.join(__dirname, '..', 'styles'),
  path.join(__dirname, '..', 'components'),
  path.join(__dirname, '..', 'lib'),
  path.join(__dirname, '..', 'utils')
];

// File patterns to watch
const patterns = [
  '**/*.tsx',
  '**/*.ts',
  '**/*.jsx',
  '**/*.js',
  '**/*.css',
  '**/*.scss',
  '**/*.json'
];

console.log('🔍 Setting up UI file watcher...');
console.log('📁 Monitoring directories:');
watchPaths.forEach(dir => console.log(`   - ${dir}`));

// Initialize watcher
const watcher = chokidar.watch(patterns, {
  cwd: path.join(__dirname, '..'),
  persistent: true,
  ignoreInitial: true,
  ignored: [
    '**/node_modules/**',
    '**/.next/**',
    '**/out/**',
    '**/.git/**',
    '**/*.log',
    '**/package-lock.json'
  ],
  awaitWriteFinish: {
    stabilityThreshold: 1000,
    pollInterval: 100
  }
});

let changeTimeout;
let isProcessing = false;

// Function to handle file changes
function handleFileChange(filePath, event) {
  if (isProcessing) {
    console.log('⏳ Change already being processed, skipping...');
    return;
  }

  // Clear existing timeout
  if (changeTimeout) {
    clearTimeout(changeTimeout);
  }

  // Debounce changes to avoid multiple rapid executions
  changeTimeout = setTimeout(() => {
    isProcessing = true;
    
    console.log(`📝 ${event}: ${filePath}`);
    
    // Determine what type of file changed and handle accordingly
    if (filePath.endsWith('.css') || filePath.endsWith('.scss')) {
      console.log('🎨 CSS file changed - styles will be hot reloaded');
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
      console.log('⚛️  React component changed - Next.js will hot reload');
    } else if (filePath.endsWith('.json')) {
      console.log('⚙️  Configuration file changed - restart may be needed');
    }
    
    // Add a small delay to ensure file is fully written
    setTimeout(() => {
      isProcessing = false;
      console.log('✅ Change processed');
    }, 500);
    
  }, 300); // 300ms debounce
}

// Watch for changes
watcher
  .on('add', filePath => {
    handleFileChange(filePath, 'File added');
  })
  .on('change', filePath => {
    handleFileChange(filePath, 'File changed');
  })
  .on('unlink', filePath => {
    console.log(`🗑️  File removed: ${filePath}`);
  })
  .on('error', error => {
    console.error('❌ Watcher error:', error);
  })
  .on('ready', () => {
    console.log('🚀 UI file watcher is ready and monitoring for changes');
    console.log('💡 Next.js development server will automatically reload on changes');
    console.log('🛑 Press Ctrl+C to stop watching');
  });

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down file watcher...');
  watcher.close();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down file watcher...');
  watcher.close();
  process.exit(0);
}); 