import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

type AppProps = {
  heading: string;
  imgOne: string;
  imgTwo: string;
  imgThree: string;
  subHeadingOne: string;
  subHeadingTwo: string;
  subHeadingThree: string;
  paragraphOne: string;
  paragraphTwo: string;
  paragraphThree: string;
  how?: boolean;
  howIcon?: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "var(--footer-linear-gradient)",
    },
    container: {
      margin: theme.spacing(0, "auto"),
      padding: theme.spacing(4, 1.5),
      maxWidth: "var(--max-width)",
    },
    heading: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        3.6
      )}px CircularStd, sans-serif`,
      color: "var(--black)",
      lineHeight: 1.28,
      textAlign: "center",
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down("xs")]: {
        fontSize: theme.spacing(2.8),
      },
    },
    gridItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      position: "relative",
    },
    img: {
      minWidth: "24%",
      height: "auto",
    },
    howIcon: {
      position: "absolute",
      right: 0,
      top: 20,
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    subHeading: {
      font: `normal  ${theme.typography.fontWeightBold} ${theme.spacing(
        2
      )}px AkkuratPro, sans-serif`,
      color: "var(--black)",
      lineHeight: 1.8,
      [theme.breakpoints.down("xs")]: {
        fontSize: theme.spacing(1.8),
      },
    },
    paragraph: {
      font: `normal  ${theme.typography.fontWeightRegular} ${theme.spacing(
        1.8
      )}px AkkuratPro, sans-serif`,
      color: theme.palette.secondary.main,
      lineHeight: 1.78,
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
        fontSize: theme.spacing(1.4),
      },
    },
    btn: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        1.8
      )}px AkkuratPro, sans-serif`,
      textTransform: "capitalize",
      [theme.breakpoints.down("xs")]: {
        fontSize: theme.spacing(1.4),
      },
    },
  })
);

function WhyAndHow({
  how,
  howIcon,
  heading,
  imgOne,
  imgTwo,
  imgThree,
  subHeadingOne,
  subHeadingTwo,
  subHeadingThree,
  paragraphOne,
  paragraphTwo,
  paragraphThree,
}: AppProps) {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={clsx(!how && classes.root)}>
      <div className={classes.container}>
        <Typography variant="h6" className={classes.heading}>
          {t(heading)}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
            <img src={imgOne} alt="img one" className={classes.img} />
            {how ? (
              <img src={howIcon} alt="how icon" className={classes.howIcon} />
            ) : (
              ""
            )}
            <Typography variant="body1" className={classes.subHeading}>
              {t(subHeadingOne)}
            </Typography>
            <Typography
              variant="body1"
              className={classes.paragraph}
              gutterBottom
            >
              {t(paragraphOne)}
            </Typography>
            {!how ? (
              <Button
                endIcon={<ArrowRightAltIcon />}
                color="primary"
                className={classes.btn}
              >
                Read more
              </Button>
            ) : (
              ""
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
            <img src={imgTwo} alt="img two" className={classes.img} />
            {how ? (
              <img src={howIcon} alt="how icon" className={classes.howIcon} />
            ) : (
              ""
            )}
            <Typography variant="body1" className={classes.subHeading}>
              {t(subHeadingTwo)}
            </Typography>
            <Typography
              variant="body1"
              className={classes.paragraph}
              gutterBottom
            >
              {t(paragraphTwo)}
            </Typography>
            {!how ? (
              <Button
                endIcon={<ArrowRightAltIcon />}
                color="primary"
                className={classes.btn}
              >
                Read more
              </Button>
            ) : (
              ""
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
            <img src={imgThree} alt="img three" className={classes.img} />
            <Typography variant="body1" className={classes.subHeading}>
              {t(subHeadingThree)}
            </Typography>
            <Typography
              variant="body1"
              className={classes.paragraph}
              gutterBottom
            >
              {t(paragraphThree)}
            </Typography>
            {!how ? (
              <Button
                endIcon={<ArrowRightAltIcon />}
                color="primary"
                className={classes.btn}
              >
                Read more
              </Button>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default WhyAndHow;
