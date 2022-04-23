import { TextField, TextFieldProps } from '@mui/material';

export const SelectEvent = (props: TextFieldProps) => {
  const { children } = props;

  return (
    <TextField
      select
      label="Evento"
      fullWidth
      size="small"
      sx={{ background: '#fff' }}
      {...props}
    >
      {children}
    </TextField>
  );
};
