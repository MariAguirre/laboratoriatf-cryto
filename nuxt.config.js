const path = require("path");
export default {
  target: "static",
  head: {
    title: "Kambista",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "noindex,nofollow" },
      { name: "theme-color", content: "#060F26" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.kambista.com/fonts/kambista-font.css"
      }
    ]
  },
  css: ["~assets/sass/app.scss"],
  loading: { color: "#060F26", continuous: true },
  loadingIndicator: {
    name: "pulse",
    color: "#060F26",
    background: "white"
  },
  plugins: [
    "~/plugins/services",
    { src: "~/plugins/vuex-persist", mode: "client" },
    { src: "~plugins/kambista" }
  ],
  components: false,
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/device"
  ],
  modules: [
    "portal-vue/nuxt",
    "nuxt-purgecss",
    "@nuxtjs/axios",
    "@nuxtjs/dotenv",
    [
      "@nuxtjs/component-cache",
      {
        max: 10000,
        maxAge: 1000 * 60 * 60
      }
    ]
  ],
  purgeCSS: {
    mode: "postcss",
    enabled: process.env.NODE_ENV === "production",
    paths: [
      "shared/**/*.vue",
      "modules/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.ts"
    ],
    extractors: [
      {
        extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
        extensions: ["html", "vue", "js"]
      }
    ]
  },
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.forEach(rule => {
          if (
            String(rule.test) === String(/\.(png|jpe?g|gif|svg|webp|vue|js)$/)
          ) {
            rule.use.push({
              loader: "image-webpack-loader",
              enforce: "pre",
              exclude: /(node_modules)/,
              options: {
                svgo: {
                  plugins: [
                    { removeViewBox: false },
                    { removeDimensions: true }
                  ]
                }
              }
            });
          }
        });
      }
    },
    postcss: {
      plugins: {
        "postcss-import": {},
        tailwindcss: path.resolve(__dirname, "./tailwind.config.js"),
        "postcss-nested": {}
      }
    },
    preset: {
      stage: 1
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          tailwindConfig: {
            test: /tailwind\.config/,
            chunks: "all",
            priority: 10,
            name: true
          }
        }
      }
    }
  }
};
