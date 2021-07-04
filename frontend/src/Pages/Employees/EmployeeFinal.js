import Employees from "./Employees";
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';


const theme = createMuiTheme({



    palette: {
        primary: {
            main: "#fd9a34",
            light: '#3c44b126'
        },
        secondary: {
            main: "#fd9a34",
            light: '#f8324526'
        },
        background: {
            default: "#f4f5fd"

        },

    },

    overrides: {
        MuiAppBar: {
            root: {
                transform: 'translateZ(0)'
            }
        }
    },
    props: {
        MuiIconButton: {
            disableRipple: true
        }
    }
})


const useStyles = makeStyles({
    appMain: {

        backgroundColor: '#E0E0E0',
        paddingBottom: '100px',
        paddingTop: '100px',
        paddingLeft: '100px',
        paddingRight: '100px',
        width: '100%',
    }
})



function EmployeeFinal() {
    const classes = useStyles();

    return (


        <ThemeProvider theme={theme}>
            <div className={classes.appMain}>


                <Employees />
            </div>

            <CssBaseline />
        </ThemeProvider>


    );


}

export default EmployeeFinal;
