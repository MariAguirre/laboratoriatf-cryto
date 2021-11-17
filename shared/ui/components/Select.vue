<template>
  <div ref="selectControl" class="relative outline-none">
    <label v-if="label" class="mb-2 block text-gray-600">
      {{ label }}
      <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-500">
        {{ inlineHelper }}
      </span>
    </label>
    <Input :id="id" type="select" hidden />
    <div
      class="input w-full border flex items-center rounded-lg select-none relative sm:cursor-pointer"
      :class="[stateBorder, customSize, placeholderStyle, isDisabledStyle]"
      @click="onOpenOptions"
    >
      <span v-if="placeholder && !value" class="text-gray-500 truncate">
        {{ placeholder }}
      </span>
      <span v-else class="truncate">
        <template v-if="custom">
          <slot name="currentOption" :index="searchIndex" :option="selected" />
        </template>
        <template v-else>
          {{ customRenderText(selected) }}
        </template>
      </span>
      <ChevronDown
        class="ml-auto text-black flex-none transform duration-200"
        :class="[isOpen && 'rotate-180']"
        :size="19"
        aria-hidden="true"
        aria-label="select options"
      />
      <div
        v-if="isOpen"
        class="w-full h-full left-0 top-0 bg-transparent absolute"
        @click.stop="onCloseOptions"
      />
    </div>
    <div
      v-if="isOpen"
      ref="listOptions"
      class="fade-in absolute bg-white shadow-lg w-full overflow-y-auto rounded-xl z-40 max-h-64 outline-none"
      tabindex="0"
      @blur="onCloseOptions"
    >
      <div
        v-for="(option, key) in options"
        :key="key"
        :ref="customRenderValue(option, key)"
        class="p-3 outline-none hover:bg-gray-100 truncate sm:cursor-pointer select-none"
        :class="isOptionSelectedStyle(key)"
        @click="onOptionSelected(option, key)"
      >
        <template v-if="custom">
          <slot name="option" :index="key" :option="option"></slot>
        </template>
        <template v-else>
          {{ customRenderText(option, key) }}
        </template>
      </div>
    </div>
    <div v-if="helper" class="text-xs text-gray-600 mt-2">{{ helper }}</div>
  </div>
</template>
<script>
import Input from "./Input.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";

const KEY_CODE = {
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  ESC: "Escape",
  ENTER: "Enter"
};

const TIMEOUT_DURATION = 10;

