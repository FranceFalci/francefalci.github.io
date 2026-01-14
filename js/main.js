// const observer = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("visible");
//         observer.unobserve(entry.target);
//       }
//     });
//   },
//   { threshold: 0.15 }
// );

// document.querySelectorAll(".reveal").forEach(el => {
//   observer.observe(el);
// });


// const sections = document.querySelectorAll("section[id]");
// const navLinks = document.querySelectorAll("nav a");

// window.addEventListener("scroll", () => {
//   let current = "";
//   sections.forEach(section => {
//     const sectionTop = section.offsetTop - 80;
//     if (scrollY >= sectionTop) current = section.getAttribute("id");
//   });
//   navLinks.forEach(link => {
//     link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
//   });
// });

// const cursor = document.querySelector('.cursor');

// window.addEventListener('mousemove', (e) => {
//   cursor.style.left = `${e.clientX}px`;
//   cursor.style.top = `${e.clientY}px`;
// });

