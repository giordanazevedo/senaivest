const http = require('http');
const fs = require('fs');
const path = require('path');

// Support Railway/Render/Heroku PORT environment variable
const PORT = process.env.PORT || 8000;
const PUBLIC_DIR = __dirname;
const USERS_FILE = path.join(PUBLIC_DIR, 'users.json');

const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp'
};

// ── In-memory store (shared across all clients in same process) ──────────────
// Files are loaded from disk on startup and kept in memory.
// On each save, both memory and disk are updated.
const DATA_FILES = ['schools', 'labs', 'posts', 'plans', 'inventory', 'boletins', 'notifications'];

const memoryStore = {};

// Load all data files into memory at startup
DATA_FILES.forEach(type => {
    const filePath = path.join(PUBLIC_DIR, `${type}.json`);
    try {
        if (fs.existsSync(filePath)) {
            memoryStore[type] = JSON.parse(fs.readFileSync(filePath, 'utf8') || '[]');
        } else {
            memoryStore[type] = null;
        }
    } catch (err) {
        console.error(`Error loading ${type}.json:`, err);
        memoryStore[type] = null;
    }
});

function readUsers() {
    try {
        if (!fs.existsSync(USERS_FILE)) return [];
        const data = fs.readFileSync(USERS_FILE, 'utf8');
        return JSON.parse(data || '[]');
    } catch (err) {
        console.error('Error reading users file:', err);
        return [];
    }
}

function writeUsers(users) {
    try {
        fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
        return true;
    } catch (err) {
        console.error('Error writing users file:', err);
        return false;
    }
}

function saveDataType(type, data) {
    // Update in-memory store immediately (all connected users see updates on next poll)
    memoryStore[type] = data;
    // Persist to disk (best effort – may fail on ephemeral filesystems)
    try {
        const filePath = path.join(PUBLIC_DIR, `${type}.json`);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (err) {
        console.warn(`Could not persist ${type}.json to disk (ephemeral fs):`, err.message);
    }
}

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    console.log(`${req.method} request for: ${req.url}`);

    let safeUrl = req.url.split('?')[0];
    if (safeUrl === '/') safeUrl = '/index.html';

    if (safeUrl.startsWith('/api/')) {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });

        req.on('end', () => {
            // ── POST /api/register ──────────────────────────────────────────
            if (safeUrl === '/api/register' && req.method === 'POST') {
                try {
                    const newUser = JSON.parse(body);
                    if (!newUser.email || !newUser.password) {
                        res.writeHead(400, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: 'E-mail e senha são obrigatórios.' }));
                        return;
                    }
                    const users = readUsers();
                    const exists = users.some(u => u.email.toLowerCase() === newUser.email.toLowerCase());
                    if (exists) {
                        // Silently return 200 if user already exists (idempotent auto-register)
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ message: 'Usuário já cadastrado.', user: newUser }));
                        return;
                    }
                    users.push(newUser);
                    if (writeUsers(users)) {
                        res.writeHead(201, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ message: 'Usuário cadastrado com sucesso!', user: newUser }));
                    } else {
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: 'Erro ao salvar o usuário.' }));
                    }
                } catch (e) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Dados JSON inválidos.' }));
                }

            // ── POST /api/login ─────────────────────────────────────────────
            } else if (safeUrl === '/api/login' && req.method === 'POST') {
                try {
                    const credentials = JSON.parse(body);
                    const users = readUsers();
                    const matchedUser = users.find(u =>
                        u.email.toLowerCase() === credentials.email.toLowerCase() &&
                        u.password === credentials.password
                    );
                    if (matchedUser) {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ message: 'Login bem-sucedido!', user: matchedUser }));
                    } else {
                        res.writeHead(401, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: 'E-mail ou senha inválidos.' }));
                    }
                } catch (e) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Dados JSON inválidos.' }));
                }

            // ── POST /api/update ────────────────────────────────────────────
            } else if (safeUrl === '/api/update' && req.method === 'POST') {
                try {
                    const updatedUser = JSON.parse(body);
                    const users = readUsers();
                    const index = users.findIndex(u => u.email.toLowerCase() === updatedUser.email.toLowerCase());
                    if (index !== -1) {
                        users[index] = { ...users[index], ...updatedUser };
                    } else {
                        users.push(updatedUser);
                    }
                    if (writeUsers(users)) {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ message: 'Perfil atualizado com sucesso!', user: updatedUser }));
                    } else {
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: 'Erro ao atualizar o perfil.' }));
                    }
                } catch (e) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Dados JSON inválidos.' }));
                }

            // ── GET /api/data ───────────────────────────────────────────────
            // Returns all shared data from memory (all users get the same up-to-date data)
            } else if (safeUrl === '/api/data' && req.method === 'GET') {
                const responseData = {};
                DATA_FILES.forEach(t => {
                    responseData[t] = memoryStore[t];
                });
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(responseData));

            // ── POST /api/save ──────────────────────────────────────────────
            // Saves a data type to memory AND disk, so all users see the change
            } else if (safeUrl === '/api/save' && req.method === 'POST') {
                try {
                    const payload = JSON.parse(body);
                    const allowedTypes = DATA_FILES;
                    if (!payload.type || !allowedTypes.includes(payload.type) || !Array.isArray(payload.data)) {
                        res.writeHead(400, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: 'Payload inválido.' }));
                        return;
                    }
                    saveDataType(payload.type, payload.data);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: `${payload.type} salvo com sucesso!` }));
                } catch (e) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Dados JSON inválidos.' }));
                }

            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Endpoint da API não encontrado.' }));
            }
        });
        return;
    }

    // ── Static file serving ──────────────────────────────────────────────────
    let decodedUrl = decodeURIComponent(safeUrl);
    let filePath = path.join(PUBLIC_DIR, decodedUrl);

    if (!filePath.startsWith(PUBLIC_DIR)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404);
            res.end('Not Found');
            return;
        }

        let ext = path.extname(filePath).toLowerCase();
        let contentType = mimeTypes[ext] || 'application/octet-stream';

        res.writeHead(200, { 'Content-Type': contentType });
        fs.createReadStream(filePath).pipe(res);
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`SENAIVEST Backend running at http://0.0.0.0:${PORT}/`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
