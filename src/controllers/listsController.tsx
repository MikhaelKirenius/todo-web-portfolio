import { useMutation } from "react-query";
import { addList } from "../services/Lists";


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