function biggestOfFive(args) {
    var firstTripletBiggest = biggestOfThree(args.slice(0, 3)),
        secondTripletBiggest = biggestOfThree(args.slice(2));

    return Math.max(firstTripletBiggest, secondTripletBiggest);

    function biggestOfThree(args) {
        var a = args[0] * 1,
            b = args[1] * 1,
            c = args[2] * 1,
            greatest;

        if (a > b) {
            if (a > c) {
                greatest = a;
            } else {
                greatest = c;
            }
        } else {
            if (b > c) {
                greatest = b;
            } else {
                greatest = c;
            }
        }

        return greatest;
    }
}

