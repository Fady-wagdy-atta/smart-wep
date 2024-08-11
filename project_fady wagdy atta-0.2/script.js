document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navList = document.getElementById('select_section');

    // Build the navigation menu dynamically 
    if (navList.childElementCount === 0) {
        sections.forEach(section => {
            const navItem = document.createElement('li');
            const navLink = document.createElement('a');
            navLink.href = `#${section.id}`;
            navLink.textContent = section.querySelector('h2') ? section.querySelector('h2').textContent : section.id;
            navItem.appendChild(navLink);
            navList.appendChild(navItem);
        });
    }



    // active section and nav link
    const navLinks = document.querySelectorAll('#select_section a');
    const setActiveSection = (targetSection) => {
        sections.forEach(section => {
            if (section === targetSection) {
                section.classList.add('active-section');
            } else {
                section.classList.remove('active-section');
            }
        });

        navLinks.forEach(navLink => {
            if (targetSection && navLink.getAttribute('href').substring(1) === targetSection.id) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        });
    };

    // smooth scroll on navigation link click
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
            setActiveSection(targetSection);
        });
    });

    if (sections.length > 0) {
        setActiveSection(sections[0]);
    }

    //comment form submission
    document.getElementById('comment-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const comment = document.getElementById('comment').value;

        const commentList = document.getElementById('comments-list');
        const commentItem = document.createElement('div');
        commentItem.classList.add('comment-item');
        commentItem.innerHTML = `
            <p><strong>${name} (${email}):</strong></p>
            <p>${comment}</p>
        `;
        commentList.appendChild(commentItem);

        this.reset();
    });

    // Toggle navigation menu on button click
    const toggleNavButton = document.getElementById('toggle-nav-btn');
    const navBar = document.getElementById('nav_bar');

    toggleNavButton.addEventListener('click', () => {
        if (navBar.style.display === 'none' || navBar.style.display === '') {
            navBar.style.display = 'block';
        } else {
            navBar.style.display = 'none';
        }
    });
});
