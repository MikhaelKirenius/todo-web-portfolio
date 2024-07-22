import { useMutation } from "react-query";
import { addList,
    deleteList
 } from "../services/Lists";


export const useAddList = () => {
    return useMutation(addList,{
        onSuccess: () => {
            window.location.reload();
        },
        onError: () => {
            alert('Error adding list');
        }
    });
}

export const useDeleteList = () => {
    return useMutation(deleteList,{
        onSuccess: () => {
            window.location.reload();
        },
        onError: () => {
            alert('Error deleting list');
        }
    });
}
