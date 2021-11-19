import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  TextField: {
    minWidth: "500px",
    padding: "1rem",
    borderRadius: "15px",
    backgroundColor: "transparent",
    borderColor: "#1c5f7e",
    fontSize: "1rem",
    borderStyle: "solid",

    "&:focus": {
      boxShadow: "0px 0px 5px 1px #227093",
      outline: "none"
    },

    "&::placeholder": {
      color: "#1c5f7e",
      opacity: "0.6",
    },
  }
});

interface ITextFieldProps {
  reference: React.RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const TextField = ({ onChange, reference }: ITextFieldProps) => {
  const classes = useStyles();

  return (
    <input
      className={classes.TextField}
      placeholder="Add item"
      ref={reference}
      onChange={onChange}
      type="text"
    />
  );
};

export default TextField;
