const P = ({ children, className = '' }) => {
  return (
    <p className={`text-lg max-sm:text-base text-brandBlack ${className} `}>
      {children}
    </p>
  );
};

export default P;
