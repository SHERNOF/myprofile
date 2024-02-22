import React from "react";
import classes from "./profile.module.css";

export default function Profile() {
  return (
    <div className={classes.profile}>
      <div className={classes.row1}>Row1</div>
      <div className={classes.row2}>Row1</div>
      <div className={classes.frame}>
        {/* <div className={classes.imgContainer}></div> */}
        <img src="/pics/ironman.png" alt="ironman" />
      </div>
    </div>
  );
}
