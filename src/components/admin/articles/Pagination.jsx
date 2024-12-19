const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const pages = [];
    let startPage, endPage;

    if (totalPages <= 3) {
        // If total pages are less than or equal to 3, show all
        startPage = 1;
        endPage = totalPages;
    } else {
        if (currentPage <= 2) {
            startPage = 1;
            endPage = 3;
        } else if (currentPage + 1 >= totalPages) {
            startPage = totalPages - 2;
            endPage = totalPages;
        } else {
            startPage = currentPage - 1;
            endPage = currentPage + 1;
        }
    }


    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center" style={{fontSize: '1.5rem'}}>
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className="page-link btn-lg bg-primary text-white" onClick={handlePrev}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                </li>
                {[...Array(endPage - startPage + 1)].map((_, index) => (
                    <li key={index} className={`page-item ${currentPage === startPage + index ? 'active' : ''}`}>
                        <button className="page-link btn-outline-light bg-transparent text-black-50"
                                onClick={() => onPageChange(startPage + index)}>
                            {startPage + index}
                        </button>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button className="page-link btn-lg bg-primary text-white" onClick={handleNext}>
                        <i className="fas fa-chevron-right"></i>
                    </button>

                </li>
            </ul>
        </nav>
    );
};
export default Pagination;
