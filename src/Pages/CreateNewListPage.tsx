import ButtonRound from "../Components/ButtonRound";
import CenteringContainer from "../Components/CenteringContainer";
import H1 from "../Components/H1";
import TextField from "../Components/TextField"
import useInputState from "../hooks/useInputState";
import { ReactComponent as PlusIcon } from "../assets/icons/plus-round.svg";
import { makeStyles } from "@material-ui/core";
import { Fragment } from "react";

const useStyles = makeStyles({
  WelcomeText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "inherit",
  },

  Icon: {
    fill: "#1c5f7e",
    width: "100px",
    height: "100px",
    cursor: "pointer",
  },

  Form: {
    paddingBottom: "2rem"
  }
});

const CreateNewListPage = (): JSX.Element => {
  const [value, setValue] = useInputState("");
  const classes = useStyles();
  const { Icon, Form } = classes;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("List created!")
  };

  return (
    <Fragment>
      <CenteringContainer>
        <form className={Form} onSubmit={(e) => handleSubmit(e)}>
          <H1 text="Type Your list name 📃" />
          <TextField
            onChange={setValue}
            placeholder="List Name"
            value={value}
          />
        </form>
        <ButtonRound
          handleClick={() => console.log("ok")}
          sizeBig={true}>
          <PlusIcon className={Icon} />
        </ButtonRound>
      </CenteringContainer>
    </Fragment>
  )
}

export default CreateNewListPage;