<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    :viewBox="viewBox"
    :style="`enable-background:new ${viewBox};`"
    xml:space="preserve"
  >
    <g>
      <clipPath :id="`SVGID_2_${id}`">
        <path
          d="M34.97,70.78l18.06,18.06c3.17,3.17,7.46,4.94,11.94,4.94h16.88c-11.64-11.64-23.3-23.3-34.94-34.94
          L34.97,70.78z M41.83,0c0,7.25,5.88,13.13,13.13,13.13h1.82l-39.9,39.9V16.88C16.88,7.56,9.32,0,0,0v93.79l68.72-68.72v1.86
          c0,3.48,1.38,6.82,3.84,9.29c2.46,2.46,5.8,3.85,9.28,3.85V0H41.83z"
        />
      </clipPath>
      <linearGradient
        :id="`SVGID_3_${id}`"
        gradientUnits="userSpaceOnUse"
        x1="-134.4333"
        y1="330.0721"
        x2="-133.2483"
        y2="330.0721"
        gradientTransform="matrix(-69.0696 79.1451 -69.0696 -79.1451 13594.5322 36763.3086)"
      >
        <stop offset="0" style="stop-color:#00E3C2" />
        <stop offset="0.2328" style="stop-color:#04DFC7" />
        <stop offset="0.5254" style="stop-color:#0FD3D7" />
        <stop offset="0.8485" style="stop-color:#22BFF0" />
        <stop offset="1" style="stop-color:#2DB4FF" />
      </linearGradient>
      <polygon
        :clip-path="`url(#SVGID_2_${id})`"
        :fill="`url(#SVGID_3_${id})`"
        points="40.92,-46.89 -40.92,46.89 40.92,140.68 122.77,46.89"
      />
    </g>
    <g v-if="!compact">
      <path
        :class="fontColor"
        d="M141.43,29.3h-7.56l-14.53,21.57V36.79c0-4.13-3.36-7.43-7.43-7.43h-0.07v38.49h7.49V60.3l5.23-7.04
        l9.11,14.53h8.78l-13.24-20.41L141.43,29.3"
      />
      <path
        :class="fontColor"
        d="M161.45,37.18h-7.43c-9.82,0-10.27,7.88-10.27,15.44c0,8.78,1.68,15.5,10.33,15.5l7.49-4.07l2.13,3.75h4.72
        V36.73L161.45,37.18z M161.45,57.98l-5.36,2.78c-4.2,0-5.3-2.46-5.3-8.14s1.1-9.11,5.3-9.11h5.36V57.98z"
      />
      <path
        :class="fontColor"
        d="M207.5,36.6l-10.08,4.13c-1.16-2.26-3.23-4.13-6.39-4.13l-8.14,4l-1.62-3.68h-5.23v30.87h7.04V46.16
        l5.81-2.65c2.2,0,3.55,1.29,3.55,5.17v19.18h7.04v-21.7l6.33-2.65c2.2,0,3.04,1.29,3.04,5.17v19.18h7.04V47.12
        C215.9,40.99,213.38,36.6,207.5,36.6"
      />
      <path
        :class="fontColor"
        d="M237.73,36.92l-8.4,3.87V27.17h-7.04v32.62c0,4,2.45,8.07,8.2,8.07l6.14,0.06c9.24,0,10.79-8.66,10.79-15.5
        C247.48,42.67,246.26,36.92,237.73,36.92 M234.57,61.79h-3.49c-1.23-0.19-1.81-1.03-1.81-2.52V47.19l6.33-3.42
        c4.2,0,4.78,2.71,4.78,8.59C240.38,58.23,238.83,61.79,234.57,61.79"
      />
      <rect
        x="253.75"
        y="38.08"
        :class="fontColor"
        width="7.04"
        height="29.71"
      />
      <g>
        <clipPath :id="`SVGID_5_${id}`">
          <path
            d="M253.17,29.23c0,3.36,0.77,4.13,4.13,4.13c3.36,0,4.07-0.78,4.07-4.13c0-3.36-0.71-4.07-4.07-4.07
            C253.94,25.16,253.17,25.88,253.17,29.23"
          />
        </clipPath>
        <linearGradient
          :id="`SVGID_6_${id}`"
          gradientUnits="userSpaceOnUse"
          x1="-136.4423"
          y1="327.3309"
          x2="-135.2572"
          y2="327.3309"
          gradientTransform="matrix(-6.9222 6.922 -6.9222 -6.922 1582.738 3235.416)"
        >
          <stop offset="0" style="stop-color:#00E3C2" />
          <stop offset="0.2328" style="stop-color:#04DFC7" />
          <stop offset="0.5254" style="stop-color:#0FD3D7" />
          <stop offset="0.8485" style="stop-color:#22BFF0" />
          <stop offset="1" style="stop-color:#2DB4FF" />
        </linearGradient>
        <polygon
          :clip-path="`url(#SVGID_5_${id})`"
          :fill="`url(#SVGID_6_${id})`"
          points="257.27,21.06 249.07,29.27 257.27,37.47 265.47,29.27"
        />
      </g>
      <path
        :class="fontColor"
        d="M282.88,49.97l-6.52-1.16c-2.2-0.39-2.52-2.32-2.52-3.49c0-1.29,1.36-2.84,4.46-2.84
        c2.78,0,4.78,0.78,4.91,4.39h6.14v-0.71c0-7.94-5.88-9.56-11.11-9.56c-6.2,0-11.17,3.17-11.17,9.11c0,5.17,2.52,8.14,7.17,8.91
        l5.49,0.9c3.1,0.52,3.29,2.52,3.29,4.13c0,2.46-2.2,3.17-4.33,3.17c-4.13,0-5.81-0.9-5.81-4.33h-6.39v0.65
        c0,7.94,6.13,9.17,12.14,9.17c5.75,0,10.79-2.45,11.17-8.14v-0.9C289.79,54.88,288.11,50.94,282.88,49.97"
      />
      <path
        :class="fontColor"
        d="M303.35,59.33V43.57h4.97v-5.36h-4.97v-6.07h-7.04v6.07h-2.97v5.36h2.97v16.21c0,4.01,2.45,8.07,8.14,8.07
        h4.39v-6.01h-3.1C304.13,61.85,303.35,60.95,303.35,59.33"
      />
      <path
        :class="fontColor"
        d="M328.93,37.18h-7.43c-9.82,0-10.27,7.88-10.27,15.44c0,8.78,1.68,15.5,10.33,15.5l7.49-4.07l2.13,3.75h4.72
        V36.73L328.93,37.18z M328.93,57.98l-5.36,2.78c-4.2,0-5.3-2.46-5.3-8.14s1.1-9.11,5.3-9.11h5.36V57.98z"
      />
    </g>
  </svg>
</template>
<script>
export default {
  name: "Logo",
  props: {
    variant: {
      type: String,
      default: "primary"
    },
    compact: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ""
    }
  },
  computed: {
    fontColor() {
      return {
        primary: "fill-current text-white",
        secondary: "fill-current text-kambista-blue"
      }[this.variant];
    },
    viewBox() {
      return this.compact ? "0 0 81.86 93.79" : "0 0 335.9 93.79";
    }
  }
};
</script>
