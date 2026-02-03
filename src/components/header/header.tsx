// 'use client';

// import { styled, alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Tooltip from '@mui/material/Tooltip';
// import Avatar from '@mui/material/Avatar';
// import Menu from '@mui/material/Menu';
// import Container from '@mui/material/Container';
// import MenuItem from '@mui/material/MenuItem';
// import * as React from 'react';
// import { Toolbar } from '@mui/material';
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: '100px',
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',

//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   width: '100%',
//   '& .MuiInputBase-input': {
//     borderRadius: '100px',
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),

//     // [theme.breakpoints.up('sm')]: {
//     //   width: '12ch',
//     //   '&:focus': {
//     //     width: '20ch',
//     //   },
//     // },
//   },
// }));

// type HeaderProps = {
//   name: string;
//   tasksAmount: number;
// };

// const Header = ({ name, tasksAmount }: HeaderProps) => {
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <Box className="flex items-center justify-evenly">
//       <Typography variant='h5'>
//         Hi {name}, welcome! You have {tasksAmount} open tasks.{' '}
//       </Typography>
//       <Box>
//         <Container >
//           <Toolbar sx={{ display: 'flex', gap: '10px' }}>
//             <Search >
//               <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
//             </Search>

//             <Box>
//               <Tooltip title="Open settings">
//                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                   <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//                 </IconButton>
//               </Tooltip>
//               <Menu
//                 sx={{ mt: '45px' }}
//                 id="menu-appbar"
//                 anchorEl={anchorElUser}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//               >
//                 {settings.map((setting) => (
//                   <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                     <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//           </Toolbar>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default Header;

'use client';

import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { Toolbar } from '@mui/material';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '100px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  flexGrow: 1,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    borderRadius: '100px',
    padding: theme.spacing(1, 2),
    transition: theme.transitions.create('width'),
  },
}));

type HeaderProps = {
  name: string;
  tasksAmount: number;
};

const Header = ({ name, tasksAmount }: HeaderProps) => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box className="flex items-center justify-around w-full px-4 py-2">
      <Typography variant="h5">
        Hi {name}, welcome! You have {tasksAmount} open tasks.
      </Typography>

      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: 0,
          width: 'auto',
          flex: 1,
          maxWidth: '500px',
        }}
      >
        <Search>
          <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </Search>

        <Box sx={{ flexShrink: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar sx={{ backgroundColor: '#1a317e', fontSize: '18px' }} alt="AR">
                AR
              </Avatar>
            </IconButton>
          </Tooltip>

          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Header;
