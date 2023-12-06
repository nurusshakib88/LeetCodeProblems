var nums = [2,3,4,5,8]
var target = 9

function twoSum(nums,target) { 
    for(i=0; i<nums.length; i++){ 
        for(j=i+1; j<nums.length;j++){
            if(nums[i] + nums[j] === target) {
                return([i,j])                
            }
        }
    }    
}
twoSum(nums,target)