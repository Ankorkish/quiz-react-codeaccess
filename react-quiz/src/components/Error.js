let style = {
  color: "#fff",
  fontWeight: 700,
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translateX(-50%) translateY(50%)",
};

export default function Error() {
  return <div style={style}>⛔ Error</div>;
}
