# Docker Showcase 🚀

A collection of **Docker** and **Docker Compose** examples to learn, test, and reuse in real-world scenarios.
This repository is designed as a **reference and playground** for working with containerized applications, from simple single-container setups to multi-service environments.

---

## 📂 Repository Structure

Each folder contains a self-contained example with its own `Dockerfile` and/or `docker-compose.yml`.

---

## 🚀 Getting Started

Clone the repo:

```bash
git clone https://github.com/HasanAshab/docker-showcase.git
cd docker-showcase
```

Pick an example and run it:

```bash
cd postgres
docker-compose up -d
```

Stop and clean up:

```bash
docker-compose down -v
```

---

## 🎯 Goals

* Serve as a **learning resource** for beginners exploring Docker & Compose
* Provide **ready-to-run examples** for common services
* Act as a **boilerplate collection** for starting new projects faster
* Know the **best practices** for containerization multi-service apps
---

## 🤝 Contributing

Want to add a new example?

1. Fork the repo
2. Create a new folder with your example (`myservice/`)
3. Add a clear `README.md` inside explaining usage
4. Submit a PR 🎉
