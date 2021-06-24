import Home from "./pages/Home";
import About from "./pages/About";

const ROUTES = {
  "/": Home,
  "/about": About,
};

export const router = () => {
  const body = document.getElementById("body");
  body.innerHTML = ROUTES[window.location.pathname];
};
