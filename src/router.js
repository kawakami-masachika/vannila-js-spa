const route = (e) => {
  const event = e || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "/404.html",
  "/": "/views/home.html",
  "/about": "/views/about.html",
  "/profile": "/views/profile.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;