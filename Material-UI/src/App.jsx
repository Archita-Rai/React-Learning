import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Alert from "@mui/material/Alert";

function App() {
  let handleClicked = () => {
    console.log("Button was clicked");
  };
  return (
    <>
      <h1>Hello</h1>
      <Button variant="contained" onClick={handleClicked}>
        Click me
      </Button>
      <Button
        variant="contained"
        onClick={handleClicked}
        color="success"
        size="large"
        startIcon={<DeleteIcon />}
      >
        Click me2
      </Button>
      <Alert variant="filled" severity="error">
        This is a filled error Alert.
      </Alert>
    </>
  );
}

export default App;
