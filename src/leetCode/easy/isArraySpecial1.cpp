// https://leetcode.com/problems/special-array-i/description/

class Solution {
public:
	bool isArraySpecial(std::vector<int>& nums) 
	{
		for (size_t i = 0; i < nums.size() - 1; i++)
		{
			if (nums[i] % 2 == nums[i + 1] % 2)return false;
		}

		return true;
	}
};