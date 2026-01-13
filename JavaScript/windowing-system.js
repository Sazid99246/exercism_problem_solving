// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width
  this.height = height
}

/**
 * Resize the size object
 * @param {Number} newWidth 
 * @param {Number} newHeight 
 */
Size.prototype.resize = function resize(newWidth, newHeight) {
  this.width = newWidth
  this.height = newHeight
}

/**
 * Define a position with x and y coordinates
 * @param {Number} x 
 * @param {Number} y 
 */
export function Position(x = 0, y = 0) {
  this.x = x
  this.y = y
}

/**
 * Move the position to new coordinates
 * @param {Number} newX 
 * @param {Number} newY 
 */
Position.prototype.move = function move(newX, newY) {
  this.x = newX
  this.y = newY
}

/**
 * Define a program window with size and position
 */
export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600)
    this.size = new Size();
    this.position = new Position();
  }

  /**
   * Resize the program window, ensuring it stays within screen bounds
   * @param {Size} newSize 
   */
  resize(newSize) {
    const maxWidth = this.screenSize.width - this.position.x
    const maxHeight = this.screenSize.height - this.position.y

    const newWidth = Math.max(1, Math.min(newSize.width, maxWidth))
    const newHeight = Math.max(1, Math.min(newSize.height, maxHeight))

    this.size.resize(newWidth, newHeight)
  }

  /**
   * Move the program window, ensuring it stays within screen bounds
   * @param {Position} newPosition 
   */
  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;
    
    const newX = Math.max(0, Math.min(newPosition.x, maxX))
    const newY = Math.max(0, Math.min(newPosition.y, maxY))

    this.position.move(newX, newY);
  }
}

/** Modify the program window as specified
 * @param {ProgramWindow} programWindow 
 * @returns {ProgramWindow} the modified program window
 */
export function changeWindow(programWindow) {
  // Move to the top-left corner first so it can always resize
  programWindow.move(new Position())

  // Now resize, then reposition
  programWindow.resize(new Size(400, 300))
  programWindow.move(new Position(100, 150))
  return programWindow
}