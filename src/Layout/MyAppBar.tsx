import React from 'react';
import {ToggleThemeButton, AppBar} from 'react-admin';
import {Typography, useMediaQuery} from '@mui/material';
import {defaultLightTheme, defaultDarkTheme} from "./Theme";

export const MyAppBar = (props: any) => {

    const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

    return (
        <AppBar {...props}>
            <Typography
                variant="h6"
                color="inherit"
                sx={{
                    flex: 1,
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    fontSize: isSmall ? "0.8rem":"1.5rem",
                }}
                id="react-admin-title"
            />

            <Typography
                sx={{
                    flex: 1,
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    fontSize: isSmall ? "0.6rem" : "1.8rem",
                    fontWeight: "bold",
                    display: isSmall ? "flex" : "block",
                    justifyContent: "center"
                }}
                variant={"h3"}
            >
                Actible Admin
            </Typography>
            <ToggleThemeButton
                lightTheme={defaultLightTheme}
                darkTheme={defaultDarkTheme}
            />
        </AppBar>
    )
}