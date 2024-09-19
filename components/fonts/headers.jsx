export const H1 = ({ children, className = '' }) => {
  return (
    <div className={`text-base text-brandBlack ${className}`}>{children}</div>
  );
};

export const H2 = ({ children, className = '' }) => {
  return <div className={`text-2xl font-bold ${className}`}>{children}</div>;
};
export const H3 = ({ children, className = '' }) => {
  return (
    <div className={`text-3xl text-brandBlack font-bold ${className}`}>
      {children}
    </div>
  );
};
export const H4 = ({ children, className = '' }) => {
  return (
    <div className={`text-4xl text-brandBlack font-extrabold  ${className}`}>
      {children}
    </div>
  );
};
export const H5 = ({ children, className = '' }) => {
  return (
    <div className={`text-5xl text-brandBlack ${className}`}>{children}</div>
  );
};
export const H6 = ({ children, className = '' }) => {
  return (
    <div className={`text-6xl text-brandBlack ${className}`}>{children}</div>
  );
};
