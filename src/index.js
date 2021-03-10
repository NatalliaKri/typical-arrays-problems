
exports.min = function min (a) 
{
    if (a === undefined || a.length === 0) return 0;
    let minimum = a[0];
    for (let i = 1; i < a.length; i++)
    {
        if (minimum > a[i]) minimum = a[i];
        if (typeof a[i] !== "number") return 0;
    }
     return minimum;
}

exports.max = function max (a) 
{
    if (a === undefined || a.length === 0) return 0;
    let maximum = a[0];
    for (let i = 1; i < a.length; i++)
    {
        if (maximum < a[i]) maximum = a[i];
        if (typeof a[i] !== "number") return 0;
    }
    return maximum;
}

exports.avg = function avg (a) 
{
    if (a === undefined || a.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < a.length; i++)
    { 
        sum += a[i];
    }
    if (typeof sum !== "number") return 0;
    else return sum / a.length;
}
