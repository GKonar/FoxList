import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

import ButtonRound from "../Components/ButtonRound";
import H1 from '../Components/H1';
import H2 from '../Components/H2';

import { ReactComponent as PlusIcon } from "../assets/icons/plus-round.svg";
import CenteringContainer from '../Components/CenteringContainer';

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
});

// LoginPage in production app.

const WelcomePage = (): JSX.Element => {
  const navigate = useNavigate();
  const classes = useStyles();
  const { Icon } = classes;

  return (
    <CenteringContainer>
      <H1 text='Create Your FoxList 😉' />
      <ButtonRound
        handleClick={() => navigate("/createlist")}
        sizeBig={true}>
        <PlusIcon className={Icon} />
      </ButtonRound>
      <H2 text="Hit the button to start." />
    </CenteringContainer>
  )
}

export default WelcomePage