interface ButtonProps {
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  children: React.ReactNode;
  className?: string;
}

export default function Button({ type, onClick, children, className }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
