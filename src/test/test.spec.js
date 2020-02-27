import React from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';
import VirtualScrollChild from "../lib/VirtualScrollChild";
import VirtualScroll from "../lib/VirtualScroll";
import './mocks/intersection-observer';

describe("Virtual Scroll Child", () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });

   it("should have a fixed height", () => {
       act(() => {
           ReactDOM.render(<VirtualScrollChild height={100}/>, container);
       });
       const component = container.querySelector(".virtual-scroll-child");
       expect(component.style.height).toEqual('100px')
   });
});

describe("Virtual Scroll", () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });

    it("should NOT have children if not given any", () => {
        act(() => {
            ReactDOM.render(<VirtualScroll rowHeight={100}/>, container);
        });
        const component = container.querySelector(".virtual-scroll-container");
        expect(component.children.length).toBeFalsy();
    });

    it("should be able to pass children through props.children", () => {
        act(() => {
            ReactDOM.render(
                <VirtualScroll rowHeight={100}>
                    <div/>
                    <div/>
                </VirtualScroll>
                ,container
            );
        });
        const component = container.querySelector(".virtual-scroll-container");
        expect(component.children.length).toBe(2);
    });

    it("should be able to pass children through props.rows", () => {
        act(() => {
            ReactDOM.render(
                <VirtualScroll rowHeight={100} rows={[<div/>, <div/>]}/>
                ,container
            );
        });
        const component = container.querySelector(".virtual-scroll-container");
        expect(component.children.length).toBe(2);
    });

    it("should be able to pass className", () => {
        act(() => {
            ReactDOM.render(
                <VirtualScroll rowHeight={100} className={"testing-for-class-name"}/>
                ,container
            );
        });
        const component = container.querySelector(".testing-for-class-name");
        expect(component).toBeTruthy();
    });
});