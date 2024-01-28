import { useEffect, useState } from 'react';
import { get, post, patch } from 'utils/axiosRequests';
import { globalAction, dispatch } from 'store';
import { useSelector } from 'react-redux';
// ==============================|| CONFIG - LOCAL STORAGE ||============================== //

export default function useListing(url) {
    const { total, currentPage, recordPerPage, searchStr, listingData, order, orderBy, currentData } = useSelector(
        (state) => state.listing
    );

    const getListing = async () => {
        const params = { page: currentPage, order, orderBy };
        if (searchStr) params.search = searchStr;

        console.log(params);
        await get(url, params)
            .then((response) => {
                dispatch(
                    globalAction('SET_LISTING', {
                        listingData: response.data.data,
                        // total: response.data?.total,
                        currentPage
                    })
                );
            })
            .catch((err) => console.log(err));
    };

    useEffect(async () => {
        await getListing();

        return () => {
            console.log('UnMount');
        };
    }, [currentPage, searchStr, order, orderBy, url]);

    const setpage = (event, page) => {
        dispatch(globalAction('SET_CURRENT_PAGE', { currentPage: page + 1 }));
    };

    const setSearchStr = (str) => {
        dispatch(globalAction('SET_SEARCH_STR', { searchStr: str }));
    };

    const updateStatus = async (id, status) => {
        if (window.confirm(`Are you sure to ${status}`)) {
            patch(`${url}/${id}`, {
                status
            }).then((res) => {
                if (res.data.status === 'success') {
                    getListing();
                    // const dataIndex = listingData.findIndex((data) => data.id === id);

                    // listingData[dataIndex].status = status;
                    // const tempListingData = [...listingData];
                    // console.log(tempListingData);
                    // dispatch(globalAction('UPDATE_LISTING', { listingData: tempListingData }));
                }
            });
        }
    };

    const changeStatus = (event, id) => {
        console.log(id);
        const status = event.target.checked ? 'Active' : 'Inactive';
        updateStatus(id, status);
    };

    const deleteRow = (e, id) => {
        updateStatus(id, 'Deleted');
    };

    const setCurrentData = (currentData) => {
        dispatch(globalAction('SET_CURRENT_DATA', { currentData }));
    };

    const changeOrder = (columnName) => {
        dispatch(globalAction('CHANGE_ORDER', { orderBy: columnName }));
    };

    const resetListing = () => {
        dispatch(globalAction('RESET_LISTING'));
    };

    return {
        total,
        currentPage,
        listingData,
        searchStr,
        recordPerPage,
        order,
        orderBy,
        setpage,
        setSearchStr,
        changeStatus,
        deleteRow,
        setCurrentData,
        changeOrder,
        resetListing
    };
}
