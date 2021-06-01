import {
  makeStyles,
  createStyles,
  Theme,
  Typography,
  Box,
} from "@material-ui/core";
import { useTranslation } from "next-i18next";

import LocalImages from "../../utils/images";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    container: {
      margin: theme.spacing(0, "auto"),
      padding: theme.spacing(0, 1.5),
      maxWidth: "var(--max-width)",
    },
    heading: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.4
      )}px AkkuratPro, sans-serif`,
      color: theme.palette.secondary.main,
      textAlign: "center",
      lineHeight: 1.71,
    },
    coinDiv: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: theme.spacing(3),
      "& .img": {
        width: "7%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      },
      "& .img:not(:last-child)": {
        marginRight: "3%",
      },
    },
    imgCaption: {
      font: `normal ${theme.typography.fontWeightRegular} ${theme.spacing(
        1.2
      )}px AkkuratPro, sans-serif`,
      color: theme.palette.secondary.light,
      marginTop: theme.spacing(1),
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    imgFit: {
      width: "100%",
      height: "100%",
    },
  })
);

function CoinImg() {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography variant="h6" className={classes.heading}>
            {t("coin_img_heading")}
          </Typography>
          <div className={classes.coinDiv}>
            <div className="img">
              <img
                src={LocalImages.BCASH_LOGO}
                alt="b cash"
                className={classes.imgFit}
              />
              <Typography variant="body1" className={classes.imgCaption}>
                Bcash
              </Typography>
            </div>
            <div className="img">
              <img
                src={LocalImages.RIPPLE_LOGO}
                alt="ripple"
                className={classes.imgFit}
              />
              <Typography variant="body1" className={classes.imgCaption}>
                Ripple
              </Typography>
            </div>
            <div className="img">
              <img
                src={LocalImages.ETHEREUM_LOGO}
                alt="ethereum"
                className={classes.imgFit}
              />
              <Typography variant="body1" className={classes.imgCaption}>
                Ethereum
              </Typography>
            </div>
            <div className="img">
              <img
                src={LocalImages.BITCOIN_LOGO}
                alt="bitcoin"
                className={classes.imgFit}
              />
              <Typography variant="body1" className={classes.imgCaption}>
                Bitcoin
              </Typography>
            </div>
            <div className="img">
              <img
                src={LocalImages.LITECOIN_LOGO}
                alt="litecoin"
                className={classes.imgFit}
              />
              <Typography variant="body1" className={classes.imgCaption}>
                Litecoin
              </Typography>
            </div>
            <div className="img">
              <img
                src={LocalImages.MONERO_LOGO}
                alt="monero"
                className={classes.imgFit}
              />
              <Typography variant="body1" className={classes.imgCaption}>
                Monero
              </Typography>
            </div>
            <div className="img">
              <img
                src={LocalImages.Z_CASH}
                alt="zcash"
                className={classes.imgFit}
              />
              <Typography variant="body1" className={classes.imgCaption}>
                Zcash
              </Typography>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default CoinImg;
