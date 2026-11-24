import { copyFile, rename } from 'node:fs/promises';
// Keep the built React entry for existing SPA routes; only the public root changes.
await rename('dist/index.html', 'dist/legacy-shell.html');
await copyFile('dist/showcase/index.html', 'dist/index.html');
