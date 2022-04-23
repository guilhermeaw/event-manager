import { MouseEvent, useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Settings as SettingsIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import { UserRole } from '../../../../models/User';

type ButtonProps = {
  userRole: UserRole;
};

export const UserOptionsButton = ({ userRole }: ButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const isAdminUser = userRole === UserRole.ADMIN;

  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (to: string) => {
    navigate(to);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="options-button"
        aria-controls={open ? 'options-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleOpenMenu}
      >
        <SettingsIcon />
      </IconButton>

      <Menu
        id="options-menu"
        MenuListProps={{
          'aria-labelledby': 'options-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
      >
        {isAdminUser && (
          <MenuItem onClick={() => handleNavigate('/dashboard')}>
            Acessar dashboard
          </MenuItem>
        )}

        <MenuItem onClick={() => handleNavigate('/validate-certificate')}>
          Validar certificado
        </MenuItem>
      </Menu>
    </div>
  );
};
