import { useMutation } from 'react-query';

import api from '../api';

export const useValidateCertificate = () => {
  return useMutation(
    (hash: string) =>
      api
        .post('/certificates/certificates/validate', {
          hash,
        })
        .then(response => response.data),
    {
      onError: error => window.alert(error.message),
      onSuccess: () => window.alert('O certificado informado é válido.'),
    },
  );
};
