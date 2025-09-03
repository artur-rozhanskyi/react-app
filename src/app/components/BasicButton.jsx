import Button from "@mui/material/Button";

export const BasicButton = ({ type, disabled, children }) => {
  return (
    <Button variant="outlined" type={type} disabled={disabled}>
      {children}
    </Button>
  );
};
