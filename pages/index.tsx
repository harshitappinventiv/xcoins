import { Typography, makeStyles, Theme, createStyles } from "@material-ui/core";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

// ? ****************************** components ****************************
import BuyBitcoin from "../components/BuyBitcoin";
import CoinImg from "../components/CoinImg";
import TrustedCustomer from "../components/TrustedCustomer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    heading: {
      fontSize: theme.spacing(3),
    },
  })
);

function Home() {
  const i18next = useTranslation();
  const { t } = i18next;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BuyBitcoin />
      <CoinImg />
      <TrustedCustomer />
      <Typography variant="h1" className={classes.heading}>
        {t("under_development")}
      </Typography>
    </div>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "header", "footer"])),
  },
});

export default Home;
