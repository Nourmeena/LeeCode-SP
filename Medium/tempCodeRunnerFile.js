    let prevProduct = 1;
    let forProduct = 1;
    let previous = [];
    let ans = [];

    for (let i = 0; i <= nums.length-1; i++){
        previous[i] = prevProduct
        prevProduct *= nums[i];

    }

    for (let i = nums.length - 1; i >= 0; i--){
        ans[i] = previous[i] * forProduct;
        forProduct *= nums[i];

    }

    return ans;