"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.prototype.forEach = function (callback) {
    // @ts-ignore
    return Object.keys(this).forEach((key) => callback(this[key], key));
};
Object.prototype.map = function (callback) {
    let obj = {};
    Object.keys(this).forEach((key) => {
        // @ts-ignore
        obj[key] = callback(this[key], key);
    });
    return obj;
};
Object.prototype.equals = function (other) {
    return JSON.stringify(this) === JSON.stringify(other);
};
// @ts-ignore
Object.equals = (x, y) => x.equals(y);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL09iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFVBQVUsUUFBUTtJQUM1QyxhQUFhO0lBQ2IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLFVBQVUsUUFBUTtJQUN4QyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFFYixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ2pDLGFBQWE7UUFDYixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sR0FBRyxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxLQUFVO0lBQzdDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZELENBQUMsQ0FBQztBQUVGLGFBQWE7QUFDYixNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBTSxFQUFFLENBQU0sRUFBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyJ9