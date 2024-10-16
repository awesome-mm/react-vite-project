import {useEffect, useState} from "react";
import {USER_HEADER_ROUTES} from "@/constants/userRoutes";
import UserHeaderListItem from "./UserHeaderListItem.jsx";
import {useNavigate} from "react-router-dom";
import "./UserHeader.css";

export default function UserHeader() {
  const navigate = useNavigate();

  const [accordion, setAccordion] = useState([]); //accrdian boolean 배열
  useEffect(() => {
    const N = USER_HEADER_ROUTES.length; //gnb 갯수만큼 토글 배열설정
    const accodianArray = new Array(N).fill(false);
    setAccordion(accodianArray);
  }, []);

  // gnb 클릭 - (pc와 모바일 + 테블릿의 호버이벤트, 클릭이벤트를 다르게 함)
  const handleGnb = (e, item, index) => {
    e.preventDefault();
    // if (!isMobile && !isTablet) {
    //   navigate(item.touseNavigate);
    //   // pc
    // } else {
    //   // mobile
    //   handleNavAccodianToggle(index);
    // }
    navigate(item.href);
  };

  // 서브 메뉴 클릭
  const handleSub = (e, item) => {
    e.preventDefault();
    navigate(item.href);

    // 문의 접근 권한 확인
    // if (!userInfo.cNo && item.title === "1:1문의") return toast.warn(ROLE_MSG);
    // setIsMenuOpen(false);
  };
  return (
    <div className="user_header" id="user_header">
      <div className="header_wrapper">
        <ul className="menu_box">
          {USER_HEADER_ROUTES?.map((headerItem, idx) => (
            // gnb snb 네비게이션
            <UserHeaderListItem
              key={headerItem.title}
              headerItem={headerItem}
              idx={idx}
              // isMobile={isMobile}
              // isTablet={isTablet}
              accordion={accordion}
              handleSub={handleSub} //gnb 클릭
              handleGnb={handleGnb} //snb 클릭
            ></UserHeaderListItem>
          ))}
          {/* <li>ㅋㅋ</li> */}
        </ul>
        <div className="header_auth_box">
          <ul>
            <li>
              <a href="auth/login">로그인</a>
            </li>
            <li>
              <a href="auth/sign">회원가입</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
