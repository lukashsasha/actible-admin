import React from 'react';
import {ToggleThemeButton, AppBar} from 'react-admin';
import {Typography} from '@mui/material';
import {defaultLightTheme, defaultDarkTheme} from "./Theme";


export const MyAppBar = (props: any) => (
    <AppBar {...props}>
        <Typography
            variant="h6"
            color="inherit"
            sx={{
                flex: 1,
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
            }}
            id="react-admin-title"
        />
        <Typography
            sx={{
                flex: 1,
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                fontSize: "1.8rem",
                fontWeight: "bold",
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