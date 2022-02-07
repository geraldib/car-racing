var levelOne = [    04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 01, 01, 01, 01, 01, 01,
                    04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 01, 00, 00, 00, 00, 05,
                    04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 04, 01, 00, 00, 00, 00, 05,
                    03, 01, 01, 01, 01, 04, 04, 04, 04, 04, 04, 04, 04, 04, 01, 00, 00, 03, 01, 01,
                    01, 00, 00, 00, 01, 01, 01, 01, 01, 03, 04, 04, 04, 04, 01, 00, 00, 01, 04, 04,
                    01, 00, 00, 00, 00, 00, 00, 00, 00, 01, 04, 04, 04, 04, 01, 00, 00, 01, 04, 04,
                    01, 00, 00, 00, 00, 00, 00, 00, 00, 01, 01, 01, 04, 04, 01, 00, 00, 01, 04, 04,
                    01, 00, 00, 03, 01, 01, 01, 00, 00, 00, 00, 01, 04, 04, 01, 00, 00, 01, 04, 04,
                    01, 05, 00, 06, 06, 01, 01, 00, 00, 00, 00, 01, 04, 04, 01, 00, 00, 01, 04, 04,
                    01, 00, 00, 01, 06, 06, 06, 00, 00, 00, 00, 01, 04, 04, 01, 00, 00, 01, 04, 04,
                    01, 00, 00, 01, 01, 01, 01, 00, 00, 00, 00, 01, 01, 01, 01, 00, 00, 01, 04, 04,
                    01, 02, 02, 01, 04, 04, 01, 01, 03, 00, 00, 00, 00, 00, 00, 00, 00, 01, 04, 04,
                    01, 01, 01, 01, 04, 04, 01, 01, 01, 00, 00, 00, 00, 00, 00, 00, 00, 01, 04, 04,
                    04, 04, 04, 04, 04, 04, 04, 04, 01, 00, 00, 00, 00, 00, 00, 00, 00, 01, 04, 04,
                    04, 04, 04, 04, 04, 04, 04, 04, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 04, 04];

var levelTwo = [    07, 07, 08, 08, 08, 08, 08, 08, 08, 08, 08, 08, 08, 08, 08, 08, 08, 08, 08, 07,
                    07, 08, 08, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 08, 08,
                    08, 08, 11, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 08,
                    08, 11, 11, 00, 00, 08, 08, 08, 08, 08, 08, 08, 08, 08, 08, 08, 11, 00, 00, 08,
                    08, 00, 00, 00, 08, 08, 08, 08, 07, 07, 07, 08, 08, 08, 08, 08, 08, 00, 00, 08,
                    08, 00, 00, 08, 08, 11, 11, 08, 08, 07, 08, 08, 00, 00, 00, 00, 08, 00, 11, 08,
                    08, 05, 00, 08, 00, 00, 11, 11, 08, 08, 08, 11, 00, 00, 00, 00, 08, 00, 11, 08,
                    08, 00, 00, 08, 00, 00, 11, 11, 11, 08, 08, 11, 00, 08, 00, 00, 08, 00, 11, 08,
                    08, 00, 00, 08, 00, 00, 08, 11, 11, 11, 08, 11, 00, 08, 00, 00, 08, 00, 00, 08,
                    08, 00, 00, 08, 00, 00, 08, 08, 00, 00, 08, 00, 00, 08, 00, 00, 08, 00, 00, 08,
                    08, 02, 02, 08, 00, 00, 08, 08, 00, 00, 00, 00, 00, 08, 00, 00, 08, 00, 00, 08,
                    08, 08, 08, 08, 00, 00, 08, 08, 00, 00, 00, 00, 00, 08, 00, 00, 00, 00, 08, 08,
                    05, 00, 00, 00, 00, 00, 08, 08, 08, 00, 00, 00, 08, 08, 11, 11, 11, 11, 11, 08,
                    05, 00, 00, 00, 00, 00, 08, 07, 08, 08, 08, 08, 08, 08, 08, 11, 11, 11, 08, 08,
                    08, 08, 08, 08, 08, 08, 08, 07, 07, 07, 07, 07, 07, 07, 08, 08, 08, 08, 08, 07];

