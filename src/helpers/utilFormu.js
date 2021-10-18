import { VALID_FORMU } from "data/constantes/hooks/constFormu";

export const formuGroup = (initialformu) => {
  let auxVlues = {};
  let auxError = {};
  let auxTouch = {};
  let auxValid = {};

  for (const key in initialformu) {
    auxVlues[key] = initialformu[key][0];
    auxError[key] = '';
    auxTouch[key] = false;
  }

  for (const key in initialformu) {
    if (initialformu[key][1]) {
      initialformu[key][1].forEach(item => {
        let [a, b] = item();
        auxValid[key] = { ...auxValid[key], [a]: b };
      });
    } else {
      auxValid[key] = {};
    }
  }

  const resultFormu = {
    values: { ...auxVlues },
    validations: { ...auxValid },
    errors: { ...auxError },
    touched: { ...auxTouch },
    valid: false
  };

  return resultFormu;
}

export const validators = {
  requerid: (val = '') => [VALID_FORMU.requerid, val],
  maxLength: (val = 255) => [VALID_FORMU.maxLength, val],
}