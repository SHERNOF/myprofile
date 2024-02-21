import classes from "./app.module.css";

function App() {
  return (
    <div className="App">
      <div className={classes.profileContainer}>
        <div className={classes.icons}>Icons</div>
        <div className={classes.profile}>Profile</div>
        <div className={classes.details}>Details</div>
      </div>
    </div>
  );
}

export default App;
