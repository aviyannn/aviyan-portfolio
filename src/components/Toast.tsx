import React, { useEffect, useState } from "react";
import { onToast } from "../toast";

const Toast: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const off = onToast((m) => {
      setMessage(m);
      clearTimeout(timer);
      timer = setTimeout(() => setMessage(null), 1800);
    });
    return () => {
      off();
      clearTimeout(timer);
    };
  }, []);

  return message ? (
    <div className="toast" role="status">
      {message}
    </div>
  ) : null;
};

export default Toast;
