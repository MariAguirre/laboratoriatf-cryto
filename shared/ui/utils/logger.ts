import { NODE_ENV } from "~/config/environments";

function stringify<T>(value: T){
  return JSON.stringify(value,null,2);
}

function runConsole<V, S>(value: V, style: S) {
  if (NODE_ENV === 'development') {
    console.log(`%c${value}`, style);
  } 
}

function normalizeValue<T>(value: T){
  const printValue  = typeof value === 'object' ? stringify(value) : value;
  return printValue;
}

const logger = {
  info<T>(value: T) {
    runConsole(`${normalizeValue(value)}`, "color:aqua");
  },
  success<T>(value: T) {
    runConsole(`${normalizeValue(value)}`, "color:lime;");
  },
  warning<T>(value: T) {
    runConsole(`${normalizeValue(value)}`, "color:orange;");
  },
  error<T>(value: T) {
    runConsole(`${normalizeValue(value)}`, "color:red");
  },
  table<T>(value: T) {
    console.log(value);
  },
  json<T>(value : T) {
    if(NODE_ENV === 'development') {
      console.log(stringify(value));
    }
  },
  stringify<T>(value : T) {
    return JSON.stringify(value,null,2);
  },
  count(value ?: string) {
    if(NODE_ENV === 'development' && value !== "") {
      console.count(value)
    }
  }
};

export default logger;
