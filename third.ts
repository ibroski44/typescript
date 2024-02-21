let x: unknown = "hello";

console.log((x as string).length);
//casting with <>
let x: unknown = "hello";

console.log((<string>x).length);
//force casting
let x = "hello";

console.log((x as unknown as number).length);

let x = "welcome";

console.log((x as unknown as string).length);

///////
//classes
class Person {
  name: string;
}

const person = new Person();
person.name = "Jane";

console.log(person);
//members visibility
class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");

console.log(person.getName());
//Readonly
class Person {
  private readonly name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");

console.log(person.getName());

//inheriance: implements
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

const myRect = new Rectangle(10, 20);

console.log(myRect.getArea());
///Inheritance: Extends
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }
}

const mySq = new Square(20);

console.log(mySq.getArea());
//override
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}

const mySq = new Square(20);

console.log(mySq.toString());
//Abstract classes
abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle extends Polygon {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

const myRect = new Rectangle(10, 20);

console.log(myRect.getArea());
