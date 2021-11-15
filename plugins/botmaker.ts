//@ts-nocheck

import { Plugin } from "@nuxt/types";

 const plugin : Plugin  = (_context, inject) => {
  // insert botmaker to DOM
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.async = 1;
  script.src = "https://go.botmaker.com/rest/webchat/p/2D8VCO3NEB/init.js";
  document.body.appendChild(script);
  const hide = () => {
    document.getElementsByName("Botmaker").length
      ? window.bmHide()
      : (document.querySelector(
          "a[href='https://wa.me/51933659441?text=Hola Carlos, necesito ayuda con el servicio']"
        ).parentElement.style.display = "none");
  };
  const show = () => {
    document.getElementsByName("Botmaker").length
      ? window.bmShow()
      : (document.querySelector(
          "a[href='https://wa.me/51933659441?text=Hola Carlos, necesito ayuda con el servicio']"
        ).parentElement.style.display = "block");
  };
  inject("botmaker", { hide, show });
}

export default plugin;
