
    // Interactive menu functionality
    const list =[];
    const menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            // Hide all menu content
            document.querySelectorAll('.menu-content').forEach(content => {
                content.style.display = 'none';
            });
            // Show clicked menu content
            const contentId = event.target.id + '-content';
            document.getElementById(contentId).style.display = 'block';
        });
    });

    // Form validation
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        console.log(name + "and" + email);

        if (name === '' || email === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Form submitted successfully!');
        updateDynamicContent(name, email);
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Dynamic content update
    function updateDynamicContent(name, email) {
        const dynamicContent = document.getElementById( "dynamic-content");
        dynamicContent.innerHTML = `<p>Welcome, ${name}!</p><p>Your email is ${email}.</p>`;
    }
