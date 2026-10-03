import React from "react";
import { profile } from "../data";

const Footer: React.FC = () => (
  <footer className="site-footer">
    <span>{profile.name}</span>
    <span>{new Date().getFullYear()}</span>
  </footer>
);

export default Footer;
