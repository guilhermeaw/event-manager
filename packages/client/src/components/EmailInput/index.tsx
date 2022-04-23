import { TextField, TextFieldProps } from '@mui/material';

export const EmailInput = (props: TextFieldProps) => {
  return (
    <TextField
      label="E-mail"
      type="email"
      sx={{ background: '#fff' }}
      size="small"
      fullWidth
      margin="dense"
      {...props}
    />
  );
};
