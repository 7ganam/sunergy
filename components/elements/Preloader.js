import React from "react";

const Preloader = () => {
  return (
    <>
      <div id="preloader-active">
        <div className="preloader flex-1 content-center">
          <div className="logo absolute  jump">
            <img
              className="h-[300px] w-[300px]"
              src="/assets/imgs/logos/favicon.svg"
              alt="Sunergy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
