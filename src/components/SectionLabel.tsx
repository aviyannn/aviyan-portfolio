import React from "react";
import Icon from "./Icon";

type Props = { icon: string; children: React.ReactNode };

const SectionLabel: React.FC<Props> = ({ icon, children }) => (
  <h2 className="section-label">
    <Icon name={icon} size={13} />
    {children}
  </h2>
);

export default SectionLabel;
