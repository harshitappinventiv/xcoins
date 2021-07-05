import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { useTranslation } from "next-i18next";

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
      margin: theme.spacing(0, "auto"),
      padding: theme.spacing(0, 1.5),
      maxWidth: "var(--max-width)",
    },
    mainDiv: {
      position: "relative",
      borderRadius: 20,
      backgroundColor: "var(--white)",
      boxShadow: "var(--buy-bitcoins-box-shadow)",
      padding: theme.spacing(5, 4, 3),
      height: "100%",
      "&:first-child": {
        marginRight: theme.spacing(1.5),
        [theme.breakpoints.down("xs")]: {
          marginRight: theme.spacing(0),
        },
      },
      "&:last-child": {
        marginLeft: theme.spacing(1.5),
        [theme.breakpoints.down("xs")]: {
          marginLeft: theme.spacing(0),
        },
      },
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(5, 2, 3),
      },
    },
    imgDiv: {
      position: "absolute",
      width: 96,
      height: 96,
      borderRadius: "50%",
      backgroundColor: "var(--white)",
      boxShadow: "var(--buy-bitcoins-box-shadow)",
      top: "-50px",
    },
    heading: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        3.6
      )}px CircularStd, sans-serif`,
      color: "var(--black)",
      lineHeight: 1.28,
      margin: theme.spacing(2, 0),
      [theme.breakpoints.down("xs")]: {
        fontSize: theme.spacing(2.8),
      },
    },
    paragraphDiv: {
      display: "flex",
      alignItems: "center",
      marginTop: theme.spacing(2),
    },
    paragraph: {
      font: `normal  ${theme.typography.fontWeightRegular} ${theme.spacing(
        1.8
      )}px AkkuratPro, sans-serif`,
      color: theme.palette.secondary.main,
      marginLeft: theme.spacing(1),
      [theme.breakpoints.down("xs")]: {
        fontSize: theme.spacing(1.4),
      },
    },
    headingBuying: {
      font: `normal ${theme.typography.fontWeightRegular} ${theme.spacing(
        3
      )}px CircularStd, sans-serif`,
      color: "var(--black)",
    },
    paragraphBuying: {
      marginLeft: theme.spacing(0),
    },
    btn: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.6
      )}px AkkuratPro, sans-serif`,
      color: "var(--white)",
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(2, 8),
      borderRadius: theme.spacing(3.2),
      boxShadow: "var(--signup-box-shadow)",
      "&:hover": {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light,
      },
    },
    gridItemSupport: {
      [theme.breakpoints.down("xs")]: {
        marginTop: theme.spacing(10),
      },
    },
    startBuying: {
      margin: theme.spacing(8, 0, 4),
      paddingBottom: theme.spacing(3),
    },
    gridItemBuying: {
      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
      },
    },
    gridItemBuyingBtn: {
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
        marginTop: theme.spacing(3),
      },
    },
  })
);

function ReferralProgram() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      <div className={classes.backgroundImg}></div>
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <div className={classes.mainDiv}>
                <div className={classes.imgDiv}>
                  <img
                    src={LocalImages.JOIN_PROGRAM}
                    alt="join program"
                    style={{ minWidth: "100%", height: "auto" }}
                  />
                </div>
                <Typography variant="h4" className={classes.heading}>
                  {t("join_referral")}
                </Typography>
                {[
                  "join_paragraph_one",
                  "join_paragraph_two",
                  "join_paragraph_three",
                ].map((item, index) => (
                  <div className={classes.paragraphDiv} key={index}>
                    <img src={LocalImages.CHECK_GRENN} alt="check green" />
                    <Typography variant="body1" className={classes.paragraph}>
                      {t(item)}
                    </Typography>
                  </div>
                ))}
              </div>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.gridItemSupport}>
              <div className={classes.mainDiv}>
                <div className={classes.imgDiv}>
                  <img
                    src={LocalImages.WORDLD_CLASS_SUPPORT}
                    alt="world program"
                    style={{ minWidth: "100%", height: "auto" }}
                  />
                </div>
                <Typography variant="h4" className={classes.heading}>
                  {t("support_referral")}
                </Typography>
                {[
                  "support_paragraph_one",
                  "support_paragraph_two",
                  "support_paragraph_three",
                ].map((item, index) => (
                  <div className={classes.paragraphDiv} key={index}>
                    <img src={LocalImages.CHECK_PURPLE} alt="check green" />
                    <Typography variant="body1" className={classes.paragraph}>
                      {t(item)}
                    </Typography>
                  </div>
                ))}
              </div>
            </Grid>
          </Grid>
          <Grid container className={classes.startBuying}>
            <Grid item xs={12} sm={8} className={classes.gridItemBuying}>
              <Typography
                variant="h4"
                className={classes.headingBuying}
                gutterBottom
              >
                {t("start_buying_heading")}
              </Typography>
              <Typography
                variant="body1"
                className={[classes.paragraphBuying, classes.paragraph].join(
                  " "
                )}
              >
                {t("start_buying_paragraph")}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.gridItemBuyingBtn}>
              <Button className={classes.btn}>{t("sing_up")}</Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default ReferralProgram;
