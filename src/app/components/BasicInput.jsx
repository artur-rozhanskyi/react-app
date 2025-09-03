import TextField from "@mui/material/TextField";

export const BasicInput = ({ label, name, type, onChange, onBlur, value }) => {
  return (
    <TextField
      label={label}
      variant="standard"
      type={type}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
  );
};
