/**
 * Build script for GrabBoss Backend
 * This script prepares the application for production
 */

import fs from 'fs';
import path from 'path';

const buildDir = './build';
const srcDir = './src';

try {
  // Create build directory if it doesn't exist
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir, { recursive: true });
    console.log('✓ Build directory created');
  }

  // Copy source files to build directory
  fs.cpSync(srcDir, path.join(buildDir, 'src'), { recursive: true });
  console.log('✓ Source files copied to build directory');

  // Copy package.json
  const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
  fs.writeFileSync(
    path.join(buildDir, 'package.json'),
    JSON.stringify(packageJson, null, 2),
  );
  console.log('✓ package.json copied');

  console.log('\n✅ Build completed successfully!');
  console.log(`📁 Output: ${path.resolve(buildDir)}`);
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
