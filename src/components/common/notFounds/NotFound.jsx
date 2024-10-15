import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useEffect, useRef} from "react";
import {NOT_FOUND_MSG} from "@/constants/errorText.js";

// 페이지를 요청하는 경우(404) 초기 화면으로 이동시킴
const NotFound = () => {
  const toastId = useRef(null); // 중복 토스트 방지를 위한 ref
  const navigate = useNavigate(); // useNavigate 훅 사용

  const toPreviousPage = () => {
    // 중복 토스트 방지
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.warn(NOT_FOUND_MSG);
    }
    navigate(-1);
  };

  useEffect(() => toPreviousPage(), []);

  return null;
};

export default NotFound;
