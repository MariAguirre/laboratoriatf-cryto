type CallbackFunction = (valueA:string,valueB: string) => boolean

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape

export const compareStrings = (val1: string, val2: string, keyword : string) => {
  let isValid = false;
  if (val1 === val2) {
    const message = "";
    isValid = true;
    return { message, isValid };
  } else {
    const message = `Los valores ingresados de ${keyword} no son iguales`;
    return { message, isValid };
  }
};
export const is = {
  // value corresponde al valor ingresado
  match: (testFn: CallbackFunction, message : string = "") => (value : string, fieldValues : any) =>
    !testFn(value, fieldValues) && message,
  required: (keyword : string) => (value: string) =>
    isNullOrEmptyString(value) && `El campo ${keyword} es requerido`,
  minLength: (min: number) => (value: string) =>
    !!value &&
    value.length < min &&
    `El campo debe ser de al menos ${min} dígitos`,
  number: () => (value: string) => !!value && !/^\d+$/.test(value) && "Debe ser números",
  maxLength: (max: number) => (value: string) =>
    !!value &&
    value.length > max &&
    `El campo debe ser máximo de ${max} dígitos`,
  exacLength: (num: number) => (value: string) =>
    !!value && value.length !== num && `El campo debe ser de ${num} dígitos`,
  notEmptyArray: () => (value: string) =>
    Array.isArray(value) &&
    value.length === 0 &&
    "Por favor añade al menos un item",

  email: () => (value: string) =>
    !!value &&
    !EMAIL_REGEX.test(value) &&
    "El campo debe ser un formato de email correcto",

  url: () => (value: string) =>
    !!value &&
    // eslint-disable-next-line no-useless-escape
    !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
      value
    ) &&
    "Debe ser una url válida"
};
const isNullOrEmptyString = (value: string) =>
  value === undefined || value === null || value === "" || Array.isArray(value);

export const generateErrors = (fieldValues : any, fieldValidators : any) => {
  const errors : any = {};
  let isValid = true;

  Object.entries(fieldValidators).forEach(([fieldName, validators]) => {
    [validators].flat().forEach((validator: any)  => {
      const errorMessage = validator(fieldValues[fieldName], fieldValues);
      if (errorMessage && !errors[fieldName]) {
        errors[fieldName] = errorMessage;
        isValid = false;
      }
    });
  });
  return { isValid, errors };
};
