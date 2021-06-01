import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  Button,
  Hidden,
} from "@material-ui/core";
import { useTranslation } from "next-i18next";

// ******************************* images ****************************
import LocalImages from "../../utils/images";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backgroundImg: {
      position: "relative",
      width: "100%",
      height: 200,
      overflow: "hidden",
      "&::before": {
        content: '""',
        top: 150,
        left: -83,
        background: "var(--footer-linear-gradient)",
        position: "absolute",
        width: "100%",
        height: "200%",
        transform: "rotate(10deg)",
      },
      "&::after": {
        content: '""',
        position: "absolute",
        top: 125,
        left: -83,
        background: "linear-gradient(to right, #637696, #ffffff 96%)",
        transform: "rotate(12deg)",
        width: "100%",
        height: 2,
        opacity: 0.3,
      },
    },
    root: {
      background: "var(--footer-linear-gradient)",
      padding: theme.spacing(0, 0, 4, 0),
    },
    container: {
      margin: theme.spacing(0, "auto"),
      padding: theme.spacing(0, 1.5),
      maxWidth: "var(--max-width)",
    },
    leftItem: {
      position: "relative",
      "& img": {
        position: "absolute",
        "&:first-child": {
          top: "10%",
          left: "20%",
        },
        "&:nth-child(2)": {
          top: "40%",
          right: "0",
        },
        "&:last-child": {
          bottom: "0",
          left: "5%",
        },
      },
    },
    middleItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      background: `url(${LocalImages.FOOTER_BUYING}) no-repeat center center`,
      height: theme.spacing(30),
      backgroundSize: "contain",
    },
    heading: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        3.6
      )}px CircularStd, sans-serif`,
      color: "var(--black)",
      textAlign: "center",
    },
    btn: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.6
      )}px AkkuratPro, sans-serif`,
      color: "var(--white)",
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(2, 3),
      borderRadius: theme.spacing(3.2),
      boxShadow: "var(--signup-box-shadow)",
      marginTop: theme.spacing(3),
      "&:hover": {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light,
      },
    },
    rightItem: {
      position: "relative",
      "& img": {
        position: "absolute",
        "&:first-child": {
          right: "20%",
          top: "10%",
        },
        "&:nth-child(2)": {
          bottom: "40%",
          left: "0",
        },
        "&:last-child": {
          right: "5%",
          bottom: "0",
        },
      },
    },
  })
);

function FooterBuying() {
  const { t } = useTranslation("footer");
  const classes = useStyles();
  return (
    <>
      <div className={classes.backgroundImg}></div>
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container>
            <Hidden xsDown>
              <Grid item xs={12} sm={3} className={classes.leftItem}>
                <img src={LocalImages.FOOTER_BITCOIN_ONE} alt="bitcoin one" />
                <img
                  src={LocalImages.FOOTER_BITCOIN_THREE}
                  alt="bitcoin three"
                />
                <img src={LocalImages.FOOTER_BITCOIN_TWO} alt="bitcoin two" />
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={6} className={classes.middleItem}>
              <Typography variant="h6" className={classes.heading}>
                {t("start_buying")}
              </Typography>
              <div>
                <Button className={classes.btn}> {t("signup_now")}</Button>
              </div>
            </Grid>
            <Hidden xsDown>
              <Grid item xs={12} sm={3} className={classes.rightItem}>
                <img src={LocalImages.FOOTER_BITCOIN_FOUR} alt="bitcoin four" />
                <img src={LocalImages.FOOTER_BITCOIN_SIX} alt="bitcoin six" />
                <img src={LocalImages.FOOTER_BITCOIN_FIVE} alt="bitcoin five" />
              </Grid>
            </Hidden>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default FooterBuying;
