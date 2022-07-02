// SIDEBAR
const sidebarMobileBtn = document.querySelector("#sidebar-mobile-btn");
const sidebarMobile = document.querySelector("#main-sidebar");
const sidebarMobileCloser = document.querySelector("#sidebar-closer");
const sidebarMenuLink = document.querySelectorAll("#sidebar-menu ul li a");

sidebarMobileBtn.addEventListener("click", function () {
  sidebarMobile.classList.remove("-translate-x-full");
  sidebarMobileCloser.classList.remove("hidden");
});

sidebarMobileCloser.addEventListener("click", function () {
  sidebarMobileCloser.classList.add("hidden");
  sidebarMobile.classList.add("-translate-x-full");
});

sidebarMenuLink.forEach((link) => {
  link.addEventListener("click", function () {
    sidebarMobileCloser.classList.add("hidden");
    sidebarMobile.classList.add("-translate-x-full");
  });
});

const version = document.querySelector("#button");
const versionTooltip = document.querySelector("#tooltip");

tippy("#version", {
  content: '<span class="text-xs">D-UI Current version</span>',
  allowHTML: true,
  placement: "auto",
});
