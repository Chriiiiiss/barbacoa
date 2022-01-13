import type { NextPage } from "next";
import BbqCards from "./bbqCards";

const LayoutContent: NextPage = () => {
    return(
        <div className="layoutContent">
            <BbqCards/>
            <BbqCards/>
        </div>
    )
}

export default LayoutContent;