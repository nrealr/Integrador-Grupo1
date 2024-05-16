
MediConnect App Project Setup Guide

Developers:
    
    Alejandra Gavotti
    Bastian Sandoval
    Sofia Mansilla
    Nestor Real
    Ignacio Ojeda
    Rod Navea
    Teobaldo Jaque
    Walter Aldana


Project Overview

    Project Name: MediConnect App
    Description: A web application that connects patients with medical providers.
    Programs: Java, IntelliJ IDEA, JavaScript, VSCode, MySQL Workbench.
    Dependencies:
        "axios": "^1.6.8",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router-dom": "^6.23.0"
    Repositories:
        FrontEnd: https://github.com/nrealr/Integrador-Grupo1/
        BackEnd: https://github.com/nrealr/IntegradorBack



Table of Contents

    Prerequisites
    Database Setup
    Backend Setup
    Frontend Setup
    Running the Project

<a name="prerequisites"></a>
1. Prerequisites

Before we begin, make sure you have the following tools installed:

    Java Development Kit (JDK) 11 or later {https://www.oracle.com/java/technologies/downloads/#jdk22-windows}
    IntelliJ IDEA Ultimate Edition {https://www.jetbrains.com/idea/download/?section=windows}
    Node.js (LTS version) {https://nodejs.org/en/download}
    Visual Studio Code {https://code.visualstudio.com/download}
    MySQL Server {https://dev.mysql.com/downloads/mysql/}
    MySQL Workbench {https://dev.mysql.com/downloads/workbench/}


<a name="database-setup"></a>
2. Database Setup

    Server and User Configuration

        Open MySQL Workbench or your preferred MySQL client.
        Create a new server on port 3306 (the default), with TCP/IP enabled and the X Protocol Port set to 33060.
        Set the root user password to "integrador".


    Creation of the Database

        Execute the following SQL queries individually in your MySQL client to create the database and necessary tables:

            1. Create the database

            CREATE DATABASE IF NOT EXISTS MediConnect;
            USE MediConnect;

            2. Create the table

            CREATE TABLE IF NOT EXISTS Doctors (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                lastname VARCHAR(255) NOT NULL,
                rut VARCHAR(255) NOT NULL UNIQUE,
                img VARCHAR(255),
                description VARCHAR(500)
            );

            3. Insert Data

            INSERT INTO Doctors (name, lastname, rut, img, description) VALUES
            ('Juan', 'Pérez', '12345678-9', 'https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@1x.jpg', 'General Practice Doctor. Experienced in providing comprehensive healthcare for individuals of all ages, focusing on preventive care and managing common illnesses.'),
            ('Diana', 'Barij', '98765433-2', 'https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@1x.jpg', 'Dermatologist. Specializing in diagnosing and treating conditions related to the skin, hair, and nails, ensuring optimal skin health and appearance.'),
            ('Gabriel', 'Matuidi', '12345677-9', 'https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@1x.jpg
            ', 'General Practice Doctor. Compassionate healthcare provider dedicated to promoting wellness and addressing a wide range of medical concerns for patients.'),
            ('Patricio', 'Amatista', '98765430-2', 'https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@1x.jpg', 'Dermatologist. Skilled in diagnosing and treating various skin conditions, offering personalized treatment plans for optimal skin health.'),
            ('Viviana', 'Coen', '12345678-1', 'https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@1x.jpg', 'General Practice Doctor. Dedicated to delivering high-quality primary care services, emphasizing disease prevention and health promotion.'),
            ('Martina', 'Merlo', '98765432-9', 'https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@1x.jpg', 'Dermatologist. Expertise in diagnosing and treating skin disorders, offering advanced skincare solutions tailored to individual needs.' ),
            ('Hector', 'Mutena', '12345678-7', 'https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@1x.jpg', 'General Practice Doctor. Committed to providing comprehensive healthcare services, fostering long-term relationships with patients for better health outcomes.'),
            ('Merlina', 'Méndez', '98765433-3', 'https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@1x.jpg', 'Dermatologist. Specializing in diagnosing and managing skin diseases, offering innovative treatments to enhance skin vitality and appearance.'),
            ('Belén', 'Morales', '98765402-4', 'https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@1x.jpg', 'Dermatologist. Skilled in addressing dermatological concerns, employing cutting-edge techniques to achieve healthy and radiant skin.'),
            ('Mateo', 'Antunez', '98765568-1', 'https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-5ae892611bf1a-5168-68b2575aab38f2c97ce8846381d07044@1x.jpg', 'Dermatologist. Passionate about promoting skin health and wellness, offering personalized treatment plans for diverse dermatological conditions.');

            4. Select all data

            SELECT * FROM Doctors

<a name="backend-setup"></a>
3. Backend Setup

    Create a new Java project in IntelliJ IDEA:
        Open IntelliJ IDEA and click on "New Project."
        Select "Java" as the project type and click "Next."
        Choose "Create project from template"
        Name your project and click "Next."
        Select a location for your project and click "Finish."

    Clone the backend repository:

        Open a terminal window in IntelliJ IDEA.
        Navigate to the root directory of your project.
        Run the following command to clone the backend repository:
            git clone https://github.com/nrealr/IntegradorBack

    Import the backend project:
        In IntelliJ IDEA, click on "File" > "Open."
        Navigate to the cloned backend repository and click "OK."
        IntelliJ IDEA will automatically detect the project and import it.

    Verification of Backend Functionality
        Open Postman or another tool for testing APIs.
        Use the following endpoints to test the API:
            Add a doctor: POST to http://localhost:8081/doctors/add
            List doctors: GET to http://localhost:8081/doctors/list


<a name="frontend-setup"></a>
4. Frontend Setup

    Create a new JavaScript project in Visual Studio Code:
        Open Visual Studio Code and click on "File" > "Open Folder."
        Select a location for your project and click "New Folder."
        Name your project and click "OK."

    Clone the frontend repository:
        Open a terminal window in Visual Studio Code.
        Run the following command to clone the frontend repository:
            git clone https://github.com/nrealr/Integrador-Grupo1/

    Install dependencies:

        In the terminal window, navigate to the cloned frontend repository.
        Run the following command to install the dependencies:
            npm install



<a name="running-the-project"></a>
5. Running the Project

    Start the backend server:
        In IntelliJ IDEA, navigate to the main class of the backend project with the main method that starts the application.
        Run the main class to start the backend server.

    Start the frontend server:
        In VSCode, start the development server by running npm start in the terminal.

That's it! Your backend should be running on a port 3306, and the frontend should be accessible in a web browser at http://localhost:8081.