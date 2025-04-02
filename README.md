# Medium Blog Clone

A full-stack Medium.com-inspired blog application that allows users to read blog posts, authenticate with OTP email verification, and manage tasks. Built using **HTML, CSS, JavaScript, PHP**, and **Docker** for deployment.

## 🚀 Features
- **User Authentication** (Signup/Login with email OTP verification)
- **Blog Section** (Fetch and display blog posts using a fake blog API)
- **Navigation Bar** (Search, Write, Notifications, User Profile)
- **Category Filtering** (For You, Following, Featured, etc.)
- **Recommended Topics & Authors**
- **Task Management** (CRUD operations for To-Do application)
- **Responsive UI** (Desktop & Mobile friendly)
- **Docker Integration** (For PHP environment setup)

## 🛠️ Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: PHP (with MySQL)
- **Authentication**: OTP Email Verification
- **Deployment**: Docker

## 📂 Project Structure
```
├── index.php         # Main entry point
├── header.php        # Header section (logo, search, user options)
├── navbar.php        # Navigation bar (categories)
├── footer.php        # Footer section (links, about info)
├── auth/             # Authentication system (login, signup, OTP)
│   ├── login.php
│   ├── signup.php
│   ├── otp_verification.php
├── blog/             # Blog posts section
│   ├── fetch_posts.php
│   ├── single_post.php
├── todo/             # To-Do App (CRUD operations)
│   ├── add_task.php
│   ├── delete_task.php
│   ├── update_task.php
├── docker-compose.yml # Docker configuration
└── README.md         # Project documentation
```

## 🏗️ Installation & Setup
### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/medium-blog-clone.git
cd medium-blog-clone
```

### Step 2: Setup Docker (for PHP & MySQL)
```bash
docker-compose up -d
```

### Step 3: Configure the Database
- Import the `database.sql` file into MySQL.
- Update `config.php` with your database credentials.

### Step 4: Run the Application
- Open `http://localhost/index.php` in your browser.

## 📌 Usage
- Sign up and verify via OTP email.
- Browse and read blogs.
- Add, update, or delete tasks in the To-Do list.
- Search for blog posts and categories.

## 📞 Contact & Contributions
- Feel free to fork the repository and contribute!
- Contact me at [nguettiajemimah@gmail.com](mailto:your-email@example.com)

---
Made with ❤️ by [Jemimah]