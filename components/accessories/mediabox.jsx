const MediaBox = ({ children, className, }) => {
  return (
    <div
      className={`shadow-lg rounded-md w-fit cursor-pointer bg-brandPurple ${className}`}
    >
      {children}
    </div>
  );
};

export default MediaBox;
