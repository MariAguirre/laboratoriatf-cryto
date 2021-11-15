//@ts-ignore
import localStorage from "localStorage";

export default {
  get(key: string) {
    const data = localStorage.getItem(key);
    if (data) {
      const isObject = ["[", "{"].includes(data[0] || "");
      return isObject ? JSON.parse(data) : data;
    }
    return "";
  },
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  delete(key: string | string[]) {
    if (typeof key === "object") {
      key.forEach(values => {
        localStorage.removeItem(values);
      });
    } else {
      localStorage.removeItem(key);
    }
  },
  clear() {
    localStorage.clear();
  }
};
