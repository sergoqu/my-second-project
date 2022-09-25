import { useState } from "react";
import { useTranslation } from "react-i18next";

const Counter: React.FC = () => {
  const [state, setState] = useState(0);
  const increment = () => {
    setState((prev) => prev + 1);
  };
  const { t } = useTranslation("main");
  return (
    <div>
      <span>
        {t("Некоторый текст")}
        {state}
      </span>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
