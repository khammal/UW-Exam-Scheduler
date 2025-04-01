# UW Exam Scheduler

A full-featured exam scheduler built for the University of Waterloo, serving 30,000+ students. The backend is powered by a PostgreSQL database and a Spring Boot RESTful API, while the ReactJS frontend offers a clean and user-friendly interface.

## Visit The Site

Feel free to check out the [project here!](https://uwscheduler.netlify.app/)


## Features

- **PostgreSQL Database:** Stores detailed information about exams, including dates, times, courses, locations, and more.
- **Spring Boot Backend:** Provides a robust RESTful API to manage exam data efficiently. The backend is packaged as a jar and hosted on AWS Elastic Beanstalk.
- **ReactJS Frontend:** A user-friendly interface for viewing, adding, editing, and deleting exam information. The frontend is hosted on Netlify.

## Prerequisites

Before running this project locally, ensure you have the following installed:

- Java Development Kit (JDK) 8 or higher
- Node.js and npm (Node Package Manager)
- PostgreSQL database
- IDE (IntelliJ IDEA, Eclipse, VS Code, etc.)

## Installation

### Backend Setup

1. Clone this repository.
2. Open the `backend` directory in your preferred IDE.
3. Configure the `application.properties` file in the `src/main/resources` directory with your PostgreSQL database credentials.
4. Run the Spring Boot application.

### Frontend Setup

1. Navigate to the `frontend` directory in your terminal.
2. Run `npm install` to install the necessary dependencies.
3. Update the `src/config.js` file with the appropriate backend API URL.
4. Run `npm start` to start the ReactJS application.

## Usage

- Access the frontend application via `http://localhost:3000`.
- Use the provided API endpoints to perform CRUD operations on exam data:
  - `/api/exams` - GET all exams, POST a new exam, DELETE all exams.
  - `/api/exams/{examId}` - GET, PUT, or DELETE a specific exam by ID.

