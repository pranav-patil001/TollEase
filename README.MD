# 🚗 Tollify  🚗

Toll Management System to manage toll plaza and vehicle passes using **Bootstrap**, **Node.js**, **MongoDB**!

## ✨ Features

- 🔄 **Dynamic Data**: Powered by **Mongoose** for real-time database interactions.
- 👥 **Role-Based Views**: Different views for Admin and Staff to manage toll operations effectively.
- 🏢 **Manage Entire Toll Plaza**: Admin can monitor all toll activities and make real-time updates.
- 📊 **Sales Reports**: View and manage toll sales month-wise with visual reports and statistics.
- 📱 **Responsive Layout**: Optimized for both desktop and mobile use with a clean and modern design.
- 🗂 **Report Management**: Track and manage toll transactions, passes, and receipts.
- 🔓 **Open Source**: Free to use and customize for your toll management needs.
- 📸 **Automatic Number Plate Recognition (ANPR)**: Integrates with ANPR technology to automatically detect and log vehicle details, streamlining toll processing and reducing manual effort. ANPR is implemented using **PyScript**, allowing seamless integration of Python scripts in the web interface.

## 🚀 Key Highlights

- **Efficient Toll Monitoring**: The system provides a central platform to track all toll plaza activities, payments, and penalties.
- **User-Friendly Interface**: Simple and intuitive UI for both users and operators, ensuring a smooth experience.
- **Data Visualization**: Built-in support for generating and viewing dynamic graphs and reports for better decision-making.
- **ANPR Integration**: Seamlessly recognizes and logs vehicle number plates for faster toll clearance and enhanced security using **PyScript**.

## 💻 Tech Stack

- **Frontend**: 
  - HTML, CSS, Bootstrap (for responsive and modern UI)
  - EJS (for dynamic templating)
- **Backend**: 
  - Node.js with Express (for backend routing and server management)
  - Mongoose (for database interaction with MongoDB)
- **Database**: MongoDB (for storing user data, passes, receipts, and reports)
- **Security**: bcrypt for password encryption and secure authentication
- **Session Management**: Express-session for maintaining user sessions during login
- **ANPR Technology**: Integrates **PyScript** for Python-based ANPR functionality, enabling number plate detection and logging directly in the web application.

## 📂 Directory Structure

- **Controller**: Handles routing and business logic for Admin, Login, and Staff.
- **Models**: Contains Mongoose schemas for Categories, Passes, Receipts, and Users.
- **Public**: Static assets like CSS, images, and JavaScript files.
- **Routes**: Defines the routing logic for the application.
- **Server.js**: Starts the server and connects to MongoDB.
- **Services**: Contains business logic for Admin, Login, and Staff functionalities.
- **Views**: Contains **EJS** templates for dynamic pages (e.g., dashboard, pass management, receipts).
- **PyScripts**: Contains Python scripts for ANPR processing using PyScript.

## ⚙️ How It Works?

### Admin Panel
- 📈 **Dashboard**: View overall statistics like total toll collection, active passes, and more.
- 📝 **Manage Users**: Admin can add, edit, or delete users and assign roles.
- 📊 **Sales Report**: View detailed month-wise toll collection data, with graphical representation.
- 🛠 **Toll Management**: Update toll rates, manage booth statuses, and generate receipts.
- 📸 **ANPR Management**: Monitor and manage number plate recognition logs for improved toll processing. The ANPR functionality is powered by **PyScript**, allowing Python-based real-time detection.

### Staff Panel
- 🚗 **Manage Passes**: Renew and update the passes of users.
- 🧾 **Manage Transactions**: Manage payments and toll usage.

## 📝 Roadmap

Future improvements to the Toll Management System:

- **Real-Time Traffic Monitoring**: Integrate with sensors or APIs to track traffic and provide live updates.
- **Mobile App Integration**: Develop a mobile app for users to access and manage their toll passes and payments.
- **Advanced Data Analytics**: Implement predictive analytics to help toll operators forecast traffic patterns and optimize resource management.
- **Enhanced ANPR Features**: Improve accuracy and speed of number plate detection using AI-based solutions, with expanded support for PyScript integrations.

## 💡 Contributing

We welcome contributions! If you'd like to improve the project or add new features, please fork the repository and submit a pull request.

### How to Contribute:
1. Fork the repo and create a new branch (`git checkout -b feature-branch`).
2. Make your changes and commit them (`git commit -am 'Add new feature'`).
3. Push to your branch (`git push origin feature-branch`).
4. Create a new pull request.

## 🤝 Acknowledgements

- Thanks to the **Node.js** and **MongoDB** communities for providing the tools that made this project possible.
- Special thanks to the open-source contributors whose libraries were used in this project.
- Gratitude to the **PyScript** community for enabling seamless Python integration in web applications.

---

Let’s make toll management smarter and more efficient! 🚀

