import {defaultTheme} from 'react-admin';
import {ThemeOptions} from "@mui/material";
import {Filter} from "react-admin";

export const defaultDarkTheme: ThemeOptions = {
    ...defaultTheme,
    palette: {
        mode: 'dark',
    },
    components: {
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontWeight: "700",
                    fontSize: "0.9rem"
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                h3: {color: "#90caf9"},

            }
        }
    }
};

export const defaultLightTheme: ThemeOptions = {
    ...defaultTheme,
    components: {
        MuiTypography: {
            styleOverrides: {
                h3: {color: "white"},

            }
        }
    }

};
