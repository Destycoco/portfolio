const P = ({ children, className = '' }) => {
  return (
    <p className={`text-base max-sm:text-sm text-brandBlack ${className} `}>
      {children}
    </p>
  );
};

export default P;
