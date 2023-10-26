import React, { useState } from 'react'

// @mui
import {
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
    ArrowDropDownOutlined
} from '@mui/icons-material'
import {
    AppBar,
    Box,
    Button,
    IconButton,
    InputBase,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    useTheme
} from '@mui/material'

// Components
import FlexBetween from 'components/FlexBetween'

// Dispatch (Redux)
import { useDispatch } from 'react-redux'
import { setMode } from 'state'

// Profile Image
import profileImage from 'assets/profile.jpg'

// styled-components
import styled from 'styled-components'

// Hide Search Input (max-width: 800px)
const SearchInput = styled.div`
    @media (max-width: 800px) {
        display: none;
    }
`;

// Hide ThemeIcon (max-width: 800px)
const ThemeIcon = styled.div`
    @media (max-width: 420px) {
        display: none;
    }
`;



const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {

    const dispatch = useDispatch()
    const theme = useTheme()


    const [anchorEl, setAnchorEl] = useState(null)
    const isOpen = Boolean(anchorEl)

    // handleClick
    const handleClick = (event) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)


    return (
        <AppBar
            sx={{
                position: "static",
                background: "none",
                boxShadow: "none"
            }}
        >

            <Toolbar sx={{ justifyContent: "space-between" }}>

                {/* Left Side */}
                <FlexBetween>

                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <MenuIcon />
                    </IconButton>

                    <SearchInput>
                        <FlexBetween
                            backgroundColor={theme.palette.background.alt}
                            borderRadius="9px"
                            gap="3rem"
                            p="0.1rem 1.5rem"
                        >
                            <InputBase placeholder='Search...' />
                            <IconButton>
                                <Search />
                            </IconButton>

                        </FlexBetween>
                    </SearchInput>

                </FlexBetween>

                {/* Right Side */}
                <FlexBetween gap="1.5rem">

                    <IconButton onClick={() => dispatch(setMode())} sx={{ mt: "7px" }}>
                        <ThemeIcon>
                            {theme.palette.mode === 'dark' ? (
                                <DarkModeOutlined sx={{ fontSize: "25px" }} />
                            ) : (
                                <LightModeOutlined sx={{ fontSize: "25px" }} />
                            )}
                        </ThemeIcon>
                    </IconButton>

                    <IconButton>
                        <SettingsOutlined sx={{ fontSize: "25px" }} />
                    </IconButton>

                    <FlexBetween>
                        <Button
                            onClick={handleClick}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                textTransform: "none",
                                gap: "1rem"
                            }}
                        >

                            <Box
                                component="img"
                                alt='profile'
                                src={profileImage}
                                width="32px"
                                height="32px"
                                borderRadius="50%"
                                sx={{ objectFit: "cover" }}
                            />

                            <Box textAlign="left">

                                <Typography
                                    fontWeight="bold"
                                    fontSize="0.85rem"
                                    sx={{ color: theme.palette.secondary[100] }}
                                >
                                    {user.name}
                                </Typography>
                                <Typography
                                    fontSize="0.75rem"
                                    sx={{ color: theme.palette.secondary[200] }}
                                >
                                    {user.occupation}
                                </Typography>

                            </Box>

                            <ArrowDropDownOutlined
                                sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
                            />

                        </Button>

                        <Menu
                            anchorEl={anchorEl}
                            open={isOpen}
                            onClose={handleClose}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                        >
                            <MenuItem onClick={handleClose}>Log Out</MenuItem>
                        </Menu>

                    </FlexBetween>

                </FlexBetween>

            </Toolbar>

        </AppBar>
    )
}

export default Navbar