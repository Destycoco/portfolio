const Button = ({ children, className = '', onClick, text = 'white' }) => {
  return (
    <button
      className={`text-${text} font-brandFont3 px-4 py-2 rounded-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
