import React from 'react'

// @mui
import { Box, useMediaQuery } from '@mui/material'

// Outlet (Router Dom)
import { Outlet } from 'react-router-dom'

// useSelector (Redux)
import { useSelector } from 'react-redux'

// Components
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import { useState } from 'react'

// Redux api
import { useGetUserQuery } from 'state/api'

const Layout = () => {

    const isNonMobile = useMediaQuery("(min-width: 600px)")

    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    // Grab Redux toolkit
    const userId = useSelector((state) => state.global.userId)

    // api call
    const { data } = useGetUserQuery(userId)

    return (
        <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
            <Sidebar
                user={data || {}}
                isNonMobile={isNonMobile}
                drawerWidth="260px"
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <Box flexGrow={1}>
                <Navbar
                    user={data || {}}
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <Outlet />
            </Box>
        </Box>
    )
}

export default Layout