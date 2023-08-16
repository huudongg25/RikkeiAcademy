class CustomMap<T, U> {
    private map: Map<T, U>;
  
    constructor() {
      this.map = new Map<T, U>();
    }
  
    set(key: T, value: U): void {
      this.map.set(key, value);
    }
  
    get(key: T): U | undefined {
      return this.map.get(key);
    }
}

const map = new CustomMap<string,number>()

map.set("a",2)
console.log(map.get("a"));
