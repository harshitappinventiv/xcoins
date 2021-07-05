import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// ? ****************************** components ****************************
import BuyBitcoin from "../components/BuyBitcoin";
import CoinImg from "../components/CoinImg";
import TrustedCustomer from "../components/TrustedCustomer";
import WhyAndHow from "../components/reuseComponent/whyAndHow";
import ReferralProgram from "../components/referralProgram";
import WalletAndExchange from "../components/reuseComponent/walletAndExchange";

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
      <ReferralProgram />
      <WalletAndExchange
        img={LocalImages.BUY_CRYPTO}
        heading="buy_crypto_heading"
        paragraph="buy_crypto_paragraph"
        button="buy_crypto_btn"
      />
      <WalletAndExchange
        img={LocalImages.CREATE_WALLET}
        heading="create_wallet_heading"
        paragraph="create_wallet_paragraph"
        button="create_wallet_btn"
        reverse
      />
      <WalletAndExchange
        img={LocalImages.EXCHANGE_CURRENCY}
        heading="exchange_currency_heading"
        paragraph="exchange_currency_paragraph"
        button="exchange_currency_btn"
      />
      <WhyAndHow
        heading={"how_xcoins_heading"}
        imgOne={LocalImages.HOW_SIGNEUP}
        imgTwo={LocalImages.BUY_TOKEN}
        imgThree={LocalImages.RECIEVE_TOKEN}
        subHeadingOne={"how_xcoins_subheading_one"}
        subHeadingTwo={"how_xcoins_subheading_two"}
        subHeadingThree={"how_xcoins_subheading_three"}
        paragraphOne={"how_xcoins_paragraph_one"}
        paragraphTwo={"how_xcoins_paragraph_two"}
        paragraphThree={"how_xcoins_paragraph_three"}
        how
        howIcon={LocalImages.WORK_ARROW}
      />
    </div>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "header", "footer"])),
  },
});

export default Home;
