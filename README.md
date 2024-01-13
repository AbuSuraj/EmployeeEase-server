# Employee-Ease
Welcome to the server-side code of the Employee Ease project! 
## How to use this project

1. Clone the GitHub repository to your local machine.

   ```bash
   git clone https://github.com/AbuSuraj/EmployeeEase-server.git

2. Navigate to the project directory.

   ```
    cd EmployeeEase-server.

3. Install the project dependencies using npm.
   ``` 
   npm install.
4. Run the following command
   ```
   npm start
# Employee Ease API Documentation

## Base API: `https://employee-ease-server.vercel.app`
## Base API Local: `http://localhost:5000`

### 1. GET Employees

- **Endpoint:** `/api/employees/`
- **HTTP Method:** `GET`
- **Description:** Retrieves a list of all employees in the company.
- **Example:** `http://localhost:5000/api/employees/`

### 2. Add Employee

- **Endpoint:** `/`
- **HTTP Method:** `POST`
- **Description:** Adds a new employee to the company.
- **Input Format:**
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
  }
### 2. Send Email

- **Endpoint:** `/api/employees/send-email`
- **HTTP Method:** `POST`
- **Description:** Sends an email to one or more employees.
- **Example:** `http://localhost:5000/send-email`
- **Input Format:**
  ```json
  {  
  "email": ["employee1@example.com", "employee2@example.com"],
  "subject": "Meeting Announcement",
  "body": "Dear team, we have an upcoming meeting..."
  }
- Brevo email sevice is used here.

