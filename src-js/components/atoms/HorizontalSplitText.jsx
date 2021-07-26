import * as React from "react";
import {
  Typography,
} from "@material-ui/core";

function HorizontalSplitText({ textObject = {} }) {
  return (
    <Typography>{Object.keys(textObject).map(item => `${item}: ${textObject[item]}`).join(" | ")}</Typography>
  )
}
export default HorizontalSplitText;