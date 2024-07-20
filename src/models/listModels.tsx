import { getAllLists } from "../services/Lists";
import { useQuery } from "react-query";

const useListsModel = () => {
    const lists = useQuery({
        queryKey: ["lists"],
        queryFn: () => getAllLists(),
    })
    return lists;
};

export default useListsModel;