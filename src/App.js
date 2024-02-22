import classes from "./app.module.css";
import Profile from "./Components/profile/Profile";

function App() {
  return (
    <div className="App">
      <div className={classes.profileContainer}>
        <div className={classes.icons}>Icons</div>
        <Profile />
        <div className={classes.details}>Details</div>
      </div>
    </div>
  );
}

export default App;
