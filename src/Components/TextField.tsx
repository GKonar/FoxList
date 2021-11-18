import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({

});

interface ITextFieldProps {
  reference: React.RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const TextField = ({ onChange, reference }: ITextFieldProps) => {
  const classes = useStyles();

  return (
    <input ref={reference} onChange={onChange} type="text" />
  );
};

export default TextField;
