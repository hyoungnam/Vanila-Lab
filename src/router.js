export default class Router {
  constructor() {
    this.routePages = new Map()
    document.addEventListener("DOMContentLoaded", () => {
      document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
          e.preventDefault();
          history.pushState(null, null, e.target.getAttribute("data-link"));
          this.route();
        }
      });
      this.route();
    })
    window.addEventListener("popstate", () => {
      this.route();
    });
  }
  addRoutePath(path, page) {
    this.routePages.set(path, page)
  }
  route() {
    const page = this.routePages.get(window.location.pathname);
    new page();
  };
}