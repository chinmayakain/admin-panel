import React from "react";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

    const nextPage = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1);
    };
    const prevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1);
    };

    function renderAllPageButtons(pageNumber) {
        return (
            <button
                className={`btn ${
                    currentPage == pageNumber ? "btn-active" : ""
                } bg-white border-none text-blue-600 hover:text-white hover:bg-blue-700 `}
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
            >
                {pageNumber}
            </button>
        );
    }

    function renderNextButton() {
        return (
            <button
                className="btn bg-white border-none text-blue-600 hover:text-white hover:bg-blue-700 "
                onClick={nextPage}
            >
                Next
            </button>
        );
    }

    function renderPreviousButton() {
        return (
            <button
                className="btn bg-white border-none text-blue-600 hover:text-white hover:bg-blue-700"
                onClick={prevPage}
            >
                previous
            </button>
        );
    }

    return (
        <div className="btn-group">
            {currentPage !== 1 ? renderPreviousButton() : <></>}
            {pageNumbers.map((pageNumber) => renderAllPageButtons(pageNumber))}
            {currentPage !== nPages ? renderNextButton() : <></>}
        </div>
    );
};

export default Pagination;
