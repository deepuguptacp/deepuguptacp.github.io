const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Read the markdown content
  const markdown = fs.readFileSync(path.join(__dirname, '../public/resume.md'), 'utf8');
  
  // Convert markdown to HTML
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px;
          }
          h1 { color: #2563eb; font-size: 32px; margin-bottom: 10px; }
          h2 { color: #1e40af; font-size: 24px; margin-top: 30px; margin-bottom: 15px; }
          h3 { color: #1e40af; font-size: 20px; margin-top: 25px; margin-bottom: 10px; }
          h4 { color: #1e40af; font-size: 18px; margin-top: 20px; margin-bottom: 10px; }
          p { margin-bottom: 15px; }
          ul { margin-bottom: 20px; }
          li { margin-bottom: 5px; }
          strong { color: #1e40af; }
        </style>
      </head>
      <body>
        ${marked(markdown)}
      </body>
    </html>
  `;
  
  await page.setContent(html);
  
  // Generate PDF
  await page.pdf({
    path: path.join(__dirname, '../public/resume.pdf'),
    format: 'A4',
    margin: {
      top: '20px',
      right: '20px',
      bottom: '20px',
      left: '20px'
    }
  });
  
  await browser.close();
}

generatePDF().catch(console.error); 