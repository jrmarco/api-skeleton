PORT = 3005;

module.exports = {
  env: false,
  port: PORT,
  corsOptions: {
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST'],
    credentials: false,
    allowedHeaders: ['Content-Type', 'Authorization'],
  },
  certificate: {
    private: './private-file.cert',
    cert: './cert-file.cert'
  },
}