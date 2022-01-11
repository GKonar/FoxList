import { makeStyles } from "@material-ui/core/styles";

interface IButtonProps {
  handleClick: () => void;
  className?: string;
  children?: React.ReactNode;
  sizeBig?: boolean;
}

const useStyles = makeStyles({
  Button: {
    border: "none",
    borderRadius: "50%",
    display: "flex",
    width: "25px",
    height: "25px",
    alignItems: "flex-end",
    background: "#f1c40f",
    boxShadow: "0px 0px 4px 1px #227093",
    transition: "all .2s",
    margin: "0 .2rem 0 .2rem",
    marginRight: "5px",

    "&:hover": {
      boxShadow: "0px 0px 8px 1px #227093",
    },

    "&:active": {
      boxShadow: "0px 0px 2px 1px #227093",
    },
  },

  Button_big: {
    width: "100px",
    height: "100px",

    "&:hover": {
      boxShadow: "0px 0px 15px 5px #227093",
    },

    "&:active": {
      boxShadow: "0px 0px 5px 3px #227093",
    },
  }

});

const ButtonRound = ({ handleClick, className, children, sizeBig }: IButtonProps) => {
  const classes = useStyles();
  const { Button, Button_big } = classes;

  return (
    <span
      onClick={handleClick}
      className={`${Button} ${sizeBig ? Button_big : null} ${className}`}
    >
      {children}
    </span >
  )
}

export default ButtonRound;
