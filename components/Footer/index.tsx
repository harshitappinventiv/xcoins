import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

import FooterBuying from "./footerBuying";

// ******************************** images and  icons ********************************
import LocalImages from "../../utils/images";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "var(--footer-linear-gradient)",
      paddingBottom: theme.spacing(4),
    },
    container: {
      margin: theme.spacing(0, "auto"),
      padding: theme.spacing(0, 1.5),
      maxWidth: "var(--max-width)",
    },
    gridItem: {
      marginTop: theme.spacing(2.5),
    },
    logo: {
      [theme.breakpoints.down("xs")]: {
        width: "100px",
        height: "30px",
      },
    },
    reviewLogo: {
      width: "50%",
      margin: theme.spacing(2, 0, 1),
    },
    imgFit: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
    reviewPargraph: {
      font: `normal ${theme.typography.fontWeightRegular} ${theme.spacing(
        1.4
      )}px AkkuratPro, sans-serif`,
      color: theme.palette.secondary.main,
      lineHeight: 1.57,
      opacity: 0.5,
    },
    heading: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.4
      )}px AkkuratPro, sans-serif`,
      color: "var(--black)",
      letterSpacing: 1,
      marginBottom: theme.spacing(2),
    },
    paragraph: {
      font: `normal ${theme.typography.fontWeightRegular} ${theme.spacing(
        1.6
      )}px AkkuratPro, sans-serif`,
      color: theme.palette.secondary.main,
      lineHeight: 2.13,
    },
    serviceSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: theme.spacing(4, 0, 3),
    },
    serviceLinkDiv: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
    },
    serviceHeading: {
      font: `normal ${theme.typography.fontWeightRegular} ${theme.spacing(
        1.4
      )}px AkkuratPro, sans-serif`,
      color: theme.palette.secondary.main,
      lineHeight: 1.57,
      "&:not(:last-child)": {
        marginRight: theme.spacing(3),
      },
    },
    languageDiv: {
      display: "flex",
      alignItems: "center",
      alignSelf: "flex-start",
    },
    languageBtn: {
      color: "var(--black)",
      textTransform: "none",
    },
    description: {
      font: `normal ${theme.typography.fontWeightRegular} ${theme.spacing(
        1.4
      )}px AkkuratPro, sans-serif`,
      color: theme.palette.secondary.main,
      lineHeight: 1.57,
      opacity: 0.5,
    },
  })
);

function Footer() {
  const router = useRouter();
  const { t } = useTranslation("footer");
  const classes = useStyles();
  return (
    <>
      <FooterBuying />
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12} sm={8} md={6} className={classes.gridItem}>
              <img
                src={LocalImages.LOGO}
                alt="xcoin logo"
                className={classes.logo}
              />
              <div className={classes.reviewLogo}>
                <img
                  src={LocalImages.REVIEW_LOGO}
                  alt="review logo"
                  className={classes.imgFit}
                />
              </div>
              <Typography variant="body1" className={classes.reviewPargraph}>
                14 East, Level 8, Sliema Road, GZR1639, Malta
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={2} className={classes.gridItem}>
              <Typography variant="h6" className={classes.heading}>
                {t("company")}
              </Typography>
              <div>
                {[t("about_us"), t("careers"), t("press_kit")].map(
                  (item, index) => (
                    <Typography
                      variant="body1"
                      className={classes.paragraph}
                      key={index}
                    >
                      {item}
                    </Typography>
                  )
                )}
              </div>
            </Grid>
            <Grid item xs={6} sm={4} md={2} className={classes.gridItem}>
              <Typography variant="h6" className={classes.heading}>
                {t("support")}
              </Typography>
              <div>
                {[t("help_center"), t("contact")].map((item, index) => (
                  <Typography
                    variant="body1"
                    className={classes.paragraph}
                    key={index}
                  >
                    {item}
                  </Typography>
                ))}
              </div>
            </Grid>
            <Grid item xs={6} sm={4} md={2} className={classes.gridItem}>
              <Typography variant="h6" className={classes.heading}>
                {t("social")}
              </Typography>
              <div>
                <Typography
                  variant="body1"
                  className={classes.paragraph}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <InstagramIcon
                    style={{ marginRight: "10px" }}
                    fontSize="small"
                  />{" "}
                  Blog
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.paragraph}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <TwitterIcon
                    style={{ marginRight: "10px" }}
                    fontSize="small"
                  />{" "}
                  Twitter
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.paragraph}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <FacebookIcon
                    style={{ marginRight: "10px" }}
                    fontSize="small"
                  />{" "}
                  Facebook
                </Typography>
              </div>
            </Grid>
          </Grid>
          <div className={classes.serviceSection}>
            <div className={classes.serviceLinkDiv}>
              {[
                "© Xcoins.com",
                t("terms_of_service"),
                t("privacy_policy"),
                t("legal_notice"),
                t("sitemap"),
              ].map((item, index) => (
                <Typography
                  variant="body1"
                  className={classes.serviceHeading}
                  key={index}
                >
                  {item}
                </Typography>
              ))}
            </div>
            <div className={classes.languageDiv}>
              <Typography
                variant="body1"
                className={classes.serviceHeading}
                style={{ margin: "0" }}
              >
                {t("language")}
              </Typography>
              <Link href="/" locale={router.locale === "en" ? "es" : "en"}>
                <Button
                  color="primary"
                  endIcon={<ArrowDropDownIcon />}
                  className={[classes.serviceHeading, classes.languageBtn].join(
                    " "
                  )}
                >
                  EN/ES
                </Button>
              </Link>
            </div>
          </div>
          <Typography variant="body1" className={classes.description}>
            Xcoins is property of CF Technologies Ltd - Company #204616970 4
            East, Level 8, Sliema Road, GZR1639, Malta. All trademarks and
            copyrights belong to their respective owners. All rights reserved.
          </Typography>
        </div>
      </div>
    </>
  );
}

export default Footer;