export default {
  name: "KSelect",
  components: { Input, ChevronDown },
  props: {
    id: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: ""
    },
    helper: {
      type: String,
      default: ""
    },
    inlineHelper: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    valid: {
      type: Boolean,
      default: true
    },
    options: {
      type: Array,
      default: function() {
        return [
          
         ];
      }
    },
    value: {
      type: [String, Number, Object],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "lg"
    },
    custom: {
      type: Boolean,
      default: false
    },
    renderText: {
      type: Function,
      default: null
    },
    renderValue: {
      type: Function,
      default: null
    },
   baseData:{
    type: Object,
    default(){
      
    }
    }
    
  },
  data() {
    return {
      selected: {},
      isOpen: false,
      searchIndex: 0,
      currentKeyboards: [],
      documentPosition: {
        y: 0
      },
      
    };
  },
  computed: {
    stateBorder() {
      return this.valid ? "" : "border-kambista-6";
    },
    customSize() {
      return {
        sm: "py-1 px-2",
        md: "py-2 px-3",
        lg: "py-3 px-4"
      }[this.size];
    },
    placeholderStyle() {
      return (
        this.placeholder &&
        (this.value == null || this.value === "") &&
        "text-gray-400 focus:text-kambista-blue"
      );
    },
    isDisabledStyle() {
      return this.disabled && "cursor-not-allowed bg-gray-100";
    },
    isOptionSelectedStyle() {
      return key => this.searchIndex === key && "bg-gray-100";
    }
  },
  watch: {
    selected(selectedOption) {
      if (Object.keys(selectedOption).length > 0) {
        const value = this.customRenderValue(selectedOption || {});
        if (value) {
          const index = this.options.indexOf(selectedOption);
          if (index !== -1) {
            this.searchIndex = index;
            this.$emit("input", value);
          }
        }
      }
    },
    searchIndex(index) {
      this.selected = this._searchOptionForIndex(index);
    },
    value: {
      immediate: true,
      handler(val) {
        if (val !== undefined || val !== null) {
          const option = this._searchOptionsForValue(val);
          if (option === undefined) {
            this.selected = {};
          } else {
            this.selected = option;
          }
        } else {
          this.selected = {};
        }
      }
    }
  },
  mounted() {
    this.$watch(
      () => this.isOpen,
      isOpen => {
        if (isOpen) {
          this.$refs.listOptions.focus();
        }
        if (this.selected) {
          this._computeScrollPositionFromOption(
            this.customRenderValue(this.selected)
          );
        }
      }
    );
    window.addEventListener("keydown", this.onWindowKeyUp);
    window.addEventListener("scroll", this.onWindowScroll);
  },
  destroyed() {
    window.removeEventListener("keydown", this.onWindowKeyUp);
    window.removeEventListener("scroll", this.onWindowScroll);
  },
  beforeUpdate() {
    this.optionRefs = [];
  },
  methods: {
    _scrollTop(topPosition) {
      this.$refs.listOptions.scrollTop = topPosition;
    },
    _computeScrollPositionFromOption(key) {
      if (this.$refs[key] && this.$refs[key][0]) {
        const currentRefSearched = this.$refs[key][0];
        this._scrollTop(
          currentRefSearched.offsetTop - currentRefSearched.offsetHeight
        );
      }
    },
    _searchOptionForIndex(index) {
      return this.options.find((_, optionIndex) => optionIndex === index);
    },
    _searchOptionsForValue(val) {
      return this.options.find(value => this.customRenderValue(value) === val);
    },
    _preventScrollingDocumentInDesktop() {
      if (this.$kambista.isDesktop()) {
        this.documentPosition.y =
          window.pageYOffset || document.documentElement.scrollTop;
      }
    },
    onWindowScroll() {
      if (this.isOpen && this.$kambista.isDesktop()) {
        document.documentElement.scrollTop = this.documentPosition.y;
      }
    },
    onWindowKeyUp(ev) {
      if (this.isOpen) {
        const { code, key } = ev;
        this._preventScrollingDocumentInDesktop();
        if (code === KEY_CODE.ESC || code === KEY_CODE.ENTER) {
          this.onCloseOptions();
        }

        /**
         * Buscar con la tecla de dirección hacia abajo
         * y siempre que el indice esté en 0 el scroll estará al inicio
         */
        if (code === KEY_CODE.DOWN) {
          this.searchIndex = (this.searchIndex + 1) % this.options.length;
          if (this.searchIndex === 0) {
            setTimeout(() => {
              this._scrollTop(0);
            }, TIMEOUT_DURATION);
          }
          return;
        }
        /**
         * Buscar con la tecla de dirección hacia arriba
         * y siempre que sea el indice igual a la longitud de opciones el scroll estará al último
         */
        if (code === KEY_CODE.UP) {
          this.searchIndex =
            this.searchIndex > 0
              ? this.searchIndex - 1
              : this.options.length - 1;
          if (this.searchIndex === this.options.length - 1) {
            setTimeout(() => {
              this._scrollTop(this.$refs.listOptions.scrollHeight);
            }, TIMEOUT_DURATION);
          }
          return;
        }

        /**
         * Buscar por letras que se escriban en un rango de tiempo
         * Si lo que se escribe se encuentra se seleccionará automaticamente
         */
        this.currentKeyboards.push(key);
        setTimeout(() => {
          this.currentKeyboards = [];
        }, 2000);
        const joinKeyboards = this.currentKeyboards.join("");
        const normalizeInLowerCase = joinKeyboards.toLowerCase();
        const itemSearched = this.options.find(e => {
          const value = String(this.customRenderText(e)).toLowerCase();
          return value.includes(normalizeInLowerCase);
        });
        if (itemSearched) {
          this.searchIndex = this.options.indexOf(itemSearched);
          if (itemSearched) {
            this._computeScrollPositionFromOption(
              this.customRenderValue(itemSearched)
            );
          }
        }
      }
    },
    onOptionSelected(option) {
      if (!this.disabled) {
        const index = this.options.indexOf(option);
        if (index !== -1) {
          this.searchIndex = index;
          this.selected = this._searchOptionForIndex(this.searchIndex);
          this.isOpen = false;
        }
      }
    },
    onOpenOptions() {
      if (!this.disabled) {
        this.isOpen = true;
      }
    },
    onCloseOptions() {
      this.isOpen = false;
    },
    customRenderValue(item, index = "") {
      return typeof item.value !== "undefined"
        ? item.value
        : (this.renderValue && this.renderValue(item)) || item || index;
    },
    customRenderText(item, index = "") {
      const name = typeof item === "object" ? item.name : item;
      return (this.renderText && this.renderText(item)) || name || index;
    }
  }
};
</script>
