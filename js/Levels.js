var levelOne = [    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1,
                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0, 0, 0, 5,
                    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0, 0, 0, 5,
                    3, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0, 3, 1, 1,
                    1, 0, 0, 0, 1, 1, 1, 1, 1, 3, 4, 4, 4, 4, 1, 0, 0, 1, 4, 4,
                    1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 4, 4, 4, 1, 0, 0, 1, 4, 4,
                    1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 4, 4, 1, 0, 0, 1, 4, 4,
                    1, 0, 0, 3, 1, 1, 1, 0, 0, 0, 0, 1, 4, 4, 1, 0, 0, 1, 4, 4,
                    1, 0, 0, 1, 4, 4, 1, 0, 0, 0, 0, 1, 4, 4, 1, 0, 0, 1, 4, 4,
                    1, 0, 0, 1, 4, 4, 1, 0, 0, 0, 0, 1, 4, 4, 1, 0, 0, 1, 4, 4,
                    1, 0, 0, 1, 4, 4, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 4, 4,
                    1, 2, 2, 1, 4, 4, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 4,
                    1, 1, 1, 1, 4, 4, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 4,
                    4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 4,
                    4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4];

var levelTwo = [    4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4,
                    4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
                    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
                    1, 0, 0, 0, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 1,
                    1, 0, 0, 1, 1, 0, 0, 1, 1, 4, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1,
                    1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
                    1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 0, 0, 1, 0, 0, 1,
                    1, 0, 0, 1, 0, 0, 3, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                    1, 0, 0, 6, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                    1, 2, 2, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 0, 1,
                    1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
                    5, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
                    5, 0, 0, 0, 0, 0, 1, 4, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
                    1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 4];

var levelThree = [  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1,
                    1, 5, 5, 1, 0, 0, 1, 0, 0, 1, 4, 1, 1, 1, 1, 1, 1, 0, 0, 1,
                    1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 4, 1, 0, 1, 1, 1, 1, 0, 0, 1,
                    1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 1,
                    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1,
                    1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1, 1, 0, 0, 1, 4, 4, 1,
                    1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 2, 2, 1, 4, 4, 4,
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4];


var allLevels = [levelOne, levelTwo, levelThree];