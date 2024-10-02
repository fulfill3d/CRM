# CRM Demo Application

## Overview

The CRM Demo Application is a feature-rich system designed to serve both businesses and clients. This app allows businesses to efficiently manage their stores, employees, services, and appointments, while clients can find nearby services, book appointments, and manage their bookings effortlessly. The system is designed with a dual-portal architecture, where both **Business** and **Client** functionalities are integrated into a single app for demonstration purposes.

In a real-world scenario, the **Business** and **Client** portals would typically be two separate applications with their own Azure B2C tenants. However, for simplicity, this demo uses a unified Azure B2C tenant for authentication and account management across both portals.

### Key Features

#### Business Portal
- **Store Management**: Create, edit, and manage stores with detailed information such as location, description, and employees.
- **Employee Management**: Add, update, and remove employees from stores. Handle employee details, including their roles and store assignments.
- **Service Management**: Define and manage services offered by the store, including pricing, duration, and categorization.
- **Appointment Management**: Handle client appointments, track statuses, and manage bookings in real-time.

#### Client Portal
- **Service Discovery**: Clients can browse nearby services based on their location, view detailed information, and book appointments.
- **Appointment Management**: Clients can manage their upcoming and past appointments, reschedule or cancel them as needed.
- **Store Information**: View detailed information about stores, including location, services offered, and available employees.

### Tech Stack

- **Frontend**:
    - **Next.js 14**: A modern React-based framework for server-side rendering and static site generation.
    - **Tailwind CSS**: Utility-first CSS framework for fast and responsive design.
    - **React Leaflet**: Interactive maps for displaying store locations and employee coordinates.

- **Backend**:
    - **.NET 8**: Backend services are powered by .NET microservices, delivering a scalable, high-performance API.
    - **Azure Functions**: Serverless architecture for handling business logic and background tasks.
    - **Azure Service Bus**: Manages communication between different microservices using message queues.
    - **Azure Redis Cache**: Caching layer to ensure fast data retrieval and reduce database load.

- **Authentication & Authorization**:
    - **Azure B2C**: Unified identity provider for both business and client users, leveraging Microsoft Azure's identity and access management platform.

- **State Management**:
    - **Redux**: Used to manage the local application state for both logged-in and anonymous users. If the user remains anonymous, changes to the app state will not persist.

- **Cloud Infrastructure**:
    - **Microsoft Azure**: The app leverages Azure for hosting, serverless computing (Azure Functions), and microservices architecture.
    - **Azure API Management (APIM)**: For managing API endpoints securely.

### Architecture

This demo uses a microservices architecture hosted on Microsoft Azure. The backend consists of independent microservices handling store management, appointment booking, identity management, and client services. These services communicate via Azure Service Bus to ensure loose coupling and scalability.

### Authentication Flow

The app uses Azure B2C to authenticate both business and client users. For demo purposes, users have access to both business and client functionalities upon signing up. If the user does not log in, mock data is used for demonstration purposes, and any changes made by the user are stored locally and do not persist across sessions.

