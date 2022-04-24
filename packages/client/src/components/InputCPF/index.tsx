import { TextField, TextFieldProps } from '@mui/material';

export const InputCPF = (props: TextFieldProps) => {
  return (
    <TextField
      label="CPF"
      sx={{ background: '#fff' }}
      size="small"
      fullWidth
      {...props}
    />
  );
};
