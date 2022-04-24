import { MenuItem, TextField, TextFieldProps } from '@mui/material';
import { UseQueryResult } from 'react-query';

import { Event } from '../../models/Event';

type SelectEventProps = TextFieldProps & {
  query: UseQueryResult<Event[], unknown>;
};

export const SelectEvent = (props: SelectEventProps) => {
  const { query } = props;

  const { data: events } = query;

  return (
    <TextField
      select
      label="Evento"
      fullWidth
      size="small"
      sx={{ background: '#fff' }}
      {...props}
    >
      {events?.map(event => (
        <MenuItem key={event.id} value={event.id}>
          {event.name}
        </MenuItem>
      ))}
    </TextField>
  );
};
