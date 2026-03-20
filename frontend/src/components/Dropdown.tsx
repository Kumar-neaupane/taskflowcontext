const Dropdown = ({ children, className, ...props }: any ) => {
  return (
    <div className={className}>
      <select {...props} className="px-3 py-2 outline-0 bg-white border border-gray-300 rounded-md text-sm min-w-[150px] cursor-pointer">
        {children}
      </select>
    </div>
  );
};

export default Dropdown;
