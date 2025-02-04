<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
</head>
<body>
    <div id="root"> </div>
    <script src="a.js"></script>
</body>
</html>

a.js
const b=React.createElement(
    'h1',{id:'a'}, "I am manohar"
);

const element=document.getElementById('root')
const root=ReactDOM.createRoot(element)
root.render(b)

