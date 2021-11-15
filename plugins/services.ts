import { httpConfiguration } from "~/config/http";
import { Plugin } from "@nuxt/types";
import { loadHTTPServices } from "~/core/infrastructure/loaders/loadHttpServices";

const plugin : Plugin = (ctx, inject) => {
  const api = httpConfiguration(ctx.$axios);
  inject("services", loadHTTPServices(api));
}

export default plugin;