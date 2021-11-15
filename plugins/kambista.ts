import { Plugin } from "@nuxt/types";
import Kambista from "~/shared/ui/utils/kambista";

const plugin : Plugin = (context, inject) => {
  const kambista = new Kambista(context);
  inject("kambista", kambista);
}

export default plugin;