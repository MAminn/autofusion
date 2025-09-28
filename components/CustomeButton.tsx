const CustomeButton = ({
  text,
  containerStyles,
}: {
  text: string;
  containerStyles: string;
}) => {
  return (
    <button
      className={`${containerStyles} group relative cursor-pointer overflow-hidden bg-accent uppercase rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
      {/* animation span */}
      <span className='ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-white transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32'></span>
      <span className='ease relative text-white transition duration-300 group-hover:text-accent font-semibold tracking-wider'>
        {text}
      </span>
    </button>
  );
};

export default CustomeButton;
