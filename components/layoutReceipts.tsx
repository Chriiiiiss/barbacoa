import type { NextPage } from "next";

interface Props {
    article: Boolean;
}

const LayoutReceipts: NextPage<Props> = ({children}, props) => {
    return(
        <div className={"layoutReceipts"}>
            {children}
        </div>
    )
}

export default LayoutReceipts;