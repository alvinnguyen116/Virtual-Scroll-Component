import React from 'react';
import {useInView} from "react-intersection-observer";

/**
 * A wrapper component for children of
 * VirtualScroll. Computes inline style and
 * handles whether to display props.children.
 */
export default function (props) {
    const [ref, inView] = useInView();

    const style = {
        height: `${props.height}px`
    };

    return (
        <div className={"virtual-scroll-child"} style={style} ref={ref}>
            {inView ? props.children : null}
        </div>
    );
}