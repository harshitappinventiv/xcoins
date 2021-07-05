import { useState } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Box,
  Divider,
} from "@material-ui/core";
import { useTranslation } from "next-i18next";

// ******************************* images and icons ****************************
import LocalImages from "../../utils/images";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      background: "linear-gradient(to bottom,#f6fcff, #ffffff 46%)",
    },
    container: {
      margin: theme.spacing(0, "auto"),
      padding: theme.spacing(10, 1.5, 9, 1.5),
      maxWidth: "var(--max-width)",
    },
    contentGrid: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      "&::before": {
        content: '""',
        top: "-14%",
        left: "-20%",
        position: "absolute",
        background: `url(${LocalImages.BACKGROUND_CIRCUL_SMALL}) no-repeat`,
        width: "100%",
        height: "100%",
      },
    },
    heading: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        4.6
      )}px CircularStd, sans-serif`,
      lineHeight: 1.33,
      color: "var(--black)",
      marginBottom: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: theme.spacing(4),
      },
    },
    subHeading: {
      font: `normal ${theme.typography.fontWeightRegular} ${theme.spacing(
        2.2
      )}px AkkuratPro, sans-serif`,
      lineHeight: 1.64,
      color: theme.palette.secondary.main,
      maxWidth: "550px",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        maxWidth: "100%",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: theme.spacing(1.8),
      },
    },
    buyCoinsGrid: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(3),
      },
    },
    buyCoins: {
      width: "80%",
      borderRadius: 20,
      boxShadow: "var(--buy-bitcoins-box-shadow)",
      backgroundColor: "var(--white)",
      padding: theme.spacing(3, 1.5),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("xs")]: {
        width: "95%",
      },
    },
    buyCoinsHeading: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        2.4
      )}px CircularStd, sans-serif`,
      color: "var(--black)",
      lineHeight: 1.67,
      [theme.breakpoints.down("xs")]: {
        fontSize: theme.spacing(2.2),
      },
    },
    inputDiv: {
      margin: theme.spacing(1.5, 0),
      width: "100%",
    },
    inputAndSelect: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputField: {
      "& .MuiInputBase-root": {
        font: `normal ${theme.typography.fontWeightRegular} ${theme.spacing(
          3.6
        )}px CircularStd, sans-serif`,
        color: "var(--black)",
        lineHeight: 1.33,
      },
      "& .MuiInputBase-root.MuiInput-underline": {
        "&:hover": {
          borderBottom: "none",
        },
        "&::before": {
          borderBottom: 0,
        },
        "&::after": {
          borderBottom: 0,
        },
      },
    },
    selectLine: {
      width: 1,
      height: "100%",
      backgroundColor: theme.palette.secondary.light,
    },
    selectCurreny: {
      font: `normal ${theme.typography.fontWeightRegular} ${theme.spacing(
        2.6
      )}px CircularStd, sans-serif`,
      color: "var(--black)",
      lineHeight: 1.38,
      "&.MuiInput-underline": {
        "&:hover": {
          borderBottom: "none",
        },
        "&::before": {
          borderBottom: "none",
        },
        "&::after": {
          borderBottom: "none",
        },
      },
    },
    btn: {
      borderRadius: 32,
      boxShadow: "var(--buy-bitcoins-box-shadow-green-color)",
      backgroundColor: "var(--dark-lime-green)",
      padding: theme.spacing(1.5, 0),
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.8
      )}px AkkuratPro, sans-serif`,
      lineHeight: 1.56,
      letterSpacing: 1,
      color: "var(--white)",
      "&:hover": {
        backgroundColor: "var(--light-lime-green)",
        color: "var(--black)",
      },
    },
  })
);

function BuyBitcoin() {
  const [currencyOne, setCurrencyOne] = useState("usd");
  const [currencyTwo, setCurrencyTwo] = useState("btc");
  const classes = useStyles();
  const { t } = useTranslation();

  const handleCurrencyOneChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {};

  const handleCurrencyTwoChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {};

  const inputCurrencyOne = () => (
    <div className={classes.inputDiv}>
      <div className={classes.inputAndSelect}>
        <Box width="65%">
          <TextField
            fullWidth
            autoFocus
            className={classes.inputField}
            id="input-with-icon-one"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img
                    style={{ width: "50%" }}
                    src={LocalImages.US_FLAG}
                    alt="us flag"
                  />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box
          width="35%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Divider orientation="vertical" flexItem />
          <Select
            className={classes.selectCurreny}
            value={currencyOne}
            onChange={handleCurrencyOneChange}
          >
            <MenuItem value="usd">USD</MenuItem>
            <MenuItem value="btc">BTC</MenuItem>
            <MenuItem value="eur">EUR</MenuItem>
          </Select>
        </Box>
      </div>
    </div>
  );

  const inputCurrencyTwo = () => (
    <div className={classes.inputDiv}>
      <div className={classes.inputAndSelect}>
        <Box width="65%">
          <TextField
            fullWidth
            autoFocus
            className={classes.inputField}
            id="input-with-icon-two"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img
                    style={{ width: "75%" }}
                    src="https://i.ibb.co/PFvK7cs/btc-icon-3x.png"
                    alt="bit coin flag"
                  />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box
          width="35%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Divider orientation="vertical" flexItem />
          <Select
            className={classes.selectCurreny}
            value={currencyTwo}
            onChange={handleCurrencyTwoChange}
          >
            <MenuItem value="usd">USD</MenuItem>
            <MenuItem value="btc">BTC</MenuItem>
            <MenuItem value="eur">EUR</MenuItem>
          </Select>
        </Box>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Grid container>
          <Grid item xs={12} sm={12} md={7} className={classes.contentGrid}>
            <div>
              <Typography variant="h1" className={classes.heading}>
                {t("buy_and_store")}
              </Typography>
              <Typography variant="h6" className={classes.subHeading}>
                {t("buy_and_store_paragraph")}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={5} className={classes.buyCoinsGrid}>
            <div className={classes.buyCoins}>
              <Typography variant="h6" className={classes.buyCoinsHeading}>
                {t("get_crypto")}
              </Typography>
              <Box my={1}>
                {inputCurrencyOne()}
                <Divider flexItem style={{ height: 1 }} />
                {inputCurrencyTwo()}
              </Box>
              <Button fullWidth className={classes.btn}>
                {t("buy_bitcoin")}
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default BuyBitcoin;
