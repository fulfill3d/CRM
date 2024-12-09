import {useSelector} from "react-redux";
import {RootState} from "@/store"; // Import your store types

export const useBusinessAccessToken = () => {
    return useSelector((state: RootState) => state.auth.businessAccessToken);
};

export const useClientAccessToken = () => {
    return useSelector((state: RootState) => state.auth.clientAccessToken);
};
