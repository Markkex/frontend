import React from "react";
import Button from "@mui/material/Button";
import styles from "./styles";

/* 
variant: 
    contained
    text
    outlined
isDisabled: 
    true
    false 



*/
const AppButton = ({ variant, text, onClick, isDisabled }) => {
  return (
    <div style={styles.AppButton}>
      <Button onclick={onClick} variant={variant} disabled={isDisabled}>
        {text}
      </Button>
    </div>
  );
};

export default AppButton;
