import { ReactNode } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import Header from "../Header";
import Footer from "../Footer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageContainer: {},
  })
);

type Props = {
  children?: ReactNode;
};

function Layout({ children }: Props) {
  const classes = useStyles();
  return (
    <div className={classes.pageContainer}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
