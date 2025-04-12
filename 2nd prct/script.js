// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
  
        const userData = {
          name,
          email,
          password,
        };
  
        // Fake AJAX POST simulation using setTimeout
        setTimeout(() => {
          let users = JSON.parse(localStorage.getItem("users")) || [];
          users.push(userData);
          localStorage.setItem("users", JSON.stringify(users));
          alert("User registered successfully!");
          form.reset();
        }, 500);
      });
    }
  
    // If on users.html, show user list
    if (window.location.pathname.includes("users.html")) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const container = document.getElementById("userList");
  
      if (users.length === 0) {
        container.innerHTML = "<p>No users found.</p>";
      } else {
        let html = "<ul class='list-group'>";
        users.forEach((user, index) => {
          html += `<li class='list-group-item'>
            <strong>${index + 1}. ${user.name}</strong><br/>
            Email: ${user.email}
          </li>`;
        });
        html += "</ul>";
        container.innerHTML = html;
      }
    }
  });
  