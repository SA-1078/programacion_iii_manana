import { useId } from "react";

export default function useIdHook() {
    const id = useId();
    const id2 = useId();
    console.log(id);
    console.log(id2);
    return <div id={id}>Elemento único
        <div id={id2}>Elemento 2
        </div>
    </div>
}
