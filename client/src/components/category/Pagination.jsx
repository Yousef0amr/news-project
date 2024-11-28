import * as React from 'react';
import Pagination from '@mui/material/Pagination'
export const PaginationComponent = () => {

    const [page, setPage] = React.useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <div className='mt-5 d-flex justify-content-center'>
            <Pagination count={10} page={page} onChange={handleChange} />
        </div>

    )
}
