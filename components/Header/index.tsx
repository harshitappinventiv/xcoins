import { useState } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  AppBar,
  Toolbar,
  Box,
  Link as NavLink,
  Divider,
  // Select,
  // MenuItem,
  Button,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";

// ******************************** images and icons ********************************
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import LocalImages from "../../utils/images";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "sticky",
      top: 0,
      zIndex: theme.zIndex.appBar,
    },
    appBar: {
      boxShadow: "none",
      background: "var(--header-linear-gradient)",
      position: "sticky",
      top: 0,
    },
    toolbar: {
      width: "100%",
      margin: theme.spacing(0, "auto"),
      padding: theme.spacing(0, 1.5),
      maxWidth: "var(--max-width)",
    },
    logo: {
      [theme.breakpoints.down("xs")]: {
        width: "100px",
        height: "30px",
      },
    },
    navBox: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(2, 0),
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(1.2, 0),
      },
    },
    linksBox: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    navLink: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.2
      )}px AkkuratPro, sans-serif`,
      color: theme.palette.secondary.light,
      cursor: "pointer",
      "&:not(:last-child)": {
        marginRight: theme.spacing(3),
      },
    },
    btnBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    select: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.2
      )}px AkkuratPro, sans-serif`,
      color: theme.palette.secondary.light,
      cursor: "pointer",
      "&::before": {
        borderBottom: "none",
      },
      "& .MuiSelect-select:focus": {
        background: theme.palette.primary.light,
      },
    },
    btn: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.2
      )}px AkkuratPro, sans-serif`,
      padding: theme.spacing(1, 2),
      borderRadius: theme.spacing(2.3),
    },
    loginBtn: {
      margin: theme.spacing(0, 2.5),
    },
    signupBtn: {
      background: theme.palette.primary.light,
    },
    // ?? mobile view
    menuBtn: {
      display: "none",
      backgroundColor: "var(--white)",
      "&.MuiIconButton-root": {
        padding: theme.spacing(0.6),
      },
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
      "&.MuiIconButton-colorPrimary": {
        backgroundColor: "var(--white)",
      },
    },
    mobileNavbar: {
      padding: theme.spacing(1.5),
      background: "var(--mobile-header-linear-gradient)",
    },
    mobileMenuBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    mobileBtnBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    mobileSelect: {
      padding: theme.spacing(0, 1.6, 1, 1.6),
    },
  })
);

function Header() {
  const router = useRouter();
  const [language, setLanguage] = useState<string>("en");
  const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation("header");
  const classes = useStyles();
  const theme = useTheme();
  const media = useMediaQuery(theme.breakpoints.down("xs"));

  const handleLanguageChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setLanguage(event.target.value as string);
  };

  const toggleNavbar = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setOpen(!open);
  };

  // ***** sign and login button
  const loginAndSignup = () => (
    <>
      <div className={clsx(media && classes.mobileSelect)}>
        {/* <Select
          className={classes.select}
          value={language}
          onChange={handleLanguageChange}
        >
          <MenuItem value="en">EN</MenuItem>
          <MenuItem value="tr">TR</MenuItem>
          <MenuItem value="es">ES</MenuItem>
        </Select> */}
        <Link href="" locale={router.locale === "en" ? "es" : "en"}>
          <Button className={classes.select} color="primary">
            en/es
          </Button>
        </Link>
      </div>
      <div>
        <Button
          variant="outlined"
          color="primary"
          className={[classes.btn, classes.loginBtn].join(" ")}
        >
          {t("login")}
        </Button>
        <Button
          color="primary"
          className={[classes.btn, classes.signupBtn].join(" ")}
          disableFocusRipple
        >
          {t("signup")}
        </Button>
      </div>
    </>
  );

  // ****** mobile Navbar
  const mobileNavbar = () => (
    <div className={classes.mobileNavbar}>
      <Box className={classes.mobileMenuBtn}>
        <img
          src={LocalImages.LOGO}
          alt="xcoins logo"
          className={classes.logo}
        />
        <IconButton
          className={classes.menuBtn}
          color="primary"
          onClick={toggleNavbar}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {[t("buy_bitcoin"), t("sell_bitcoin"), t("blog"), t("about_us")].map(
          (text) => (
            <ListItem button key={text}>
              <NavLink className={classes.navLink} style={{ margin: "0" }}>
                {text}
              </NavLink>
            </ListItem>
          )
        )}
      </List>
      <Box className={[classes.btnBox, classes.mobileBtnBox].join(" ")}>
        {loginAndSignup()}
      </Box>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Box component="nav" className={classes.navBox}>
            <Box display="flex" alignItems="center">
              <img
                src={LocalImages.LOGO}
                alt="xcoins logo"
                className={classes.logo}
              />
              {!media && (
                <Divider
                  orientation="vertical"
                  flexItem
                  style={{
                    marginLeft: theme.spacing(6.8),
                    backgroundColor: theme.palette?.secondary?.dark,
                  }}
                />
              )}
            </Box>

            {/* for mobile navbar */}
            <IconButton
              className={classes.menuBtn}
              color="primary"
              onClick={toggleNavbar}
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor="top"
              open={open}
              onClose={toggleNavbar}
              onOpen={toggleNavbar}
            >
              {mobileNavbar()}
            </SwipeableDrawer>
            {/* end mobile navbar code */}

            <Box className={classes.linksBox}>
              <NavLink className={classes.navLink}>{t("buy_bitcoin")}</NavLink>
              <NavLink className={classes.navLink}>{t("sell_bitcoin")}</NavLink>
              <NavLink className={classes.navLink}>{t("blog")}</NavLink>
              <NavLink className={classes.navLink}>{t("about_us")}</NavLink>
            </Box>
            <Box className={classes.btnBox}>{loginAndSignup()}</Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
