# 🎓 UniFine Backend

<p align="center">
  <a href="https://nestjs.com/" target="_blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[![TypeScript](https://img.shields.io/badge/TypeScript-5.1-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-green.svg)](https://nodejs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-10.0-red.svg)](https://nestjs.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

UniFine is a server-side application built with the **NestJS** framework. It powers the UniFine mobile applications(Android, iOS), providing APIs for real-time AI-driven text analysis, document management, user authentication.

---

## 🚀 Features

- **AI-Driven Analysis**: Integration with OpenAI API for advanced grammar, spelling, and style analysis.
- **Plagiarism Detection**: Comprehensive search for matching content from various sources.
- **User Management**: Secure authentication, authorization, and account management.
- **Document Handling**: CRUD operations for academic and personal documents.
- **Scalable Architecture**: Modularized services with clear separation of concerns.

---

## 🛠️ Technology Stack

- **Framework**: [NestJS](https://nestjs.com/)
- **Language**: TypeScript
- **Database**: PostgreSQL with [TypeORM](https://typeorm.io/)
- **AI Integration**: OpenAI API
- **Authentication**: JWT with Passport.js
- **Caching**: Redis
- **API Documentation**: Swagger
- **Testing**: Jest
- **Deployment**: Docker + Kubernetes (K8s)

---

## 📦 Installation

### Prerequisites

- **Node.js** v20+
- **Yarn** package manager
- **PostgreSQL** for database

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/unifine-backend.git
   cd unifine-backend
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Configure environment variables:
   - Copy `.env.example` to `.env` and set the required variables:
     ```bash
     cp .env.example .env
     ```

4. Run database migrations:
   ```bash
   yarn run migration:run
   ```

5. Start the application:
   - Development mode:
     ```bash
     yarn run start:dev
     ```
   - Production mode:
     ```bash
     yarn run start:prod
     ```

---

## 📖 API Documentation

UniFine Backend provides a Swagger-based API documentation. Access it by running the server and navigating to:

```
http://localhost:<PORT>/docs
```

You can also directly access OpenAPI schema by typing:

```
http://localhost:<PORT>/schema.yaml
```

## 📂 Project Structure

```plaintext
src/
├── auth/             # Authentication and Authorization logic
├── common/           # Shared modules, constants, and utilities
├── documents/        # Document handling logic
├── users/            # User management module
├── analytics/        # Analytics and progress tracking
├── ai/               # AI integration for text analysis
├── config/           # Configuration files
├── database/         # Database entities and migrations
└── main.ts           # Application entry point
```

---

## 🛡️ Security

- **Data Protection**: User data are securely handled.
- **Authentication**: Implements industry-standard JWT-based authentication.

---

## 🌟 Contributing

Contributions are welcome! To get started:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/awesome-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add an awesome feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/awesome-feature
   ```
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy coding! 🚀
