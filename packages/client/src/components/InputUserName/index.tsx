import { TextField, TextFieldProps } from '@mui/material';

export const InputUserName = (props: TextFieldProps) => (
  <TextField
    label="Nome"
    sx={{ background: '#fff' }}
    fullWidth
    size="small"
    {...props}
  />
);
