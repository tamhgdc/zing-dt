import React, { memo } from "react"

const PlayListSelector = ({
   notRow,
   classAdd2,
   isTitleSub,
   classAdd,
   childrenOption,
   title,
   all = false,
   allLink,
   children,
   isHistory = false,
   isMyPage,
}) => {
   let class1
   let class2
   if (isHistory) {
      class1 = "container_recently"
      class2 = "recently_list"
   } else {
      class1 = "container_want"
      class2 = "want_list"
   }
   return (
      <div className={` ${class1} ${classAdd}`}>
         <div className="recently_title">
            <div>{isTitleSub ? isTitleSub : <p>{title}</p>}</div>
            {all && (
               <div className="playlist_selector-all">
                  <span>Tất Cả</span>
                  <span className="material-icons-outlined"> chevron_right </span>
               </div>
            )}
            {isMyPage}
         </div>
         {childrenOption}
         <div className={`${class2} ${classAdd2} ${notRow ? "" : "row"}`}>{children}</div>
      </div>
   )
}

export default memo(PlayListSelector)
