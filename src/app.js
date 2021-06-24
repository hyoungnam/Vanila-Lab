import { router } from "./router";

export default class App {
  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
          e.preventDefault();
          history.pushState(null, null, e.target.getAttribute("data-link"));
          router();
        }
      });
      router();
    });

    window.addEventListener("popstate", () => {
      router();
    });

    const header = document.createElement("div");
    const root = document.getElementById("root");
    header.innerHTML = `
      <a href="/" class="btn">AnchorTag Home</a>
      <a href="/about" class="btn">AnchorTag About</a>
      <button class="btn2" data-link="/">History Home</button>
      <button class="btn2" data-link="/about">History About</button>
      <div id="body">
        body
      </div>
    `;
    root.appendChild(header);
  }
}
