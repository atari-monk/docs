"use strict";
class TextToHtmlConverter {
    static convertToHtml(text) {
        const lines = text.split('\n');
        let html = '';
        for (const line of lines) {
            if (line.trim().startsWith('**')) {
                // Convert **bold** text to <strong>bold</strong>
                const boldText = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                html += boldText + '<br>';
            }
            else if (line.trim().startsWith('- ')) {
                // Convert bullet points to an unordered list (ul)
                const listItem = line.replace(/- (.*?)(<br>)?/g, '<li>$1</li>');
                html += `<ul>${listItem}</ul>`;
            }
            else if (line.trim().match(/^\d+\. /)) {
                // Convert numbered lists to an ordered list (ol)
                const listItem = line.replace(/(\d+)\. (.*?)(<br>)?/g, '<li>$2</li>');
                html += `<ol>${listItem}</ol>`;
            }
            else {
                html += `${line}<br>`;
            }
        }
        return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Pancake Recipe</title>
      </head>
      <body>
        <h1>Pancake Recipe</h1>
        <p>${html}</p>
      </body>
      </html>
    `;
    }
}
const pancakeRecipe = `
Certainly! Here's a simple pancake recipe for you:

**Ingredients:**
- 1 cup all-purpose flour
- 2 tablespoons sugar
- 2 teaspoons baking powder
- 1/2 teaspoon salt
- 1 cup milk
- 1 egg
- 2 tablespoons melted butter or vegetable oil
- 1/2 teaspoon vanilla extract (optional)
- Butter or oil for cooking

**Instructions:**

1. **Mix Dry Ingredients:** In a mixing bowl, whisk together the flour, sugar, baking powder, and salt.

2. **Combine Wet Ingredients:** In a separate bowl, whisk together the milk, egg, melted butter or oil, and vanilla extract if using.

3. **Combine Wet and Dry:** Pour the wet ingredients into the dry ingredients and stir until just combined. It's okay if there are a few lumps; overmixing can make the pancakes tough.

4. **Preheat Griddle or Pan:** Heat a non-stick skillet or griddle over medium-high heat. You can add a small amount of butter or oil to grease the surface if needed.

5. **Cook the Pancakes:** Pour 1/4 cup of batter onto the hot griddle for each pancake. Cook until bubbles form on the surface and the edges look set, usually around 2-3 minutes.

6. **Flip and Cook:** Flip the pancake and cook the other side for another 1-2 minutes or until it's golden brown.

7. **Serve:** Serve the pancakes warm with your favorite toppings, such as maple syrup, fresh berries, chocolate chips, or whipped cream.

Enjoy your homemade pancakes!
`;
const htmlRecipe = TextToHtmlConverter.convertToHtml(pancakeRecipe);
console.log(htmlRecipe);
