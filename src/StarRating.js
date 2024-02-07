const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
};

const textStyle = {
  lineHeight: "0",
  margin: "0",
};

export default function StarRating({ maxRating }) {
  return (
    <div style={containerStyle}>
      {Array.from({ length: maxRating }).map((_, i) => (
        <span style={starContainerStyle}>{i}</span>
      ))}
      <p style={textStyle}></p>
    </div>
  );
}
