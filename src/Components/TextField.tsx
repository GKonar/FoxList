import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  TextField_wrapper: {
    position: "relative",
    display: "flex"
  },

  TextField: {
    color: "#1c5f7e",
    minWidth: "500px",
    padding: "1rem",
    borderRadius: "15px",
    backgroundColor: "transparent",
    borderColor: "#1c5f7e",
    fontSize: "1rem",
    borderStyle: "solid",
    position: "relative",


    "&::placeholder": {
      position: "absolute",
      color: "#1c5f7e",
      opacity: "0.8",
      left: "20px",
      transition: ".8s",

    },

    "&:focus": {
      boxShadow: "0px 0px 5px 1px #227093",
      outline: "none",
      transition: ".2s",

      "&::placeholder": {
        left: "450px",
        opacity: "0",
      }
    },
  },

  Placeholder: {
    position: "absolute",
    top: "-10px",
    left: "15px",
    zIndex: 10000,
    backgroundColor: "#86C9C7",
    padding: "0px 5px 0px 5px",
    color: "#1c5f7e",

    // "&:focus": {
    //   top: "-10px",
    //   left: "15px",
    //   zIndex: "10000",
    //   backgroundColor: "#86C9C7",
    //   padding: "0px 5px 0px 5px"
    // }
  },


});

interface ITextFieldProps {
  reference: React.RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const TextField = ({ onChange, reference }: ITextFieldProps) => {
  const classes = useStyles();

  return (
    <div className={classes.TextField_wrapper}>
      <input
        className={classes.TextField}
        placeholder="Add item"
        ref={reference}
        onChange={onChange}
        type="text"
      />
      {/* <span className={classes.Placeholder}>
        Add item
      </span> */}
    </div>
  );
};

export default TextField;
