// import { Box, Typography } from '@mui/material';
// import { items } from './navBarItems';

// const NavBar = () => {
//   return (
//     <Box display="flex" justifyContent="center" gap="6px">
//       {items.map((item) => {
//         const Icon = item.icon;

//         return (
//           <Box key={item.id} display="flex" alignItems="center" gap={1.5}>
//             <Icon width={20} height={20} style={{ color: '#3B82F6' }} />
//             <Typography>{item.title}</Typography>
//           </Box>
//         );
//       })}
//     </Box>
//   );
// };

// export default NavBar;

'use client';
import { useRef, useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { items } from './navBarItems';

const NavBar = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<number>(1);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === 'left' ? -200 : 200,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        background: '#0B0F1A',
        padding: '8px',
        borderRadius: '999px',
        maxWidth: '1140px',
        marginLeft: '80px',
      }}
    >
      {/* Pills */}
      <Box
        ref={scrollRef}
        display="flex"
        gap="6px"
        sx={{
          overflowX: 'auto',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeId === item.id;

          return (
            <Box
              key={item.id}
              onClick={() => setActiveId(item.id)}
              display="flex"
              alignItems="center"
              gap={1}
              sx={{
                cursor: 'pointer',
                padding: '10px 16px',
                borderRadius: '999px',
                border: '1px solid',
                borderColor: isActive ? '#3B82F6' : '#2A2F45',
                background: isActive ? '#3B82F6' : 'transparent',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: '#3B82F6',
                },
              }}
            >
              <Icon width={18} height={18} style={{ color: isActive ? '#FFFFFF' : '#3B82F6' }} />
              <Typography fontSize={14} color="#E5E7EB">
                {item.title}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Box gap="5px" display="flex">
        {/* Pagination arrows */}
        <IconButton
          onClick={() => scroll('left')}
          sx={{
            border: '1px solid #2A2F45',
            color: '#2A2F45',
          }}
        >
          <ArrowLeft />
        </IconButton>

        <IconButton
          onClick={() => scroll('right')}
          sx={{
            border: '1px solid #2A2F45',
            color: '#2A2F45',
          }}
        >
          <ArrowRight />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NavBar;
