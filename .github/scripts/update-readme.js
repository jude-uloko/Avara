const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// Run cloc to get language statistics
function getLanguageStats() {
  try {
    const output = execSync('cloc . --json --exclude-dir=node_modules,.git,.github', {
      encoding: 'utf-8'
    });
    return JSON.parse(output);
  } catch (error) {
    console.error('Error running cloc:', error);
    return null;
  }
}

// Format language statistics into a markdown table
function formatLanguageStats(stats) {
  if (!stats || !stats.SUM) {
    return '<!-- Language statistics unavailable -->\n';
  }

  // Filter out non-language entries
  const languages = Object.keys(stats)
    .filter(key => key !== 'SUM' && key !== 'header')
    .map(lang => ({
      name: lang,
      files: stats[lang].nFiles,
      lines: stats[lang].code,
      comments: stats[lang].comment,
      blank: stats[lang].blank,
      total: stats[lang].nFiles + stats[lang].blank + stats[lang].comment + stats[lang].code
    }))
    .sort((a, b) => b.lines - a.lines);

  const totalLines = languages.reduce((sum, lang) => sum + lang.lines, 0);

  let markdown = '## 📊 Language Statistics\n\n';
  markdown += '| Language | Files | Lines | Comments | Percentage |\n';
  markdown += '|----------|-------|-------|----------|------------|\n';

  languages.forEach(lang => {
    const percentage = totalLines > 0 ? ((lang.lines / totalLines) * 100).toFixed(1) : '0.0';
    const bar = '█'.repeat(Math.round(percentage / 5)) + '░'.repeat(20 - Math.round(percentage / 5));
    markdown += `| ${lang.name} | ${lang.files} | ${lang.lines.toLocaleString()} | ${lang.comments.toLocaleString()} | ${percentage}% ${bar} |\n`;
  });

  markdown += `\n**Total Lines of Code:** ${totalLines.toLocaleString()}\n`;
  markdown += `**Total Files:** ${languages.reduce((sum, lang) => sum + lang.files, 0)}\n\n`;

  return markdown;
}

// Update README with language statistics
function updateReadme() {
  const readmePath = path.join(process.cwd(), 'README.md');
  let content = '';

  // Read existing README or create new one
  if (fs.existsSync(readmePath)) {
    content = fs.readFileSync(readmePath, 'utf-8');
  } else {
    content = '# Avara\n\n';
  }

  // Get language statistics
  const stats = getLanguageStats();
  const languageSection = formatLanguageStats(stats);

  // Define markers for the language statistics section
  const startMarker = '<!-- START LANGUAGE STATISTICS -->';
  const endMarker = '<!-- END LANGUAGE STATISTICS -->';

  // Check if section already exists
  if (content.includes(startMarker)) {
    // Replace existing section
    const regex = new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`, 'g');
    content = content.replace(regex, `${startMarker}\n${languageSection}${endMarker}`);
  } else {
    // Add new section before the end of file
    content += `\n${startMarker}\n${languageSection}${endMarker}\n`;
  }

  // Write updated README
  fs.writeFileSync(readmePath, content, 'utf-8');
  console.log('✅ README updated successfully with language statistics');
}

// Run the update
updateReadme();
