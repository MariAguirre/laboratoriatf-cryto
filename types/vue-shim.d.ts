import Vue from "vue";
import { LoadHTTPServicesType } from "~/core/infrastructure/loaders/loadHttpServices";
import Kambista from "~/shared/ui/utils/kambista";
declare module "vue/types/vue" {
  interface Vue {
    $services: LoadHTTPServicesType;
    $kambista: Kambista;
    $botmaker: {
      hide(): void;
      show(): void;
    };
  }
}
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
