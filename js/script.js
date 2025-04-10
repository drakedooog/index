fetch("header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header-container").innerHTML = data;
    // header 加载完成后，执行高亮逻辑
    highlightCurrentNav();
  });
fetch("footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
  });

// 封装高亮函数
function highlightCurrentNav() {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav a");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}
