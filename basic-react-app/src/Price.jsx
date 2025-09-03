export default function Price({ oldPrices, newPrices }) {
  let oldStyles = {
    textDecoration: "line-through",
  };
  let newStyles = {
    fontSize: "1rem",
    fontWeight: "600",
  };
  let styles = {
    backgroundColor: "yellow",
    height: "50px",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
  };
  return (
    <div style={styles}>
      <span style={oldStyles}>Old Price:&nbsp;{oldPrices}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span style={newStyles}>New Price:&nbsp;{newPrices}</span>
    </div>
  );
}
