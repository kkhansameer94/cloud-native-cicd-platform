# 🚀 Cloud-Native CI/CD & Kubernetes Platform

<p align="center">
  <b>Production-style DevOps • Cloud Engineering • Kubernetes • CI/CD • Security • Observability</b>
</p>

<p align="center">
  <a href="https://github.com/kkhansameer94/cloud-native-cicd-platform/actions/workflows/deploy.yml">
    <img src="https://github.com/kkhansameer94/cloud-native-cicd-platform/actions/workflows/deploy.yml/badge.svg" alt="CI/CD Pipeline">
  </a>
  <img src="https://img.shields.io/badge/Node.js-20_LTS-339933?logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/Kubernetes-Kind-326CE5?logo=kubernetes&logoColor=white" alt="Kubernetes">
  <img src="https://img.shields.io/badge/Helm-3-0F1689?logo=helm&logoColor=white" alt="Helm">
  <img src="https://img.shields.io/badge/AWS-ECR-FF9900?logo=amazonaws&logoColor=white" alt="AWS ECR">
  <img src="https://img.shields.io/badge/Security-Trivy-19A974?logo=aqua&logoColor=white" alt="Trivy">
  <img src="https://img.shields.io/badge/Observability-Prometheus-E6522C?logo=prometheus&logoColor=white" alt="Prometheus">
</p>

---

## 📖 Overview

**Cloud-Native CI/CD & Kubernetes Platform** is a production-style DevOps engineering project built to demonstrate a complete containerized application delivery workflow.

The project combines:

- 🧪 Automated testing with Jest
- 🐳 Multi-stage Docker containerization
- 🛡️ Automated vulnerability scanning with Trivy
- ☁️ AWS ECR container registry integration
- ☸️ Kubernetes orchestration using Kind
- ⛵ Helm-based application packaging
- 🔄 Zero-downtime RollingUpdate deployments
- ❤️ Kubernetes liveness & readiness probes
- 📊 Prometheus application metrics
- 🔐 Least-privilege and secret-management practices
- ⚙️ GitHub Actions CI/CD automation

The goal is to demonstrate practical **DevOps, SRE and Cloud Engineering** capabilities through an end-to-end workflow.

---

## 🏗️ Architecture

```text
                         ┌──────────────────────────┐
                         │      Developer           │
                         │   git push → main        │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                    ┌──────────────────────────────────┐
                    │        GitHub Actions             │
                    │                                  │
                    │  1. Jest Unit Tests              │
                    │  2. Trivy Security Scan          │
                    │  3. Docker Build                 │
                    │  4. Image Tagging                │
                    │  5. Push to AWS ECR               │
                    │  6. Helm Lint / Validation       │
                    └───────────────┬──────────────────┘
                                    │
                     ┌──────────────┴──────────────┐
                     │                             │
                     ▼                             ▼
             ┌───────────────┐          ┌─────────────────────┐
             │    AWS ECR    │          │  Kubernetes / Kind  │
             │               │          │                     │
             │ Container     │          │ ┌─────────────────┐ │
             │ Image Registry│─────────▶│ │   Deployment    │ │
             │               │          │ │ RollingUpdate   │ │
             └───────────────┘          │ └────────┬────────┘ │
                                        │          │          │
                                        │     ┌────▼────┐     │
                                        │     │  Pods   │     │
                                        │     └────┬────┘     │
                                        │          │          │
                                        │   ┌──────▼──────┐   │
                                        │   │   Service   │   │
                                        │   └──────┬──────┘   │
                                        │          │          │
                                        │   ┌──────▼──────┐   │
                                        │   │ Prometheus  │   │
                                        │   │  /metrics   │   │
                                        │   └─────────────┘   │
                                        └─────────────────────┘
```

---

## 🔄 CI/CD Pipeline

Every application change follows an automated delivery workflow:

```text
Code Push
   │
   ▼
┌─────────────────┐
│ Jest Unit Tests │
└────────┬────────┘
         ▼
┌─────────────────────┐
│ Trivy Security Scan │
└────────┬────────────┘
         ▼
┌─────────────────────┐
│ Docker Image Build  │
└────────┬────────────┘
         ▼
┌─────────────────────┐
│   Push Image → ECR  │
└────────┬────────────┘
         ▼
┌─────────────────────┐
│ Helm Lint / Validate│
└────────┬────────────┘
         ▼
┌─────────────────────┐
│ Kubernetes Deploy   │
└────────┬────────────┘
         ▼
┌─────────────────────┐
│ RollingUpdate       │
│ + Health Probes     │
└────────┬────────────┘
         ▼
┌─────────────────────┐
│ Prometheus Metrics  │
└─────────────────────┘
```

