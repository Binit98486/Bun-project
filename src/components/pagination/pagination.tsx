//import React, { Component, Fragment } from 'react';
import * as React from 'react';
import ReactPaginate from 'react-paginate';

interface IPaginationProps {
    totalRecords: number,
    pageLimit: number,
    pageNeighbours: number,
    onPageChanged: any,
    initialPage?: number,
    forcePage?: number
};
class Pagination extends React.Component<IPaginationProps, any> {

    constructor(props: IPaginationProps) {
        super(props);
    }
    componentDidMount() {

    }

    render() {

        return (
            <>

                <ReactPaginate
                    forcePage={this.props.forcePage == null ? undefined : this.props.forcePage - 1}
                    initialPage={this.props.initialPage}
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    containerClassName={'flex flex-row justify-center items-center gap-4'}
                    activeClassName={'bg-blue-400 w-8 h-8 flex justify-center items-center text-white font-semibold rounded-full'}
                    breakClassName=""
                    breakLabel={<a className="page-link">...</a>}
                    pageClassName="flex justify-center items-center border border-2 rounded-lg w-8 h-8 hover:border-blue-500 "
                    previousClassName="flex border border-2 border-gray-400 w-8 h-8 justify-center items-center rounded-lg p-1 m-1"
                    nextClassName="flex border border-2 border-gray-400 w-8 h-8 justify-center items-center rounded-lg p-1 m-1"
                    pageLinkClassName=""
                    previousLinkClassName=""
                    nextLinkClassName=""
                    onPageChange={(data: any) => {
                        let selected = data.selected;
                        let offset = parseInt(selected + 1);
                        this.props.onPageChanged({ currentPage: offset, pageLimit: this.props.pageLimit })
                    }}
                    pageRangeDisplayed={5}
                    pageCount={this.props.totalRecords / this.props.pageLimit}
                    renderOnZeroPageCount={null}
                />
            </>
        );

    }
}



export default Pagination;