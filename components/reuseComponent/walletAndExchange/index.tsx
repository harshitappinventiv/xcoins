import {
  Typography,
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Button,
} from "@material-ui/core";
import clsx from "clsx";
import { useTranslation } from "next-i18next";

type AppProps = {
  img: string;
  heading: string;
  paragraph: string;
  button: string;
  reverse?: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: theme.spacing(0, "auto"),
      padding: theme.spacing(3, 1.5),
      maxWidth: "var(--max-width)",
    },
    gridItemImg: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    img: {
      width: "70%",
      height: "auto",
    },
    gridItemImgOrder: {
      order: 2,
      [theme.breakpoints.down("xs")]: {
        order: 1,
      },
    },
    gritItemContent: {
      display: "flex",
      alignItems: "center",
      paddingRight: theme.spacing(9),
      [theme.breakpoints.down("xs")]: {
        paddingRight: theme.spacing(0),
        marginTop: theme.spacing(3),
        textAlign: "center",
      },
    },
    gridItemContentOrder: {
      order: 1,
      [theme.breakpoints.down("xs")]: {
        order: 2,
      },
    },
    heading: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        3.6
      )}px CircularStd, sans-serif`,
      color: "var(--black)",
      lineHeight: 1.28,
      [theme.breakpoints.down("xs")]: {
        fontSize: theme.spacing(2.8),
      },
    },
    paragraph: {
      font: `normal  ${theme.typography.fontWeightRegular} ${theme.spacing(
        1.8
      )}px AkkuratPro, sans-serif`,
      color: theme.palette.secondary.main,
      margin: theme.spacing(2, 0),
      lineHeight: 1.78,
      [theme.breakpoints.down("xs")]: {
        fontSize: theme.spacing(1.4),
      },
    },
    btn: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.4
      )}px AkkuratPro, sans-serif`,
      padding: theme.spacing(1.5, 4),
      borderRadius: theme.spacing(3.2),
      background: theme.palette.primary.light,
    },
  })
);

function WalletAndExchange({
  img,
  heading,
  paragraph,
  button,
  reverse,
}: AppProps) {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          className={clsx(
            classes.gridItemImg,
            reverse && classes.gridItemImgOrder
          )}
        >
          <img src={img} alt="buy crypto" className={classes.img} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          className={clsx(
            classes.gritItemContent,
            reverse && classes.gridItemContentOrder
          )}
        >
          <div>
            <Typography variant="h3" className={classes.heading}>
              {t(heading)}
            </Typography>
            <Typography variant="body1" className={classes.paragraph}>
              {t(paragraph)}
            </Typography>
            <Button color="primary" className={classes.btn}>
              {t(button)}
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default WalletAndExchange;
