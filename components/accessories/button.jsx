const Button = ({ children, className = '', onClick }) => {
  return (
    <button
      className={`text-white px-4 py-2 rounded-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
