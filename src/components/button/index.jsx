const Button = (props) => {
    const { children, color, type, ...res } = props;

    const getColorBtn = (type) => {
        if (type === 'primary') {
            return 'bg-theme-blue-300 text-white hover:bg-theme-blue-200';
        } else if (type === 'secondary') {
            return 'bg-theme-orange-200 text-white hover:bg-theme-blue-200';
        } else if (type === 'home') {
            return 'bg-white text-theme-blue-300 hover:bg-theme-blue-200 hover:border hover:border-white hover:text-white';
        } else {
            return 'bg-theme-blue-300 text-white hover:bg-theme-blue-200';
        }
    };

    return (
        <button
            {...res}
            type={type ?? 'button'}
            className={`${getColorBtn(
                color,
            )}  py-2 px-7 rounded-[10px]  transition duration-500 w-full focus:outline-none font-bold text-[25px] leading-[38px]`}
        >
            {children}
        </button>
    );
};

export default Button;
