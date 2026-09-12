// 临时：局域网预览服务器（供 iPad 实时检查）—— 用完即删
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';
import { networkInterfaces } from 'node:os';

const ROOT = resolve('D:/Desktop/Words');
const PORT = 8931;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.md': 'text/markdown; charset=utf-8'
};

const lanIps = [];
for (const list of Object.values(networkInterfaces())) {
  for (const ni of list ?? []) {
    if (ni.family === 'IPv4' && !ni.internal) lanIps.push(ni.address);
  }
}

createServer(async (req, res) => {
  const stamp = new Date().toTimeString().slice(0, 8);
  let rel = '/';
  try {
    rel = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (rel === '/') rel = '/index.html';
    const target = join(ROOT, normalize(rel).replace(/^(\.\.[/\\])+/, ''));
    if (!target.startsWith(ROOT)) {
      res.writeHead(403).end('forbidden');
      return;
    }
    const info = await stat(target);
    if (!info.isFile()) {
      res.writeHead(404).end('not a file');
      return;
    }
    const body = await readFile(target);
    res.writeHead(200, {
      'content-type': TYPES[extname(target).toLowerCase()] ?? 'application/octet-stream',
      'content-length': body.length,
      'cache-control': 'no-store, no-cache, must-revalidate, max-age=0',
      pragma: 'no-cache',
      expires: '0'
    });
    res.end(body);
    console.log(`${stamp}  200  ${req.socket.remoteAddress}  ${rel}`);
  } catch (err) {
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }).end('404 ' + err.code);
    console.log(`${stamp}  404  ${req.socket.remoteAddress}  ${rel}`);
  }
}).listen(PORT, '0.0.0.0', () => {
  console.log('');
  console.log('  局域网预览已启动（已禁缓存）');
  for (const ip of lanIps) console.log(`  iPad:  http://${ip}:${PORT}/`);
  console.log('');
});
