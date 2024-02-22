//Numeric Enums - Default
enum CardinalDirections {
    North,
    East,
    South,
    West
  };
              
  let currentDirection = CardinalDirections.East;
  console.log(currentDirection);
//Numeric Enums - Initialized
enum CardinalDirections {
    North = 1,
    East,
    South,
    West
  }
  console.log(CardinalDirections.North);
  console.log(CardinalDirections.West);
  //Numeric Enums - Fully Initialized
  enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  console.log(StatusCodes.NotFound);
  console.log(StatusCodes.Success);

  //String Enums
  enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };
  console.log(CardinalDirections.North);
  console.log(CardinalDirections.West);
//type
//null and undefined are primitive types and can be used like other types, such as string.
let value: string | undefined | null = null;
console.log(typeof value);

value = "hello";
console.log(typeof value);

value = undefined;
console.log(typeof value);

//optional chaining
interface House {
  sqft: number;
  yard?: {
    sqft: number,
  };
}

function printYardSize(house: House) {
  const yardSize = house.yard?.sqft;

  if (yardSize === undefined) {
    console.log("No yard");
  } else {
    console.log(`Yard is ${yardSize} sqft`);
  }
}

let home: House = {
  sqft: 500,
};

printYardSize(home);
//null Assertion
function getValue(): string | undefined {
    return 'hello';
  }
              
  let value = getValue();
  console.log('value length: ' + value!.length);

  //Array bounds handling
  let array: number[] = [1, 2, 3];

let value = array[0];