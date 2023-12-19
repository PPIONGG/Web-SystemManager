import styles from './header.module.scss'
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/system";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';

const customTheme = createTheme({
    palette: {
      warning: {
        main: "#f7b307",
      },
    },
  });
  const StyledDiv = styled("div")(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: theme.palette.warning.main,
      },
    },
  }));
export default function RegisterHeader() {
  return (
    <div className={styles.header}>
    <div className={styles.groupSpreadingNo}>
      <div className={styles.textSpreadingNo}>SPREADING No</div>
      <div className={styles.dflex}>
        <ThemeProvider theme={customTheme}>
          <StyledDiv>
            <TextField
              label=""
              variant="outlined"
              color="warning"
              style={{
                backgroundColor: "#f5c242",
                borderRadius: "20px",
              }}
              InputProps={{
                style: {
                  borderRadius: "20px",
                  width: "200px",
                  height: "30px",
                  color: "white",
                  fontWeight: "bold",
                },
              }}
            />
          </StyledDiv>
        </ThemeProvider>
        <CancelRoundedIcon style={{ color: 'red',fontSize:"32px"}}/>
      </div>
    </div>
    <div className={styles.groupBoxRfid}>
        <div className={styles.textBoxRfid}>BOX RFID</div>
        <div className={styles.dflex}>
        <ThemeProvider theme={customTheme}>
          <StyledDiv>
            <TextField
              label=""
              variant="outlined"
              color="warning"
              style={{
                backgroundColor: "#f5c242",
                borderRadius: "20px",
              }}
              InputProps={{
                style: {
                  borderRadius: "20px",
                  width: "200px",
                  height: "30px",
                  color: "white",
                  fontWeight: "bold",
                },
              }}
            />
          </StyledDiv>
        </ThemeProvider>
        <TaskAltRoundedIcon style={{ color: 'green',fontSize:"32px"}}/>
        {/* <CancelRoundedIcon style={{ color: 'red',fontSize:"32px"}}/> */}
      </div>
        </div>
    <div></div>
  </div>  )
}
