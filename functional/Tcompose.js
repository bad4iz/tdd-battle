export const Tcompose = (num, ...fns) => {
    return fns.reduce((n, fn)=> {
        return fn(n)
    },num)
}