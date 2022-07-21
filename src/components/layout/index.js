import React from "react";
import Header from "../header";
import * as S from "./styled";

const Layout = ({ children }) => {
  return (
    <S.WrapperLayout>
      <div>
        <Header />
        {children}
      </div>
      
    </S.WrapperLayout>
  );
};

export default Layout;
