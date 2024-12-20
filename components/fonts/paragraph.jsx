const P = ({ children, className = '' }) => {
  return (
    <p className={`text-lg max-sm:text-sm text-brandBlack ${className} `}>
      {children}
    </p>
  );
};

export default P;