var levelThree = [  12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
                    12, 00, 00, 00, 00, 00, 12, 00, 00, 00, 00, 12, 00, 00, 00, 00, 00, 00, 00, 12,
                    12, 00, 00, 00, 00, 00, 12, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 12,
                    12, 00, 00, 12, 00, 12, 12, 00, 00, 12, 12, 12, 12, 12, 00, 00, 00, 00, 00, 12,
                    12, 05, 05, 12, 00, 00, 12, 00, 00, 12, 04, 12, 12, 12, 12, 12, 12, 00, 00, 12,
                    12, 00, 00, 12, 00, 00, 12, 00, 12, 12, 04, 12, 00, 00, 00, 00, 00, 00, 00, 12,
                    12, 00, 00, 12, 12, 00, 12, 00, 00, 12, 04, 12, 00, 00, 00, 00, 00, 00, 00, 12,
                    09, 09, 00, 12, 12, 00, 00, 00, 00, 12, 04, 12, 00, 12, 12, 12, 12, 00, 00, 12,
                    09, 00, 00, 12, 12, 00, 00, 00, 12, 12, 12, 12, 00, 12, 00, 00, 00, 00, 00, 12,
                    12, 00, 12, 09, 12, 12, 12, 12, 12, 09, 12, 00, 00, 12, 00, 00, 00, 00, 00, 12,
                    12, 00, 09, 09, 12, 12, 00, 00, 00, 09, 00, 00, 00, 12, 00, 00, 00, 00, 00, 12,
                    12, 00, 09, 09, 00, 00, 00, 00, 00, 00, 00, 00, 00, 12, 00, 00, 12, 12, 12, 12,
                    12, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 12, 12, 00, 00, 12, 04, 04, 12,
                    12, 09, 09, 09, 09, 09, 09, 12, 00, 00, 00, 00, 12, 12, 02, 02, 12, 04, 04, 04,
                    12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 04, 04, 04];


var levelFour = [   12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
                    12, 05, 00, 00, 00, 00, 00, 00, 00, 09, 00, 00, 00, 00, 00, 00, 00, 00, 00, 12,
                    12, 05, 00, 00, 00, 09, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 12,
                    12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 00, 00, 12,
                    12, 00, 00, 00, 00, 00, 09, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 12,
                    12, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 09, 00, 00, 00, 00, 00, 00, 12,
                    12, 00, 00, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
                    12, 00, 00, 00, 00, 00, 09, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 12,
                    12, 00, 00, 00, 00, 00, 00, 00, 00, 00, 09, 00, 00, 00, 00, 00, 00, 00, 00, 12,
                    12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 00, 00, 00, 00, 00, 00, 12,
                    12, 00, 00, 00, 09, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 12, 12, 12, 12, 12,
                    12, 00, 00, 00, 00, 00, 00, 00, 00, 09, 00, 00, 00, 00, 00, 12, 00, 05, 00, 12,
                    12, 00, 00, 00, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 00, 00, 00, 12,
                    12, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 02, 02, 12,
                    12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12];


var levelFive = [   01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01,
                    01, 05, 00, 00, 00, 00, 00, 11, 00, 09, 00, 00, 00, 01, 11, 11, 00, 00, 00, 01,
                    01, 05, 00, 00, 00, 09, 00, 00, 00, 00, 00, 11, 01, 00, 00, 00, 00, 00, 00, 01,
                    01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 06, 01, 01, 01, 01, 01, 00, 00, 01,
                    01, 00, 00, 00, 00, 00, 11, 11, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 01,
                    01, 00, 00, 01, 11, 11, 00, 00, 04, 04, 00, 00, 09, 00, 00, 00, 00, 00, 00, 01,
                    01, 00, 00, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01,
                    01, 00, 00, 01, 11, 00, 09, 00, 00, 00, 00, 00, 11, 00, 00, 00, 06, 00, 11, 01,
                    01, 00, 00, 06, 00, 00, 06, 00, 11, 00, 09, 00, 00, 01, 01, 01, 01, 00, 11, 01,
                    01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 06, 00, 00, 00, 11, 01,
                    01, 11, 00, 00, 09, 00, 11, 11, 00, 00, 00, 00, 01, 00, 00, 01, 01, 01, 01, 01,
                    01, 11, 00, 00, 00, 00, 00, 00, 00, 09, 00, 00, 06, 00, 00, 01, 00, 00, 00, 01,
                    01, 11, 00, 01, 06, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 00, 00, 00, 01,
                    01, 04, 04, 01, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 02, 02, 01,
                    01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01, 01];


var allLevels = [levelOne, levelTwo, levelThree, levelFour, levelFive];