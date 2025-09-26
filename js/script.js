const menuList = document.querySelectorAll(".nav > ul > li");
console.log(menuList);
const submenuList = document.querySelectorAll(".submenu");
const navBg = document.querySelector(".navi_bg");
const box = document.querySelector(".box");

menuList.forEach(function (menu) {
  menu.addEventListener("mouseover", function () {
    submenuList.forEach(function (submenu) {
      submenu.style.height = "400px";
      navBg.style.height = "400px";
    });
  });

  menu.addEventListener("mouseout", function () {
    submenuList.forEach(function (submenu) {
      submenu.style.height = "0px";
      navBg.style.height = "0px";
    });
  });
});

const video = document.getElementById("intro-video");
const opening = document.getElementById("opening");
const main = document.getElementById("main-content");

// 영상이 끝나면 메인 콘텐츠로 전환
video.addEventListener("ended", () => {
  // 배경색을 따뜻한 노란색으로 먼저 변경
  opening.style.backgroundColor = "#ffd580";
  opening.style.transition = "background-color 0.3s ease, opacity 0.8s ease";

  // 잠시 후 페이드아웃 시작
  setTimeout(() => {
    opening.classList.add("fade-out");
  }, 300);

  setTimeout(() => {
    opening.style.display = "none";
    main.style.display = "block";
  }, 1100); // 300ms + 800ms
});
