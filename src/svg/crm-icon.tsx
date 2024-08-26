import {resetBusinessView, resetClientView} from "@/store/slices/view-slice";
import {useDispatch} from "react-redux";

const CRMIcon = () => {
    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch(resetBusinessView());
        dispatch(resetClientView());
    };

    return (
        <svg
            className="w-8 h-8 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            onClick={handleReset}
        >
            <polygon points="50,15 90,85 10,85" fill="black" />
        </svg>
    );
};

export default CRMIcon;
