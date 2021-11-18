<template>
  <header
    class="md:sticky md:top-0 "
    :class="[getWrapperStyle, getAutoHideStyle, getAutoContentStyle]"
    style="z-index: 10"
  >
    <div
      class="flex items-center"
      :class="[getContentBorderStyle]"
    >
      <div>
        <LogoV2 v-if="showLogo" class="" />
        <div >
         
           <nav  class="ml-14 w-full -mt-2 flex justify-center items-center">
            <ul class="flex w-full pl-0 list-none ">
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
                  w-3
                  h-3
                  p-0
                  rounded-full
                  items-center
                  justify-center
                  leading-tight
                  border border-solid border-gray-900
                  bg-gray-900
                "
                  ><p class="mt-5 -ml-5 text-xxxs">Completa</p>
                </a>
              </li>
              <hr
                class="bg-gray-900 w-28  border-solid-3 z-40 object-center mt-2"
              />
              <li>
                <a
                  href=""
                  class="
                  first:ml-0
                  text-xs
                  font-semibold
                  flex
                  w-3
                  h-3
                  p-0
                  rounded-full
                  items-center
                  justify-center
                  leading-tight
                  
                  border border-solid border-gray-200
                  bg-gray-200
                "
                  ><p class="mt-10 text-xxxs">Transfiere</p>
                </a>
              </li>
              <hr class="bg-gray-900 w-28 border-solid-3 object-center mt-2" />
              <li>
                <a
                  href=""
                  class="
                  first:ml-0
                  text-xs
                  font-semibold
                  flex
                  w-3
                  h-3
                  p-0
                  rounded-full
                  items-center
                  justify-center
                  leading-tight
                 
                  border border-solid border-gray-200
                  bg-gray-200
                "
                  ><p class="mt-10 text-xxxs">Envia</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <slot />
    </div>
  </header>
</template>

<script>
import LogoV2 from "../../Logo/LogoV2.vue";

export default {
  components: { LogoV2},
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
      return this.autoHide ;
    },
    getContentBorderStyle() {
      return this.variant === "default" ;
    },
    getAutoContentStyle() {
      return this.autoContent ? "px-4 lg:px-7" : "";
    }
  }
};
</script>
