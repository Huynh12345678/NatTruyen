import Router from 'next/router';
import { FaChevronLeft } from 'react-icons/fa';
import { handleSource } from 'store/action';
import { useAppDispatch, useAppSelector } from "hooks/useRedux";

const TypeRender = (type: string) => {
    const dispatch = useAppDispatch();
    const { reducer: select } = useAppSelector(state => state);

    return (
        <h1 className={`w-full font-bold text-white sm:text-3xl text-2xl`}>
            {type}
            <span
                onClick={() => { dispatch(handleSource(select.source, 'latest')); Router.push(`/`); }}
                className='float-right flex items-center text-gray-300 hover:text-white transition gap-1'
            >
                <FaChevronLeft className='icon' size={20} />
                <span className="text-xl sm:text-2xl font-semibold">Back</span>
            </span>
        </h1 >
    );
};

export default TypeRender;