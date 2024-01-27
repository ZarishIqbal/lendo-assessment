import "./button.scss";

type ButtonProps = {
  title: string;
  onClick: () => void;
  theme?: "primary" | "secondary" | "red";
};
export const Button = ({ title, onClick, theme = "primary" }: ButtonProps) => {
  return (
    <button className={"button " + theme} onClick={onClick}>
      {title}
    </button>
  );
};
