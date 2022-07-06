import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    marginTop: "15px",
    margin: "15px",
  },
  pagination: {
    display: "flex",
    margin: "40px",
  },
});

export default useStyles;
