# **Prescripto - Full-Stack Doctor Appointment Booking Website**

**Prescripto** is a streamlined online doctor appointment booking system designed to enhance patient-doctor interaction. It allows patients to effortlessly schedule and manage appointments, while doctors can oversee bookings and update their profiles. With its intuitive interface, secure payment integration, and smooth functionality, it ensures a hassle-free and efficient healthcare experience for all users.

# **Key Technologies**

Frontend: React.js with Vite and Tailwind CSS for fast and responsive UI development.

Backend: Node.js with Express.js for secure and efficient API handling.

Database: MongoDB for robust and scalable data storage.

Payment Integration: Razorpay for seamless and secure payment processing.


# **Features**

# **General Features**

Neat and Clean UI: A visually appealing, user-friendly design.
Responsive Design: Fully optimized for mobile, tablet, and desktop devices.
Easy to Use: Intuitive navigation and workflow for all users.
Secure Payments: Integrated with Razorpay for hassle-free online transactions.

# **Role-Based Functionality**
# 1. Patient Features:

Register and log in securely.
Search for doctors by specialties like General Physician, Neurologist, Psychologist, Psychiatrist, etc.
Book appointments and manage existing bookings.
View detailed appointment history.
Update profile information, including photo, contact details (email, phone, address), gender, and age.

# 2. Doctor Features:

Log in to a personalized dashboard.
View and manage appointments and patient details.
Monitor total earnings and appointment history.
Cancel or confirm appointments.
Update profile details such as experience, specialization, fees, address, and availability.

# 3. Admin Features:

Secure admin login.
Add new doctors to the system.
View and manage all appointments.
Monitor the latest bookings and the full list of doctors.
Update doctor availability status.


# API Highlights
APIs for handling patient, doctor, and admin functionalities.
Admin-specific APIs for login, managing doctors, and monitoring appointments.



# **How to Setup & Run this Project**

Install NodeJs ( Ignore If Already Installed)
 1. Visit the official Node.js website i.e) https://nodejs.org/en/download/
 2. Download the Node.js installer
 3. Run the installer.
 4. Follow the prompts in the installer.


 #      **—First Run Backend then Frontend & Admin—**
 
# **Steps To Setup Backend Of The Project**
  1. OpenProject Folder In VS Code
  2. OpenIntegrated Terminal
      - Right Click on ‘backend’ > Select “Open In Integrated Terminal”
  3. Type “npm install” and press Enter and Wait for Installation to be completed (requires Internet)

4. Setup Cloudinary for file storage.
  Create account and login to: https://cloudinary.com/
  The go to Dashboard
  Copy and paste the Cloud Name, API Key, And Secret Key in the
  backend / .env file:

5. Setup The MongoDB
  a. Open this link:https://www.mongodb.com/cloud/atlas/register
  b. After that Sign Up on the website.
  c. Click on New Project Option
  d. After Creating Project go to Database Section & Build a database
  e. Select M0 & Your Region & Create Database
  f. Setup Username & Password & Create User
      Note: Do not use ‘@’ symbol in the password
  g. NowClick on Finish & Close
  h. Whitelist IP0.0.0.0&ClickonAddEntry
  i. NowClickonConnect
  j. NowSelectCompassOption
  k. AndCopytheConnectionString
  i. And Paste It in the backend / .env file and replace the <password> with
  the password you set previously in 4.F & save changes.

6. Setup Stripe ( Optional )
  a. create a stripe account from here
  b. After creating account get the Stripe Secret Key from dashboard
  c. Paste the Secret Key in backend / .env file and save file

7. Setup Razorpay( Optional )
  a. create a razorpay account from here
  b. After creating account get the Razorpay Secret Key & Razorpay Key ID from dashboard    
  c. Paste the Secret Key in backend / .env file and save file

8. To Run Backend use npm run server command in Integrated Terminal

**Before Running Frontend or Admin Projects make sure Backend is
 Running in the background terminal**

# **Steps To Run Frontend of The Project**

 1. Right Click on ‘frontend’ folder > Select “Open In Integrated Terminal”
 2. Type “npm install” and press Enter and Wait for Installation to be completed
 (requires Internet)
 3. After that type “npm run dev” in terminal
 4. Now you will see the ‘http://localhost:5173’ link in that terminal. Open that link
 in the browser.


# **Steps To Run Backend of The Project**

 1. Right Click on ‘admin’ folder > Select “Open In Integrated Terminal”
 2. Type “npm install” and press Enter and Wait for Installation to be
 completed (requires Internet)
 3. After that type “npm run dev” in terminal
 4. Now you will see the ‘http://localhost:5174’ link in that terminal. Open
 that link in the browser.
