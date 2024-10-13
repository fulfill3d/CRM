import { useMsal } from "@azure/msal-react";
import { useEffect } from "react";
import { InteractionRequiredAuthError } from "@azure/msal-browser";
import { useDispatch } from "react-redux";
import {setBusinessAccessToken, setClientAccessToken} from "@/store/auth-slice";
import {businessScopes, clientScopes} from "@/msal/config";

export const useAcquireBusinessAccessToken = () => {
    const { instance, accounts } = useMsal();
    const dispatch = useDispatch();

    useEffect(() => {

        if (!accounts || accounts.length === 0) {
            return;
        }

        const request = {
            scopes: businessScopes,
            account: accounts[0],
        };

        instance.acquireTokenSilent(request)
            .then((response) => {
                if (response && response.accessToken) {
                    dispatch(setBusinessAccessToken(response.accessToken));
                }
            })
            .catch(async (error) => {
                if (error instanceof InteractionRequiredAuthError) {
                    await instance.acquireTokenRedirect(request);
                } else {
                    console.error("Error acquiring access token:", error);
                }
            });

    }, [instance, accounts, dispatch]);
};

export const useAcquireClientAccessToken = () => {
    const { instance, accounts } = useMsal();
    const dispatch = useDispatch();

    useEffect(() => {

        if (!accounts || accounts.length === 0) {
            return;
        }

        const request = {
            scopes: clientScopes,
            account: accounts[0],
        };

        instance.acquireTokenSilent(request)
            .then((response) => {
                if (response && response.accessToken) {
                    dispatch(setClientAccessToken(response.accessToken));
                }
            })
            .catch(async (error) => {
                if (error instanceof InteractionRequiredAuthError) {
                    await instance.acquireTokenRedirect(request);
                } else {
                    console.error("Error acquiring access token:", error);
                }
            });

    }, [instance, accounts, dispatch]);
};
