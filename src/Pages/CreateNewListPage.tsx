import { Fragment, useContext, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import ButtonRound from "../Components/ButtonRound";
import CenteringContainer from "../Components/CenteringContainer";
import H1 from "../Components/H1";
import TextField from "../Components/TextField"
import useInputState from "../hooks/useInputState";
import { ReactComponent as PlusIcon } from "../assets/icons/plus-round.svg";
import { makeStyles } from "@material-ui/core";
import { ProductsContext } from "../contexts/products.context";

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
  const navigate = useNavigate();
  const classes = useStyles();
  const { Icon, Form } = classes;
  const formRef = useRef<HTMLFormElement>(null);
  const { dispatch } = useContext(ProductsContext);

  const submitForm = () => {
    formRef.current?.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch?.({ type: "ADD_LIST", listName: value });
    navigate("/additem")
    console.log("form submitted!")
  }

  return (
    <Fragment>
      <CenteringContainer>
        <form ref={formRef} className={Form} onSubmit={handleSubmit}>
          <H1 text="Type Your list name 📃" />
          <TextField
            onChange={setValue}
            placeholder="List Name"
            value={value}
          />
        </form>
        <ButtonRound
          handleClick={submitForm}
          sizeBig={true}>
          <PlusIcon className={Icon} />
        </ButtonRound>
      </CenteringContainer>
    </Fragment>
  )
}

export default CreateNewListPage;