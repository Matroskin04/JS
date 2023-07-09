const tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: {
                val: 4
            }
        },
        right: {
            val: 3
        }
    },
    right: {
        val: 2,
        left: {
            val: 3
        },
        right: {
            val: 3,
            right: {
                val: 4
            }
        }
    }
}

function sum(obj) {
    if (Object.keys(obj).length === 1) {
        return obj.val
    }
    let res = 0;
    let a = 0;
    for (let i in obj) {
        if (i === 'val') {
            a = obj[i];
        } else {
            res = sum(obj[i]) + a
        }
    }
    return res
}