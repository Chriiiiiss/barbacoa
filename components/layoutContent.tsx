import type { NextPage } from "next";

interface Props {
    article: Boolean;
}

const LayoutContent: NextPage<Props> = ({children}, props) => {
    return(
        <div className={props.article == false ? "layoutContent" : "layoutContentArticle"}>
            {children}
        </div>
    )
}

export default LayoutContent;