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
    <LogoV3 v-if="showLogo" class=""/>
     </div>  
     <div class="flex items-center justify-center ">
       <nav 
        class="flex items-center -mt-14 justify-center w-full">
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
                  
                  border border-solid border-bg-kambista-blue
                  bg-kambista-blue
                "
              ><p class="mt-5 -ml-4">Completa</p>
              </a>
            </li>
            <hr class="bg-bg-kambista-blue md:w-72 sm:w-20  border-solid-2 z-40 object-center mt-2.5" />
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
                  
                  border border-solid border-bg-kambista-blue
                  bg-kambista-blue
                "
              ><p class="mt-10">Transfiere</p>
              </a>
            </li>
            <hr class="bg-kambista-blue md:w-72 sm:w-20 border-solid-2 object-center mt-2.5" />
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
                  
                  border border-solid border-bg-kambista-blue
                  bg-kambista-blue
                "
              ><p class="mt-10 ">Envia</p>
              </a>
            </li>
          </ul>
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