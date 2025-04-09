import React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddIcon from '@mui/icons-material/Add';
import ShirtIcon from '@mui/icons-material/Checkroom';
import PantsIcon from '@mui/icons-material/IceSkating';

const actions = [
  { icon: <ShirtIcon />, name: 'Shirts' },
  { icon: <PantsIcon />, name: 'Pants' },
];

const ShareButtons = () => {
  return (
    <SpeedDial
      ariaLabel="Share Buttons"
      sx={{ position: 'absolute', top: 16, right: 100 }}
      icon={<AddIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
      ))}
    </SpeedDial>
  );
};

export default ShareButtons;