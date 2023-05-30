import React from "react";

const Preloader = () => {
  return (
    <>
      <div id="preloader-active">
        <div className="preloader flex-1 content-center">
          <div className="logo absolute inset-y-2/4 jump">
            <img src="/assets/imgs/logos/favicon.svg" alt="Sunergy" />
            <h1 className="text-lg font-semibold">sunergy</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
