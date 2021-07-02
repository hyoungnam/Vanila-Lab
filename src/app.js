
export default class App {
  constructor() {
    const root = document.getElementById("root");
    const header = document.createElement("div");
    header.innerHTML = `
      <a href="/" class="btn">AnchorTag Home</a>
      <a href="/about" class="btn">AnchorTag About</a>
      <button class="btn2" data-link="/">History Home</button>
      <button class="btn2" data-link="/about">History About</button>
      <main id="main"></main>
    `;
    root.appendChild(header);
  }
}
