
const Loader = () => {
  return (
    <div className="w-12 h-6 relative loader">
      <div className="w-2 h-3 absolute -left-4 animate-ping"></div>
      <div className="absolute inset-0 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
