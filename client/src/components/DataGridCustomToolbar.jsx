import React from 'react'

// @mui
import { Search } from '@mui/icons-material'
import { IconButton, TextField, InputAdornment } from '@mui/material'
import {
    GridToolbarDensitySelector,
    GridToolbarContainer,
    GridToolbarExport,
    GridToolbarColumnsButton
} from '@mui/x-data-grid'

// Components
import FlexBetween from './FlexBetween'

const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch }) => {
    return (
        <GridToolbarContainer>
            <FlexBetween width="100%">

                <FlexBetween>
                    <GridToolbarColumnsButton />
                    <GridToolbarDensitySelector />
                    <GridToolbarExport />
                </FlexBetween>

                    <TextField
                        label="Search..."
                        sx={{ mb: "0.5rem", ml: "15px", mt: "4rem" , width: "15rem" }}
                        onChange={(e) => setSearchInput(e.target.value)}
                        value={searchInput}
                        variant="standard"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => {
                                            setSearch(searchInput);
                                            setSearchInput("");
                                        }}
                                    >
                                        <Search />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

            </FlexBetween>
        </GridToolbarContainer>
    )
}

export default DataGridCustomToolbar