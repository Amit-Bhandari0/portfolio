# **Personal Portfolio ✨**

This repository hosts the code for my personal portfolio website, meticulously crafted to showcase my expertise as an **AI/ML Developer** and **Python Backend Engineer**. Built with the robust Django framework, this platform offers a dynamic and engaging experience, highlighting my diverse projects, technical proficiencies, and professional contact information.

## 🚀 Live Demo

🌐 Visit at [amit-bhandari.com.np](https://amit-bhandari.com.np)  

## **🌟 Features**
* **Home Section**: Clean intro with a typewriter animation and direct links to socials and projects.  
* **About Me**: Snapshot of my journey in AI/ML and backend, with a neat skill list.  
* **Projects**: Snake Game, Space Invaders, Flappy Bird — each with GitHub + docs.  
* **Contact**: Sleek form with confetti on send (desktop-only), plus all my contact info.  
* **Responsive**: Looks dope on all screens — mobile, tablet, desktop.  
* **SEO Ready**: Meta tags added for better Google visibility + social sharing.  
* **Django Backend**: Handles contact forms and manages site data efficiently.  


## **🛠️ Technologies Used**

* **Backend**:  
  * Python  
  * Django  
* **Frontend**:  
  * HTML5  
  * CSS3 (Custom, responsive styling)  
  * JavaScript (for interactive elements like typing effects, confetti, and navigation)  
  * Font Awesome (for a rich set of icons)  
* **Deployment**: (Add your deployment platform here, e.g., Heroku, Vercel, AWS, DigitalOcean, etc.)

## **📁 Project Structure**

The project adheres to a well-organized Django project structure, with distinct applications managing specific functionalities.

.  
├── my\_portfolio/             \# Django project root  
│   ├── settings.py           \# Project settings  
│   ├── urls.py               \# Project URL configurations  
│   └── wsgi.py  
├── static/                   \# Centralized static files (CSS, JS, images)  
│   ├── css/  
│   ├── images/  
│   └── js/  
├── templates/                \# HTML templates for rendering  
│   ├── base.html             \# Foundational template for consistent layout  
│   ├── home.html             \# Primary page integrating all main sections  
│   ├── sections/             \# Modular HTML sections included in home.html  
│   │   ├── about.html  
│   │   ├── contact.html  
│   │   ├── home\_content.html  
│   │   └── projects.html  
│   ├── docs/                 \# Dedicated documentation pages for individual projects  
│   │   ├── flappy\_docs.html  
│   │   ├── snake\_docs.html  
│   │   └── space\_docs.html  
│   └── ...  
├── manage.py                 \# Django's command-line utility  
├── requirements.txt          \# Python dependency list  
├── LICENSE                   \# Project license file  
└── README.md                 \# This comprehensive documentation file

## ⚙️ Setup and Installation

Wanna run this locally? Here's how to get it rollin':

---

### 1. Clone the repository  
\`\`\`bash  
git clone https://github.com/Amit-Bhandari0/portfolio.git  
cd portfolio  
\`\`\`

---

### 2. Create a virtual environment  
\`\`\`bash  
python -m venv venv  
\`\`\`

---

### 3. Activate the virtual environment  

**Windows:**  
\`\`\`bash  
venv\Scripts\activate  
\`\`\`

**macOS/Linux:**  
\`\`\`bash  
source venv/bin/activate  
\`\`\`

---

### 4. Install dependencies  
\`\`\`bash  
pip install -r requirements.txt  
\`\`\`

---

### 5. Apply database migrations  
\`\`\`bash  
python manage.py migrate  
\`\`\`

---

### 6. (Optional) Create a superuser for admin access  
\`\`\`bash  
python manage.py createsuperuser  
\`\`\`  
*Follow the prompts for username, email, and password.*

---

### 7. Run the development server  
\`\`\`bash  
python manage.py runserver  
\`\`\`

Then open your browser and go to:  
👉 http://127.0.0.1:8000

---

## **💡 Usage**

* Navigate effortlessly through various sections using the intuitive navbar or by scrolling.  
* Delve into detailed project descriptions by clicking the "Docs" link associated with each project.  
* Utilize the contact form to send direct messages.

## **🤝 Contributing**

Contributions are welcome\! If you have suggestions for enhancements or identify any issues, please feel free to open an issue or submit a pull request.

1. Fork the repository.  
2. Create a new feature branch: git checkout \-b feature/your-feature-name  
3. Implement your changes and commit them: git commit \-m 'Add your feature'  
4. Push your branch to the remote repository: git push origin feature/your-feature-name  
5. Open a pull request for review.

## 📧 Contact

Let's connect 👇  
- 🌐 Website: [amit-bhandari.com.np](https://amit-bhandari.com.np)  
- 📬 Email: [amit00bhandari@gmail.com](mailto:amit00bhandari@gmail.com)  
- 📞 Phone/WhatsApp: [+977 9820956228](https://wa.me/9779820956228)  
- 💼 LinkedIn: [Amit Bhandari](https://www.linkedin.com/in/amit-bhandari-15a6b2339)  
- 💻 GitHub: [@Amit-Bhandari0](https://github.com/Amit-Bhandari0)  


## ⚖️ License

Licensed under the [MIT License](./LICENSE).
