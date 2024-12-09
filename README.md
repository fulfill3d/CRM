# CRM

- **App**: Visit https://crm.fulfill3d.com to see the application demo.

The CRM Demo Application is a feature-rich system designed to serve both businesses and clients. This app allows businesses to efficiently manage their stores, employees, services, and appointments, while clients can find nearby services, book appointments, and manage their bookings effortlessly. The system is designed with a dual-portal architecture, where both **Business** and **Client** functionalities are integrated into a single app for demonstration purposes.

In a real-world scenario, the **Business** and **Client** portals would typically be two separate applications with their own Azure B2C tenants. However, for simplicity, this demo uses a unified Azure B2C tenant for authentication and account management across both portals.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Microservices](#microservices)
- [Frontend Tech Stack](#frontend-tech-stack)
- [Backend Tech Stack](#backend-tech-stack)

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (version 22 or higher recommended)
- **npm** or **yarn** (package manager)

## Project Structure

Here is an overview of the key directories in the project:

- **`frontend/src/app`**: Contains Next.js pages and components for the application, including routing and main UI layout.
- **`frontend/src/components`**: Reusable React components used throughout the app, such as form elements, buttons, modals, etc.
- **`frontend/src/hooks`**: Custom hooks for managing application state, fetching data, and interacting with external APIs.
- **`frontend/src/mock`**: Hard-coded mock data used for testing and development purposes.
- **`frontend/src/models`**: TypeScript interfaces and types representing the data models used across the application.
- **`frontend/src/msal`**: Contains MSAL (Microsoft Authentication Library) related configurations, components, custom hooks, and wrappers.
- **`frontend/src/service`**: Service files for connecting to APIs, handling data requests, and managing authentication (e.g., MSAL).
- **`frontend/src/store`**: Redux store configuration and slices for state management.
- **`frontend/src/svg`**: SVG files used for icons and other vector-based elements in the UI.
- **`frontend/src/utils`**: Utility functions and helper methods used across different parts of the project to perform common tasks like formatting, validation, etc.

## Microservices

### Business
- **CRM.API.Business.Identity:** Register your business on the platform.
- **CRM.API.Business.Appointment:** Manage appointments in various stores.
- **CRM.API.Business.Employee:** Assign and manage employees for each store.
- **CRM.API.Business.Store:** Add and manage stores in various locations.
- **CRM.API.Business.Service:** Define and categorize services offered at each store.

### Client
- **CRM.API.Client.Identity:** Clients can register and create profiles.
- **CRM.API.Client.Service:** Find services based on location and other filters.
- **CRM.API.Client.Appointment:** Book appointments with businesses for various services.

### Functions
- **CRM.Functions.Background:** Time trigger background tasks.

## Frontend Tech Stack

- **Next.js (14.2.15)**: A React framework with server-side rendering and static site generation.
- **React (18)**: A JavaScript library for building user interfaces.
- **TypeScript (5.6.3)**: A statically typed superset of JavaScript.
- **Tailwind CSS (3.4.13)**: A utility-first CSS framework for building responsive UIs.
- **MSAL Browser (3.26.1)**: Microsoft Authentication Library for handling authentication in browser-based applications.
- **MSAL React (2.1.1)**: A library for integrating MSAL with React applications.
- **Redux Toolkit (2.2.8)**: A toolkit for efficient Redux development.
- **Leaflet (1.9.4)**: An open-source JavaScript library for interactive maps.
- **React Redux (9.1.2)**: Official React bindings for Redux.
- **React Leaflet (4.2.1)**: React components for Leaflet maps.
- **ESLint**: A linter to ensure code quality and consistency.


## Backend Tech Stack

- **Backend:** .NET 8 (Isolated Worker), Azure Functions v4
- **Database:** Azure SQL Server
- **Database Migration:** Fluent Migrator
- **Authentication:** Azure AD B2C
- **Configuration & Secrets Management:** Azure App Configuration, Azure Key Vault
- **API Documentation:** OpenAPI
- **Hosting:** Microsoft Azure
