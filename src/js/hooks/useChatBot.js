import {useEffect} from "react";

export const useChatBot = () => {

    useEffect(() => {

        if (document.getElementById('crisp')) {
            return
        }
        if (typeof window.$crisp === "undefined") {
            window.$crisp = [];
        }

        window.CRISP_WEBSITE_ID = "b2521efd-200d-46c7-8438-f8c3669f2208";

        let d = document;
        const footer =d.getElementsByTagName("footer")[0];
        if(footer){
            let script = d.createElement("script");
            script.src = "https://client.crisp.chat/l.js";
            script.async = true;
            script.id = 'crisp'
            footer.appendChild(script);
        }

        return ()=>{
            document?.getElementById('crisp')?.remove();
        }
    }, [])

}