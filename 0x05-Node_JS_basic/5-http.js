const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    const { url } = req;
    if (url === '/') {
        res.end('Hello Holberton School!');
    } else if (url === '/students') {
        res.write('This is the list of our students\n');
        try {
            const data = await countStudents(process.argv[2]);
            res.end(`${data.join('\n')}`);
        } catch (error) {
            res.end(error.message);
        }
    }
});

const PORT = 1245;
const HOSTNAME = '127.0.0.1';

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});

module.exports = app;