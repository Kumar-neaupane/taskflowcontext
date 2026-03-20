

const Status = ({ children, statusColor='text-red-500' }: any) => {
   
  return (
    <div className={`${statusColor} px-3 py-1 rounded-full w-fit text-sm font-medium`}>
      <p>{children}</p>
    </div>
  );
};

export default Status;
