import { MenuItem, TextField, TextFieldProps } from '@mui/material';
import { UseQueryResult } from 'react-query';

import { User } from '../../models/User';

type SelectUserProps = TextFieldProps & {
  query: UseQueryResult<User[], unknown>;
};

export const SelectUser = (props: SelectUserProps) => {
  const {
    query: { data: users },
  } = props;

  return (
    <TextField
      select
      label="Usuário"
      fullWidth
      size="small"
      sx={{ background: '#fff' }}
      {...props}
    >
      {users?.map(user => (
        <MenuItem key={user.id} value={user.id}>
          {user.name || user.email}
        </MenuItem>
      ))}
    </TextField>
  );
};
