const fs = require('fs');

const path = 'd:/Python_Django/dportfolio/src/app/page.js';
const content = fs.readFileSync(path, 'utf8');

// Split the file by the section comments
const parts = content.split(/(\{\/\* \d+\. .*? \*\/})/g);

let beforeSections = "";
let sections = {};
let currentHeader = null;
let currentBody = "";
let afterSections = "";

// The split gives us: [before, comment1, body1, comment2, body2, ...]
// We need to carefully re-assemble
beforeSections = parts[0];

for (let i = 1; i < parts.length; i += 2) {
    const comment = parts[i];
    const body = parts[i+1];
    
    if (comment.includes('1. Fullscreen Hero Section')) {
        sections['hero'] = comment + body;
    } else if (comment.includes('2. Banner Preview Area')) {
        sections['banner'] = comment + body;
    } else if (comment.includes('3. Animated Statistics Section')) {
        sections['stats'] = comment + body;
    } else if (comment.includes('4. Featured Reels Showcase Grid')) {
        sections['reels'] = comment + body;
    } else if (comment.includes('5. Client Testimonials Section')) {
        sections['testimonials'] = comment + body;
    } else if (comment.includes('6. Developer Quick Highlight Section')) {
        sections['dev'] = comment + body;
    } else if (comment.includes('7. Creative CTA banner')) {
        sections['cta'] = comment + body;
    }
}

// Rename Client Testimonials to Testimonials
sections['testimonials'] = sections['testimonials'].replace('Client Testimonials', 'Testimonials');
sections['testimonials'] = sections['testimonials'].replace('Client Testimonials', 'Testimonials'); // Replace in h2

// Requested Order:
// 1. Hero
// 2. Reels (was 4)
// 3. Stats (was 3)
// 4. Dev (was 6)
// 5. Testimonials (was 5, renamed)
// 6. CTA (was 7)
// Banner (was 2) is REMOVED.

const newContent = beforeSections 
    + sections['hero']
    + sections['reels']
    + sections['stats']
    + sections['dev']
    + sections['testimonials']
    + sections['cta'];

fs.writeFileSync(path, newContent, 'utf8');
console.log('Reordered successfully!');
