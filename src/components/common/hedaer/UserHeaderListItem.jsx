import React from "react";

// gnb snb 랜더링
export default function UserHeaderListItem({
  headerItem = [],
  idx,
  isMobile = false,
  isTablet = false,
  accordion,
  handleSub = () => {},
  handleGnb = () => {},
}) {
  return (
    <li
      className={["depth1", isMobile || isTablet ? "event-click" : "event-hover"].join(" ")}
      key={headerItem?.href}
    >
      <h3>
        <a
          onClick={(e) => handleGnb(e, headerItem, idx)}
          href={headerItem?.href}
          title={headerItem.title}
        >
          {headerItem.title}
        </a>
      </h3>

      {/* snb 클릭 idx에 따라 모바일에서 아코디언 메뉴 오픈 */}
      <ul className={["sub_list", accordion[idx] ? "open" : "hide"].join(" ")}>
        {headerItem?.children?.map((item, i) => (
          <li key={i} className={"depth2"}>
            {/* BMC의 경우 클래스네임 추가 */}
            <h4 className={headerItem.title === "창업교육 툴킷" ? "nav_bmc" : ""}>
              <a
                href={item.href}
                title={headerItem.title === "창업교육 툴킷" ? "비즈니스 모델 캔버스" : item.title}
                onClick={(e) => handleSub(e, item)}
              >
                {item.title}
              </a>
            </h4>
          </li>
        ))}
      </ul>
    </li>
  );
}
