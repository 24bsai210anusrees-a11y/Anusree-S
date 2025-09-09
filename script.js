// footer year
document.getElementById("year").textContent = new Date().getFullYear();

// smooth scroll for "View My Work"
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// contact form demo
document.querySelector(".contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  alert(`Thanks ${name}!\nEmail: ${email}\nPhone: ${phone}`);
});

// profile pic fallback if link fails
const img = document.getElementById("profile-pic");
img.onerror = () => {
  img.src = "https://via.placeholder.com/120?text=Profile";
};