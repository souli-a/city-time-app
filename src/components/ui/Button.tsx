import '../../styles/components/ui/button.css';

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: JSX.Element | React.ReactNode;
  className: string;
}

const Button = ({ onClick, children, className }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
