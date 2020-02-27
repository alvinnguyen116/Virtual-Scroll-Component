#Virtual Scroll Component 
A React wrapper component for simulating a virtual scroll.
 
 This is meant to be a lightweight component to be used in personal projects or small applications. If your use case requires more flexibility, 
I suggest taking a look at [React Virtualized Scroll](https://github.com/bvaughn/react-virtualized/tree/master/docs#documentation).

## Installation 
Install through [npm](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/en/docs/getting-started).
```shell script
npm install virtual-scroll-component 
```
```shell script
yarn add virtual-scroll-component
```

## Usage 
```js
import VirtualScroll from 'virtual-scroll-component';
```

## Props

### rows
Use **rows** to pass an array of component instances to be placed in a virtualized scroll
container. This can also be done with **props.children**, but do
note that any arguments passed to **props.children** will take precedence over 
**rows**. 

```js
<VirtualScroll rows={[<div/>, <div/>]}/>
```

```js
<VirtualScroll rows={[<span/>]}>
    <div/> // div will be used, and not span
</VirtualScroll>
```

### rowHeight 
Use **rowHeight** to set the height of every row passed in either through 
**rows** or **props.children**. Accepts an integer and is interpreted in CSS pixels. 

```js
<VirtualScroll rowHeight={100}/> 
```

### onLastRow 
Use **onLastRow** to set a function to be called every time the last row is in view. 
You can pass a function which increases the number of component instances, thereby creating an infinite scroll. 

```js
const [rows, setRows] = useState([<Child/>]);
const handleLastRow = () => {
    setRows([...rows, <Child/>])
}

return (<VirtualScroll rows={rows} onLastRow={handleLastRow}/>);
```

### className 
Use **className** to add a CSS class onto the Virtual Scroll Component.

```js
<VirtualScroll className={"custom-class-name"}/>
```

### props.children 
Use **props.children** to pass a list of component instances to be placed in a virtualized scroll
container. This can also be done with **rows**, but do
note that any arguments passed to **props.children** will take precedence over **rows**. 

```js
<VirtualScroll>
    <div/>
    <div/>
</VirtualScroll>
```