"use client";

import AppContexts from "@/context/AppContexts";
import friends from "@/data/friends.json";

const AppProviders = ({ children }) => {
    const values = {
        friends,
    };

    return (
        <AppContexts.Provider value={values}>
            {children}
        </AppContexts.Provider>
    );
};

export default AppProviders;