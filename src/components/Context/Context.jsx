import React, { createContext, useContext, useMemo, useState } from "react";

const context = createContext();

export const useParams = () => {
  return useContext(context);
};

export const Context = () => {
  const [clickedOption, setClickedOption] = useState("home");

  const contextValue = useMemo(() => {
    return { clickedOption, setClickedOption };
  }, [clickedOption, setClickedOption]);

  return (
    <div>
      <context.Provider value={contextValue}></context.Provider>
    </div>
  );
};

export default Context;
