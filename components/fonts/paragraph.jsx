const P = ({ children, className = '' }) => {
  return (
    <p className={`text-base text-brandBlack ${className} `}>{children}</p>
  );
};

export default P;
