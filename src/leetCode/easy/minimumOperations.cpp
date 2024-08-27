// https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/description/

class Solution {
public:
	int minimumOperations(std::vector<int>& nums) {
		int result = 0;

        for (int n : nums) if (n % 3 != 0) result++;

		return result;
	}
};