---

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| Application | Node.js 20 LTS |
| Framework | Express.js |
| Testing | Jest |
| Containerization | Docker |
| Container Base | Alpine Linux |
| CI/CD | GitHub Actions |
| Security | Aqua Security Trivy |
| Container Registry | AWS ECR |
| Cloud | AWS |
| Orchestration | Kubernetes |
| Local Kubernetes | Kind |
| Packaging | Helm 3 |
| Metrics | Prometheus / prom-client |
| CLI Tools | kubectl, Helm, AWS CLI |

---

## ✨ Key Features

### 🧪 Automated Testing

Jest unit tests are executed as part of the CI/CD workflow to validate application functionality before the container image is published.

### 🐳 Hardened Multi-Stage Docker Build

The application uses a multi-stage Docker build designed to reduce image size and improve container security.

Key practices include:

- Alpine Linux base image
- Production dependency installation
- Docker layer-caching optimization
- Non-root container execution
- `USER node` with UID `1000`

### 🛡️ Container Security

Trivy is integrated into the CI/CD pipeline to scan the application filesystem and dependencies for vulnerabilities.

Critical vulnerabilities can fail the pipeline before the image reaches the registry.

### ☁️ AWS ECR Integration

Built Docker images are pushed to a private AWS Elastic Container Registry.

The workflow supports:

- SHA-based image tagging
- Latest image tagging
- ECR authentication
- Registry-based image scanning

### ☸️ Kubernetes Deployment

The application is packaged and deployed using Helm 3.

Kubernetes resources include:

- Deployment
- Service
- ConfigMap
- Ingress
- Health probes

### 🔄 Zero-Downtime Rolling Updates

Kubernetes `RollingUpdate` strategy is used together with readiness and liveness probes.

This allows new application revisions to be introduced gradually while Kubernetes manages pod availability.

### 📊 Observability

The application exposes Prometheus-compatible metrics through:

```text
/metrics
```

Metrics include application and runtime information such as:

- HTTP request latency
- Memory usage
- Garbage collection metrics
- CPU-related process metrics

---

## 📡 API Endpoints

| Endpoint | Method | Purpose |
|---|:---:|---|
| `/` | `GET` | Application heartbeat, version and environment information |
| `/healthz` | `GET` | Kubernetes liveness probe |
| `/ready` | `GET` | Kubernetes readiness probe |
| `/metrics` | `GET` | Prometheus metrics |

---

## 🔐 Security Practices

The project demonstrates several practical cloud-native security controls:

### Principle of Least Privilege

Cloud credentials and registry permissions are intended to be restricted to the required CI/CD operations.

### Non-Root Containers

The application container runs as a non-root user:

```dockerfile
USER node
```

### Automated Vulnerability Detection

Trivy scans are incorporated into the CI/CD process so vulnerable builds can be blocked before publication.

### Secret Management

Sensitive cloud credentials are stored through encrypted GitHub repository secrets rather than being hard-coded into source code.

> ⚠️ Never commit AWS access keys, secret keys, tokens, passwords or other credentials to the repository.

---

## 📁 Project Structure

```text
cloud-native-cicd-platform/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── helm/
│   └── app-chart/
│       ├── templates/
│       ├── Chart.yaml
│       └── values.yaml
│
├── src/
│   └── ...
│
├── tests/
│   └── ...
│
├── Dockerfile
├── docker-compose.yml
├── kind-config.yaml
├── package.json
└── README.md
```

> The exact directory structure may vary depending on the current implementation.

---

## 🚀 Getting Started

### Prerequisites

Install the following tools:

- Docker
- Docker Compose
- Kind
- kubectl
- Helm 3
- AWS CLI v2
- Node.js 20+

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/kkhansameer94/cloud-native-cicd-platform.git

