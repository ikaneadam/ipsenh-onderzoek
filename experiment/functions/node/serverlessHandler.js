const event = process.env.PAYLOAD;
export default function serverlessHandler(event){
    const heavyTask = fibonacci(35)
    console.log("hello world")
}

function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

serverlessHandler(event)

// import process from 'process';
//
// process.stdin.resume();
