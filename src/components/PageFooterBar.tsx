import React from "react";
import { Link } from "react-router-dom";

type PageFooterBarProps = {
  backLabel?: string;
  backTo?: string;
};

const PageFooterBar: React.FC<PageFooterBarProps> = ({
  backLabel = "Back to home",
  backTo = "/",
}) => {
  return (
    <div className="page-footer-bar">
      <Link to={backTo} className="btn ghost">
        {backLabel}
      </Link>
    </div>
  );
};

export default PageFooterBar;