cd cloud-native-cicd-platform
```

---

## 2️⃣ Run the Application Locally

Build and start the container:

```bash
docker compose up --build -d
```

Check the application health:

```bash
curl http://localhost:3000/healthz
```

---

## 3️⃣ Create the Kubernetes Cluster

Create the local multi-node Kind cluster:

```bash
kind create cluster \
  --name cloud-native-cluster \
  --config kind-config.yaml
```

Verify the cluster:

```bash
kubectl get nodes
```

Expected node state:

```text
STATUS
Ready
```

---

## 4️⃣ Deploy with Helm

Install the application:

```bash
helm install cloud-native-app ./helm/app-chart
```

Check the deployment:

```bash
kubectl get deployments
kubectl get pods -o wide
kubectl get svc
```

---

## 5️⃣ Perform a Rolling Upgrade

Upgrade the Helm release with a new image revision:

```bash
helm upgrade cloud-native-app ./helm/app-chart \
  --set image.tag="v1.0.0"
```

Monitor the rollout:

```bash
kubectl rollout status deployment/cloud-native-app-deployment
```

View Helm release history:

```bash
helm history cloud-native-app
```

---

## 6️⃣ Access the Application

Forward the Kubernetes Service to your local machine:

```bash
kubectl port-forward svc/cloud-native-app-svc 3000:80
```

Then verify:

```bash
curl http://localhost:3000/healthz
```

Check readiness:

```bash
curl http://localhost:3000/ready
```

Check Prometheus metrics:

```bash
curl -s http://localhost:3000/metrics | head -n 20
```

---

## 🔍 Useful Kubernetes Commands

### View Pods

```bash
kubectl get pods -o wide
```

### View Deployment

```bash
kubectl get deployment
```

### Describe Pods

```bash
kubectl describe pod <pod-name>
```

### View Application Logs

```bash
kubectl logs <pod-name>
```

### Monitor Rollout

```bash
kubectl rollout status deployment/cloud-native-app-deployment
```

### View Rollout History

```bash
kubectl rollout history deployment/cloud-native-app-deployment
```

---

## 📈 Observability Endpoints

The application exposes a Prometheus-compatible endpoint:

```text
GET /metrics
```

Example:

```bash
curl http://localhost:3000/metrics
```

This provides runtime and HTTP-related metrics that can be consumed by a Prometheus monitoring stack.

---

## 🎯 DevOps & SRE Concepts Demonstrated

This project brings together several real-world engineering concepts:

- Infrastructure-aware application deployment
- CI/CD automation
- GitHub Actions
- Containerization
- Docker image optimization
- Container security
- Vulnerability scanning
- AWS ECR
- IAM / least privilege
- Kubernetes Deployments
- Kubernetes Services
- Helm
- Rolling deployments
- Health checks
- Readiness and liveness probes
- Application observability
- Prometheus metrics
- Release history and rollback concepts
- Production-oriented deployment practices

---

## 🧪 Verification Checklist

After deployment, verify the following:

```text
☑ GitHub Actions workflow completes successfully
☑ Jest tests pass
☑ Trivy security scan passes
☑ Docker image builds successfully
☑ Image is available in AWS ECR
☑ Kubernetes nodes are Ready
☑ Helm release is deployed
☑ Pods are Running
☑ Liveness probe succeeds
☑ Readiness probe succeeds
☑ Rolling update completes successfully
☑ /metrics endpoint returns Prometheus metrics
```

---

## 🏆 Project Highlights

| Capability | Implementation |
|---|---|
| CI/CD | GitHub Actions |
| Automated Testing | Jest |
| Containerization | Multi-stage Docker |
| Container Security | Trivy |
| Registry | AWS ECR |
| Orchestration | Kubernetes |
| Local Cluster | Kind |
| Packaging | Helm 3 |
| Deployment Strategy | RollingUpdate |
| Health Management | Liveness + Readiness |
| Observability | Prometheus |
| Runtime | Node.js 20 LTS |
| Application Framework | Express.js |

---

## 👨‍💻 Author

### Sameer Khan

**DevOps & Cloud Engineer**

GitHub:  
https://github.com/kkhansameer94

---

## ⭐ Support

If you find this project useful or are exploring DevOps and Cloud Engineering, consider giving the repository a ⭐.

---

<p align="center">
  <b>Built with Docker • Kubernetes • Helm • AWS • GitHub Actions • Prometheus</b>
</p>
