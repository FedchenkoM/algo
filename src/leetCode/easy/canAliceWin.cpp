// https://leetcode.com/problems/find-if-digit-game-can-be-won/description/

class Solution {
public:
	bool canAliceWin(std::vector<int>& nums) {
		int dif = 0;
        
		for (int n : nums)
		{
			if (n < 10) dif += n;
			else dif -= n;
		}

		return dif != 0;
	}
};