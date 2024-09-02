import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import { InteractionRequiredAuthError } from "@azure/msal-browser";

export const useAccessToken = (scopes: string[]) => {
    const { instance, accounts } = useMsal();
    const [accessToken, setAccessToken] = useState<string>("");

    useEffect(() => {
        if (!accounts || accounts.length === 0) {
            return;
        }

        const request = {
            scopes: scopes,
            account: accounts[0]
        };

        instance.acquireTokenSilent(request).then(response => {
            setAccessToken(response.accessToken);
        }).catch(error => {
            if (error instanceof InteractionRequiredAuthError) {
                (async () => {
                    await instance.acquireTokenRedirect(request);
                })();
            } else {
                console.error("Error acquiring access token:", error);
            }
        });
    }, [instance, accounts, scopes]);

    return accessToken;
};
