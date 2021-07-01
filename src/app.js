// import { router } from "./router";

export default class App {
  constructor() {
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
