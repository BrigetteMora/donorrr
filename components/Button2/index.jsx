import React, { useEffect } from "react";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
import * as MuiMaterial from "@mui/material";
import "./Button2.css";

function Button2() {
  return (
    <div className="button">
      <MuiMaterial.Button
        endIcon=""
        size="large"
        startIcon=""
        color="primary"
        disabled={false}
        variant="contained"
        disableElevation={false}
      >
        Contact Us
      </MuiMaterial.Button>
    </div>
  );
}

export default Button2;
