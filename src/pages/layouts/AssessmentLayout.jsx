import {Outlet} from "react-router-dom";

export default function AssessmentLayout() {
  return (
    <div className="assessment_layout" id="assessment_layout">
      <article className="contents" id="contents">
        <Outlet />
      </article>
    </div>
  );
}
