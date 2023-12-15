import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";

export default function PageNotFound () {

    return (
    <Box>
        <Typography 
        variant="h3"
        sx={{
            textAlign:"center",
        }}
        >
            404 error , page not found
        </Typography>
    </Box>
    )
}