import { makeStyles } from "@material-ui/core/styles";

interface IH2Props {
  text: string;
}

const useStyles = makeStyles({
  WelcomeHeader: {
    color: "#1c5f7e",
    padding: "1rem 0 "
  },
});

const H2 = ({ text }: IH2Props) => {
  const classes = useStyles();
  return <h2 className={classes.WelcomeHeader}>{text}</h2>
}

export default H2;