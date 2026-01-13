/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Determines the cooking status of a lasagna based on the remaining time.
 *
 * @param {number} time - The number of minutes left on the timer.
 * @returns {string} A message describing the lasagna's cooking status.
 */
export function cookingStatus(time) {
    if (time === 0) {
        return 'Lasagna is done.';
    } else if (time > 0) {
        return 'Not done, please wait.';
    } else {
        return 'You forgot to set the timer.';
    }
}

/**
 * Calculates the total preparation time for the lasagna.
 *
 * @param {string[]} layers - The list of layers in the lasagna.
 * @param {number} time - The preparation time per layer in minutes.
 *                         Defaults to 2 minutes if not provided.
 * @returns {number} The total preparation time in minutes.
 */
export function preparationTime(layers, time) {
    if (!time) {
        time = 2;
    }

    return layers.length * time;
}

/**
 * Calculates the total quantities of noodles and sauce required.
 *
 * Each "noodles" layer requires 50 grams.
 * Each "sauce" layer requires 0.2 liters.
 *
 * @param {string[]} layers - The list of layers in the lasagna.
 * @returns {{ noodles: number, sauce: number }} The total quantities needed.
 */
export function quantities(layers) {
    let noodles = 0;
    let sauce = 0;

    for (const layer of layers) {
        if (layer === "noodles") {
            noodles += 50;
        } else if (layer === "sauce") {
            sauce += 0.2;
        }
    }

    return { noodles, sauce };
}

/**
 * Adds the secret ingredient from a friend's recipe to your own recipe.
 *
 * The secret ingredient is the last item in the friend's ingredient list.
 *
 * @param {string[]} friendsList - The friend's list of ingredients.
 * @param {string[]} myList - Your list of ingredients (will be modified).
 * @returns {void}
 */
export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
}

/**
 * Scales a recipe from its original size (2 portions) to a new amount.
 *
 * @param {{ [key: string]: number }} recipe - An object mapping ingredient names to quantities.
 * @param {number} amount - The desired number of portions.
 * @returns {{ [key: string]: number }} A new recipe object with scaled quantities.
 */
export function scaleRecipe(recipe, amount) {
    const scaled = {};

    for (const key in recipe) {
        scaled[key] = recipe[key] * amount / 2;
    }

    return scaled;
}
