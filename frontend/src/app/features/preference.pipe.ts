import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preference'
})
export class PreferencePipe implements PipeTransform {

  transform(value: unknown): unknown {
    switch (value) {
      case "FRIENDSHIP":
        return "Friendship";
      case "SERIOUS_RELATIONSHIP":
        return "Serious Relationship";
      case "COOKING_BUDDY":
        return "Friendship";
      case "Cooking Buddy":
        return "Friendship";
      case "CASUAL_DATE":
        return "Casual Date";
      case "UNDEFINED":
        return "Anything";
      default:
        return value
    }
  }
}
