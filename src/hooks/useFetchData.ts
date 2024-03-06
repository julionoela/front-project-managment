import { FC, useState, useEffect } from "react";

import { FetchDataProps } from "../types/types";

export const useFetchData = ({url} : FetchDataProps) => {
    const [data, setData] = useState<Array<any>>([]);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.log(`error : ${error}`))
    }, [url]);

    return { data }
}