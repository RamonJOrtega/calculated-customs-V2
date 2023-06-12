class Solution:
    def isValid(self, s: str) -> bool:
        countDictionary = {
            '(': 0,
            ')': 0,
            '{': 0,
            '}': 0,
            '{': 0,
            ']': 0,

        }
        round1 = '('
        round2 = ')'
        squig1 = '{'
        squig2 = '}'
        squar1 = '['
        squar2 = ']'
        countRound1 = 0
        countRound2 = 0
        countSquig1 = 0
        countSquig2 = 0
        countSquar1 = 0
        countSqur = 0



        for ch in s :

            countDictionary[ch]++

        if (countRound1 != countRound2) || (countSquig1 != countSquig2) || (countSquarcounSqaur2) :
            return false