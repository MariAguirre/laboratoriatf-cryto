<template>
  <header
    class="md:sticky md:top-0 "
    :class="[getWrapperStyle, getAutoHideStyle, getAutoContentStyle]"
    style="z-index: 10"
  >
    <div
      class="flex items-center box-border h-14 "
      :class="[getContentBorderStyle]"
    >
      <div>
        <LogoV2 v-if="showLogo" class="" />
        <BaseCard text="">
          <nav v-show="true" class="ml-14 flex justify-center items-center">
            <ul class="flex  pl-0 rounded list-none ">
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
                  w-4
                  h-4
                  p-0
                  rounded-full
                  items-center
                  justify-center
                  leading-tight
                  absolute
                  border border-solid border-gray-900
                  bg-gray-900
                "
                  ><p class="mt-4 -ml-5 text-xs ">Completa</p>
                </a>
              </li>
              <hr
                class="bg-gray-900 w-28 ml-5 border-solid-3 z-40 object-center mt-2"
              />
              <li>
                <a
                  href=""
                  class="
                  first:ml-0
                  text-xs
                  font-semibold
                  flex
                  w-4
                  h-4
                  p-0
                  rounded-full
                  items-center
                  justify-center
                  leading-tight
                  relative
                  border border-solid border-gray-200
                  bg-gray-200
                "
                  ><p class="mt-10 text-xs">Transfiere</p>
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
                  w-4
                  h-4
                  p-0
                  rounded-full
                  items-center
                  justify-center
                  leading-tight
                  relative
                  border border-solid border-gray-200
                  bg-gray-200
                "
                  ><p class="mt-10 text-xs ">Envia</p>
                </a>
              </li>
            </ul>
          </nav>
        </BaseCard>
      </div>
      <slot />
    </div>
  </header>
</template>

<script>
import LogoV2 from "../../Logo/LogoV2.vue";
import BaseCard from "@/shared/ui/components/Cards/BaseCard.vue";
export default {
  components: { LogoV2, BaseCard },
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
