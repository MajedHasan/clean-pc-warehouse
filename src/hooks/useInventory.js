import { useEffect, useState } from "react";

const useInventory = () => {
    const [inventories, setInventories] = useState([])

    useEffect(() => {
        const url = `https://secure-stream-89996.herokuapp.com/inventory`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])

    return [inventories, setInventories]

}

export default useInventory;