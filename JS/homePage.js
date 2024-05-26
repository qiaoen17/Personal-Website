// on click, change the fa-circle clicked to fa-circle-o

document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('#circles i');
    const banner = document.getElementById('project-banner');
    const proj_title = document.getElementById("project-title");
    const proj_descr = document.getElementById("project-description");

    const images = [
        'url("../images/SETA.png")',
        'url("../images/photo-gallery.png")',
        'url("../images/chess-game.jpg")',
        'url("../images/kiwi-bot.jpg")',
    ];
    const proj_titles = [
        'SETA',
        'Photo Gallery',
        'Chess game',
        'Kiwi Bot'
    ]
    const proj_desc = [
        "SETA (Teaching Assistant Management System) is a comprehensive Java application designed to streamline and enhance the management of teaching assistants (TAs) within educational institutions. This application provides a centralized platform for administrators and instructors to efficiently assign, schedule, and track TA responsibilities, improving overall workflow and communication.",
        "The Simple Photo Gallery project is a sleek and modern web application designed to showcase a collection of photos. Built using HTML, CSS, and JavaScript, this project provides a visually appealing and interactive experience for users to view and navigate through images. The gallery is responsive, ensuring compatibility across various devices and screen sizes.",
        "Web Chess Master is a sophisticated and interactive chess game web application designed for chess enthusiasts of all levels. Developed using React, this web app provides a seamless and engaging platform to play chess online. Whether you're a beginner learning the rules or an advanced player looking to challenge yourself, Web Chess Master offers a robust and enjoyable experience.",
        "The Task Management CRUD App with Chat Bot Integration is a simple yet powerful application designed to facilitate task management for individuals and teams. Built with ease of use in mind, this app provides basic CRUD (Create, Read, Update, Delete) functionality for managing tasks, along with integration with a chat bot for natural language input and task creation."
    ]

    function handleClick(event) {
        // reset all icons to fa-circle
        icons.forEach(icon => {
            icon.classList.remove('fa-circle-o');
            icon.classList.add('fa-circle');
        })

        // Toggle clicked icon to fa-circle-o
        event.target.classList.remove('fa-circle');
        event.target.classList.add('fa-circle-o');

        // change background image based on clicked icon
        const iconIndex = Array.from(icons).indexOf(event.target);
        changeBackground(iconIndex);

        // change project description 
        changeProjectDescription(iconIndex);

        // change project title
        changeProjectTitle(iconIndex);
    }

    function changeProjectDescription(index) {
        proj_descr.textContent = proj_desc[index];
    }

    function changeProjectTitle(index) {
        proj_title.textContent = proj_titles[index];
    }

    function changeBackground(index) {
        const step = 100;
        banner.style.backgroundImage = images[index];
        banner.style.backgroundPositionY = '-${index * step}px';
    }

    // Add click event listener to each icon 
    icons.forEach(icon => {
        icon.addEventListener('click', handleClick);
    });

    // automatic changing background and icons
    function getCurrentImageIndex() {
        let currentIdx = -1;

        icons.forEach((icon, index) => {
            if (icon.classList.contains('fa-circle-o')) {
                currentIdx = index;
            }
        })

        return currentIdx;
    }
    
    function nextSlide() {
        let currentIdx = getCurrentImageIndex();

        var nextIdx = (currentIdx + 1) % icons.length;

        // change the background image and update classes 
        icons.forEach(icon => {
            icon.classList.remove('fa-circle-o');
            icon.classList.add('fa-circle');
        })

        // Toggle next icon to fa-circle-o
        icons[nextIdx].classList.remove('fa-circle');
        icons[nextIdx].classList.add('fa-circle-o');
        changeBackground(nextIdx);

        changeProjectDescription(nextIdx);
        changeProjectTitle(nextIdx);

    }

    function startCarousel() {
        setInterval(nextSlide, 5000)
    }

    let currentPosition = 0;

    function moveBackground() {
        currentPosition++;
        document.body.style.backgroundPosition = currentPosition + 'px 0';
        requestAnimationFrame(moveBackground);
    }
    
    window.onload = function() {
        moveBackground();
    }

    startCarousel();

});


  
