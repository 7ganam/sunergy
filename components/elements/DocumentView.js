import React from "react";

const DocumentView = ({ publication, isPdf = true }) => {
  // const image = "/pdfs/3.png";
  // const pdfUrl = "./pdfs/cleantech-whitepaper-ei-mena-en-109140.pdf";
  // const pdfName = "Cleantech in the Middle East Cleantech in the Middle East";

  const image = publication.image;
  const pdfUrl = publication.url;
  const pdfName = publication.name;

  const onButtonClick = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col" title={pdfName}>
      <div className="p-3 md rounded-md bg-white shadow-2xl flex justify-center items-center">
        <div className=" overflow-hidden bg-white rounded-lg h-[300px] w-[200px] object-contain flex items-center">
          <img src={image} className="object-contain" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-3">
        <h1 className="text-sm w-[200px] h-[20px] overflow-ellipsis truncate">
          {pdfName}
        </h1>
        <div className="flex gap-3">
          {isPdf && (
            <a>
              <button
                onClick={onButtonClick}
                className="font-bold py-2 px-4 mt-3 text-white  bg-cyan-500 hover:bg-cyan-700 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </a>
          )}
          <a href={pdfUrl} without rel="noopener noreferrer" target="_blank">
            <button className="font-bold py-2 px-4 mt-3 text-white  bg-cyan-500 hover:bg-cyan-700 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DocumentView;
