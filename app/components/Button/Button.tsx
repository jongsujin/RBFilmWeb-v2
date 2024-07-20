interface ButtonProps {
  width: string;
  height: string;
  bg: string;
  borderColor: string;
  br: string;
  content: string;
  onClick: () => void;
  buttonType: "button" | "submit";
  fontColor?: string;
  fontSize: string;
  fontWeight: string;
  fontFamily: string;
  lineHeight: string;
  margin?: string;
  padding?: string;
}

export default function Button({
  width,
  height,
  bg,
  borderColor,
  br,
  content,
  onClick,
  buttonType,
  fontColor,
  margin,
  padding,
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
}: ButtonProps) {
  return (
    <button
      type={buttonType === "button" ? "button" : "submit"}
      className={`${width} ${height} ${bg} border ${borderColor} ${br} ${fontColor} ${margin} ${padding} ${fontSize} ${lineHeight} ${fontFamily} ${fontWeight}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
Button.defaultProps = {
  fontColor: "text-white",
  margin: "mx-0 my-0",
  padding: "p-0",
};
