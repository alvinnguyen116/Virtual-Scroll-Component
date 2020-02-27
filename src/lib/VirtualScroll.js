import React, {useEffect} from 'react';
import {useInView} from "react-intersection-observer";
import './VirtualScroll.scss';
import VirtualScrollChild from "./VirtualScrollChild";

/**
 * A wrapper component for implementing virtual scroll
 * and infinite scroll. Each row is displayed with a static
 * height container. When the last child is in view, a "last
 * row" handler gets called.
 */
export default function(props) {
    const {rows, rowHeight, onLastRow, className} = props;
    const [lastRowRef, lastRowInView] = useInView();

    // if last row is in view, call the last row handler
    useEffect(() => {
        if (lastRowInView) onLastRow();
    }, [lastRowInView]);

    let localRows = [];
    // accepts a list of component instances through either props.children or props.rows
    // props.children takes priority over props.rows
    if (props.children && props.children.length) {
        localRows = props.children;
    } else if (rows && rows.length) {
        localRows = rows;
    }


    const renderRows = () => {
        return localRows.map((child,i) => {
            if (i === localRows.length - 1) {
                return (
                    <div ref={lastRowRef} key={i}>
                        <VirtualScrollChild height={rowHeight}>
                            {child}
                        </VirtualScrollChild>
                    </div>
                );
            }
            return (
              <VirtualScrollChild key={i} height={rowHeight}>
                  {child}
              </VirtualScrollChild>
            );
        });
    };

    return (
        <div className={className ? `virtual-scroll-container ${className}` : "virtual-scroll-container"}>
            {renderRows()}
        </div>
    );
}