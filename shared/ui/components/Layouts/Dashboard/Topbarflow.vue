<template>
  <header
    class="md:sticky md:top-0"
    :class="[getWrapperStyle, getAutoHideStyle, getAutoContentStyle]"
    style="z-index: 10"
  >
    <div
      class="flex items-center box-border h-14"
      :class="[getContentBorderStyle]"
    >
    <div class="sm:flex sm:justify-between" >
    <LogoV2 
    v-if="showLogo" 
    />
    
      
        <nav 
        v-show="showNav" 
        class="mt-5 ml-40 ">
          <ul class="flex pl-0 rounded list-none ">
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
                  md:w-6
                  md:h-6
                  p-0
                  rounded-full
                  items-center
                  justify-center
                  leading-tight
                  absolute
                  border border-solid border-gray-900
                  bg-gray-900
                "
              ><p class="mt-6 -ml-4">Completa</p>
              </a>
            </li>
            <hr class="bg-gray-900 md:w-72 sm:w-20 ml-6 border-solid-2 z-40 object-center mt-2.5" />
            <li>
              <a
                href=""
                class="
                  first:ml-0
                  text-xs
                  font-semibold
                  flex
                  md:w-6
                  md:h-6
                  p-0
                  rounded-full
                  items-center
                  justify-center
                  leading-tight
                  relative
                  border border-solid border-gray-200
                  bg-gray-200
                "
              ><p class="mt-10">Transfiere</p>
              </a>
            </li>
            <hr class="bg-gray-900 md:w-72 sm:w-20 border-solid-2 object-center mt-2.5" />
            <li>
              <a
                href=""
                class="
                  first:ml-0
                  text-xs
                  font-semibold
                  flex
                  md:w-6
                  md:h-6
                  p-0
                  rounded-full
                  items-center
                  justify-center
                  leading-tight
                  relative
                  border border-solid border-gray-200
                  bg-gray-200
                "
              ><p class="mt-10 ">Envia</p>
              </a>
            </li>
          </ul>
        </nav>
      
    </div>
      <slot />
    </div>
  </header>
</template>

<script>
import LogoV2 from "../../Logo/LogoV2.vue";
export default {
  components: { LogoV2 },
  props: {
    variant: {
      type: String,
      default: "default",
    },
    showLogo: {
      type: Boolean,
      default: false,
    },
    showNav: {
      type: Boolean,
      default: false,
    },
    autoContent: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getWrapperStyle() {
      return {
        default: "border-gray-400 bg-kambista-6",
        light: "bg-white border-b",
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
    },
  },
};
</script>
