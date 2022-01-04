import { makeStyles } from "@material-ui/core/styles";

interface IH1Props {
  text: string;
}

const useStyles = makeStyles({
  WelcomeHeader: {
    color: "#1c5f7e",
    padding: "1rem 0 ",
    textAlign: "center"
  },
});

const H1 = ({ text }: IH1Props) => {
  const classes = useStyles();
  return <h1 className={classes.WelcomeHeader}>{text}</h1>
}

export default H1;