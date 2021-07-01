import App from "./app";
import Router from './router';
import Home from "./pages/Home";
import About from "./pages/About";

new App();
const router = new Router();

router.addRoutePath('/', Home)
router.addRoutePath('/about', About)

