import { TextField, TextFieldProps } from '@mui/material';

export const SelectUser = (props: TextFieldProps) => {
  const { children } = props;

  return (
    <TextField
      select
      label="Usuário"
      fullWidth
      size="small"
      sx={{ background: '#fff' }}
      {...props}
    >
      {children}
    </TextField>
  );
};
