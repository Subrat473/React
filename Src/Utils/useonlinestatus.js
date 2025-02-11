import { useEffect, useState } from "react";

const useOnLineStatus = () => {
    const [onlinestatus, setOnLinestatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnLinestatus(false);
        });

        window.addEventListener("online", () => {
            setOnLinestatus(true);
        });
    }, []);

    // boolean value
    return onlinestatus;
};

export default useOnLineStatus;
