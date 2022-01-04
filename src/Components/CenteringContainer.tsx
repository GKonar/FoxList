import { makeStyles } from "@material-ui/core/styles";
import { ReactNode } from "react";

const useStyles = makeStyles({
  ContainerStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

interface ICenteringContainerProps {
  children: ReactNode;
}

const CenteringContainer = ({ children }: ICenteringContainerProps): JSX.Element => {
  const classes = useStyles();
  const { ContainerStyles } = classes;

  return (
    <div className={ContainerStyles}>
      {children}
    </div>
  )
}

export default CenteringContainer;
