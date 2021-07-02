import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Typography,
} from "@material-ui/core";
import { useTranslation } from "next-i18next";

// ******************************** images and  icons ********************************
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
    },
    container: {
      maxWidth: "var(--max-width)",
      padding: theme.spacing(0, 1.5),
      margin: theme.spacing(0, "auto"),
    },
    heading: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        3.6
      )}px CircularStd, sans-serif`,
      color: "var(--black)",
      lineHeight: 1.28,
    },
    reviewDetailsDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: theme.spacing(3, 0),
    },
    averageDiv: {
      display: "flex",
      flexDirection: "column",
    },
    averageNumber: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        2.4
      )}px CircularStd, sans-serif`,
      color: theme.palette.primary.main,
      lineHeight: 1.25,
    },
    averageParagraph: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        1.8
      )}px AkkuratPro, sans-serif`,
      color: theme.palette.secondary.main,
      lineHeight: 1.78,
    },
    middleLine: {
      width: 1,
      height: 45,
      backgroundColor: theme.palette.secondary.main,
      opacity: 0.1,
    },
    reviewLogo: {
      width: "60%",
    },
    imgFit: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
    contentDiv: {
      backgroundColor: "var(--white)",
      borderRadius: 20,
      boxShadow: "var(--trusted-customer-box-shadow)",
      padding: theme.spacing(4, 3.5, 3),
      width: "80%",
      height: "85%",
      margin: theme.spacing(0, "auto"),
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      position: "relative",
      "&::before": {
        position: "absolute",
        content: '""',
        width: "96%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: "100%",
        top: "3%",
        left: "2%",
        // backgroundColor: "pink",
        boxShadow: "var(--trusted-customer-box-shadow)",
      },
      "&::after": {
        position: "absolute",
        content: '""',
        width: "92%",
        height: "100%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        top: "6%",
        left: "4%",
        // backgroundColor: "green",
        boxShadow: "var(--trusted-customer-box-shadow)",
      },
      [theme.breakpoints.down("xs")]: {
        height: "auto",
        marginTop: theme.spacing(2),
      },
    },
    contentHeading: {
      font: `normal italic ${
        theme.typography.fontWeightRegular
      } ${theme.spacing(1.8)}px AkkuratPro, sans-serif`,
      color: theme.palette.secondary.main,
      lineHeight: 1.78,
    },
    headingArrow: {
      color: "var(--green-blue)",
      fontWeight: theme.typography.fontWeightBold,
    },
    userName: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.8
      )}px AkkuratPro, sans-serif`,
      color: "var(--black)",
      lineHeight: 1.78,
      marginTop: theme.spacing(1.5),
    },
    lineDiv: {
      display: "flex",
      "& div": {
        width: 30,
        height: 2,
        backgroundColor: "var(--green-blue)",
        "&:not(:first-child)": {
          marginLeft: theme.spacing(0.4),
          backgroundColor: theme.palette.secondary.main,
          opacity: 0.3,
        },
      },
    },
  })
);

function TrustedCustomer() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      <div className={classes.backgroundImg}></div>
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" className={classes.heading}>
                {t("trusted_customer")}
              </Typography>
              <div className={classes.reviewDetailsDiv}>
                <div className={classes.averageDiv}>
                  <Typography variant="body1" className={classes.averageNumber}>
                    4.80
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.averageParagraph}
                  >
                    {t("average_excelent")}
                  </Typography>
                </div>
                <div className={classes.middleLine}></div>
                <div className={classes.averageDiv}>
                  <Typography variant="body1" className={classes.averageNumber}>
                    120
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.averageParagraph}
                  >
                    {t("review_total")}
                  </Typography>
                </div>
              </div>
              <div className={classes.reviewLogo}>
                <img
                  src={LocalImages.REVIEW_LOGO}
                  alt="review logo"
                  className={classes.imgFit}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={8}>
              <div className={classes.contentDiv}>
                <div>
                  <Typography variant="h6" className={classes.contentHeading}>
                    <span className={classes.headingArrow}>«</span>
                    {t("support_heading_one")}
                    <span className={classes.headingArrow}>»</span>
                  </Typography>
                  <Typography variant="body1" className={classes.userName}>
                    Kevin D.
                  </Typography>
                </div>
                <div className={classes.lineDiv}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default TrustedCustomer;
