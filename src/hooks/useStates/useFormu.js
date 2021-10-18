import { useState } from 'react'
import { VALID_FORMU } from 'data/constantes/hooks/constFormu';

export const useFormu = (initialState = {}) => {
  //CREANDO ESTADO DEL FORMULARIO
  const [formu, setFormu] = useState(initialState);

  //EVENTO CHANGE PARA CAMBIAR EL ESTADO DE CADA INPUT DEL FORMULARIO
  const handleChange = (event) => {
    const { name, value } = event.target;

    const { nameError, formuError } = validationsName(name, value);
    const nametouch = validationTouch(name);

    setFormu({
      ...formu,
      values: { ...formu.values, [name]: value },
      errors: { ...formu.errors, ...nameError },
      touched: { ...formu.touched, ...nametouch },
      valid: formuError
    });
  }

  //MARCAR TODOS LOS INPUTS COMO TACHADOS Y VERIFICAR SI HAY ERRORES EN TODOS LOS INPUTS
  const markAllTouched = () => {
    const auxError = {};
    const auxTouch = {};
    for (const key in formu.values) {
      const { nameError } = validationsName(key, formu.values[key]);
      const nametouch = validationTouch(key);
      auxError[key] = nameError[key];
      auxTouch[key] = nametouch[key];
    }

    setFormu({
      ...formu,
      errors: { ...formu.errors, ...auxError },
      touched: { ...formu.touched, ...auxTouch },
    });
  }

  //VALIDAR SI TIENE VALIDACIONES UN INPUT
  const validationsName = (name, value) => {
    const nameError = {};
    let isError = false;
    if (formu.validations[name].hasOwnProperty(VALID_FORMU.requerid) && value.toString().trim() === '') {
      nameError[name] = `El campo ${formu.validations[name][VALID_FORMU.requerid]} es obligatorio`;
      isError = true;
    } else if (formu.validations[name].hasOwnProperty(VALID_FORMU.maxLength) && value.toString().trim().length > formu.validations[name][VALID_FORMU.maxLength]) {
      nameError[name] = `El campo debe tener máximo ${formu.validations[name][VALID_FORMU.maxLength]} caracteres`;
      isError = true;
    } else {
      nameError[name] = "";
    }

    let formuError = validationFormu(isError, name);
    return { nameError, formuError };
  }

  //VALIDAR INPUT TACHADO
  const validationTouch = (name) => {
    return { [name]: true };
  }

  //VALIDAR FORMULARIO GENERAL
  const validationFormu = (isError, name) => {
    let respValid = true;

    if (isError) {
      respValid = false;
    } else {
      for (const key in formu.errors) {
        if (formu.errors[key] !== "" && formu.touched[key] === true && key !== name) {
          respValid = false;
        }
      }
    }

    return respValid;
  }

  return { formu, handleChange, markAllTouched, setFormu }
}
