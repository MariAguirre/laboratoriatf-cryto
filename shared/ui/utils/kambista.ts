//@ts-nocheck
import kambistaTypes from "../../../constants/kambista.types";
import { ENVIRONMENT_PRODUCTION } from "~/config/environments";
import { Context } from "@nuxt/types";
export default class Kambista {
  constructor($context : Context & any) {
    this.device = $context.$device;
    this.services = $context.$services;
    this.redirectval = $context.redirect;
    this.$store = $context.store;
  }
  redirect = (path : string | null = null) => {
    if (ENVIRONMENT_PRODUCTION) {
      if (process.client) {
        window.location = `${location.protocol}//${location.host}/${path}/`;
      }
    } else {
      return;
    }
  };
  
  getDevice = () => {
    let device = this.device.isDesktop
      ? kambistaTypes.DEVICES[0]
      : this.device.isTablet
      ? kambistaTypes.DEVICES[1]
      : kambistaTypes.DEVICES[2];
    device.userAgent = this.device.userAgent;
    device.isWindows = this.device.isWindows;
    device.isMacOS = this.device.isMacOS;
    device.isAndroid = this.device.isAndroid;
    device.isIos = this.device.isIos;
    return device;
  };

  isMobile = () => {
    return !this.device.isDesktop;
  }

  isDesktop = () => {
    return this.device.isDesktop;
  }
}
