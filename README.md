# **Personal Portfolio ✨**

This repository hosts the code for my personal portfolio website, meticulously crafted to showcase my expertise as an **AI/ML Developer** and **Python Backend Engineer**. Built with the robust Django framework, this platform offers a dynamic and engaging experience, highlighting my diverse projects, technical proficiencies, and professional contact information.

## **🚀 Live Demo**

Experience the live portfolio and explore my work:

## **🌟 Features**

* **Home Section**: An inviting introduction featuring a captivating typing animation and direct links to my social profiles and key portfolio sections.  
* **About Me Section**: A comprehensive overview of my professional journey, specializing in AI/ML and Python Backend development, complemented by a detailed list of my technical skills.  
* **Projects Section**: A curated showcase of my notable projects (e.g., Snake Game, Space Invaders, Flappy Bird), each accompanied by a concise description, direct links to their GitHub repositories, and in-depth documentation.  
* **Contact Section**: A streamlined contact form designed for seamless communication, complete with intuitive validation and a delightful confetti animation upon successful submission (optimized for desktop viewing). Essential contact details including email, phone, and location are also provided.  
* **Responsive Design**: Engineered for optimal viewing and interaction across all devices, from large desktops to tablets and mobile phones.  
* **SEO Optimized**: Enhanced with strategic meta tags to improve search engine visibility and ensure consistent social media sharing, utilizing amit-bhandari.com.np as the canonical URL.  
* **Django Backend**: Powered by a robust Django backend, ensuring efficient handling of form submissions and streamlined content management.

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

## **⚙️ Setup and Installation**

Follow these steps to set up and run the project locally:

1. **Clone the repository:**  
   git clone https://github.com/Amit-Bhandari0/portfolio.git  
   cd portfolio

2. **Create a virtual environment:**  
   python \-m venv venv

3. **Activate the virtual environment:**  
   * **Windows:**  
     .\\venv\\Scripts\\activate

   * **macOS/Linux:**  
     source venv/bin/activate

4. **Install dependencies:**  
   pip install \-r requirements.txt

5. **Apply database migrations:**  
   python manage.py migrate

6. **Create a superuser (optional, for Django admin access):**  
   python manage.py createsuperuser

   *Follow the prompts to create your administrative user.*  
7. **Run the development server:**  
   python manage.py runserver

   *The website will be accessible in your browser at http://127.0.0.1:8000/.*

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

## **📧 Contact**

Feel free to reach out through any of the following channels:

* **Website**: [amit-bhandari.com.np](https://amit-bhandari.com.np)  
* **Email**: amit00bhandari@gmail.com  
* **Phone**: \+977 9820956228  
* **WhatsApp**: [\+977 9820956228](https://www.google.com/search?q=https://wa.me/9779820956228)  
* **LinkedIn**: [Amit Bhandari](https://www.linkedin.com/in/amit-bhandari-15a6b2339)  
* **GitHub**: [Amit-Bhandari0](https://github.com/Amit-Bhandari0)

## **⚖️ License**

This project is licensed under the MIT License. For full details, please refer to the [LICENSE](https://www.google.com/search?q=LICENSE) file in this repository.