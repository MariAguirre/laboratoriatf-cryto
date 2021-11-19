<template>
  <header
    :class="[getWrapperStyle, getAutoHideStyle, getAutoContentStyle]"
    style="z-index: 10"
  >
    <div
      class="flex items-center box-border h-14"
      :class="[getContentBorderStyle]"
    >
      <div class="">
        <div>
          <LogoV3 v-if="showLogo" class="" />
        </div>
        <div class="flex items-center justify-center ">
          <nav class="flex items-center -mt-14 justify-center w-full">
            <ul class="flex pl-0 ml-97 rounded list-none ">
              <li>
                <a
                  href=""
                  class="
                  linea
                  z-10
                  inline-block
                  first:ml-0
                  text-xs
                  font-semibold
                  md:w-5
                  md:h-5
                  
                  p-0
                  rounded-full
                  items-center
                  justify-center
                  leading-tight
                  
                  border border-solid border-kambista-blue
                  bg-kambista-blue
                "
                  ><p class="mt-5 -ml-4">Completa</p>
                </a>
              </li>
              <hr
                class="bg-kambista-blue  md:w-72 sm:w-20 h-1 border-solid-2 z-40 object-center mt-2.5"
              />
              <li>
                <a
                  href=""
                  class="
                  first:ml-0
                  text-xs
                  font-semibold
                  flex
                  md:w-5
                  md:h-5
                  p-0
                  rounded-full
                  items-center
                  justify-center
                  leading-tight
                  
                  border border-solid border-kambista-blue
                  bg-kambista-blue
                "
                  ><p class="mt-10">Transfiere</p>
                </a>
              </li>
              <hr
                class="bg-kambista-blue md:w-72 sm:w-20 h-1 border-solid-2 object-center mt-2.5"
              />
              <li>
                <a
                  href=""
                  class="
                  first:ml-0
                  text-xs
                  font-semibold
                  flex
                  md:w-5
                  md:h-5
                  p-0
                  rounded-full
                  items-center
                  justify-center
                  leading-tight
                  
                  border border-solid border-kambista-blue
                  bg-kambista-blue
                "
                  ><p class="mt-10 ">Envia</p>
                </a>
              </li>
            </ul>
            <Nuxt-link to="/">
              <img
                class="ml-96 -mr-20 mb-3 w-12 h-12"
                src="@/assets/images/navigation/x-circle.svg"
                alt="close"
              />
            </Nuxt-link>
          </nav>
        </div>
      </div>
    </div>
    <slot />
  </header>
</template>

<script>
import LogoV3 from "../../Logo/LogoV3.vue";
export default {
  components: { LogoV3 },
  props: {
    variant: {
      type: String,
      default: "default"
    },
    showLogo: {
      type: Boolean,
      default: false
    },
    showNav: {
      type: Boolean,
      default: false
    },
    autoContent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getWrapperStyle() {
      return {
        default: "border-gray-400 bg-kambista-6",
        light: "bg-white border-b"
      }[this.variant || "default"];
    },
    getAutoHideStyle() {
      return this.autoHide ? "hidden" : "";
    },
    getContentBorderStyle() {
      return this.variant === "default" ? "border-b" : "";
    },
    getAutoContentStyle() {
      return this.autoContent ? "px-4 lg:px-7" : "";
    }
  }
};
</script>
