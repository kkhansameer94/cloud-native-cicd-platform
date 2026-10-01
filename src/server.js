const express = require('express');
const client = require('prom-client');

const app = express();
const PORT = process.env.PORT || 3000;

// Prometheus metrics collection
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ register: client.register });

app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Cloud-Native Microservice is running successfully on Kubernetes!',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Liveness Probe Endpoint (Checks if app is alive)
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Readiness Probe Endpoint (Checks if app is ready to accept traffic)
app.get('/ready', (req, res) => {
  res.status(200).json({ status: 'ready' });
});

// Prometheus Metrics Endpoint for Monitoring
app.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
  } catch (err) {
    res.status(500).end(err.message);
  }
});

// Only start the server if not imported by tests
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`[INFO] Server running on port ${PORT}`);
  });
}

module.exports = app;
