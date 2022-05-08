import { useEffect, useState } from "react";

const useInventory = () => {
    const [inventories, setInventories] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/inventory`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])

    return [inventories, setInventories]

}

export default useInventory;