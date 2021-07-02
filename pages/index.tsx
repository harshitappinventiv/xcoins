import { Typography, makeStyles, Theme, createStyles } from "@material-ui/core";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

// ? ****************************** components ****************************
import BuyBitcoin from "../components/BuyBitcoin";
import CoinImg from "../components/CoinImg";
import TrustedCustomer from "../components/TrustedCustomer";
import WhyAndHow from "../components/reuseComponent/whyAndHow";

//  ? ******************************** images ********************************
import LocalImages from "../utils/images";

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
      <WhyAndHow
        heading={"why_xcoins_heading"}
        imgOne={LocalImages.WHY_SING_UP}
        imgTwo={LocalImages.WHY_INSTANT}
        imgThree={LocalImages.WHY_SUPPORT}
        subHeadingOne={"why_xcoins_subheading_one"}
        subHeadingTwo={"why_xcoins_subheading_two"}
        subHeadingThree={"why_xcoins_subheading_three"}
        paragraphOne={"why_xcoins_paragraph_one"}
        paragraphTwo={"why_xcoins_paragraph_two"}
        paragraphThree={"why_xcoins_paragraph_three"}
        // how
        // howIcon={LocalImages.WORK_ARROW}
      />
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
