class Cookie {
   constructor(color, size) {
      this.color = color
      this.size = size
   }

   getColor() {
      return this.color
   }

   getSize() {
      return this.size
   }

   setColor(color) {
      this.color = color
   }

   setSize(size) {
      return this.size = size
   }

   printCookie() {
      console.log(this.getColor())
      console.log(this.getSize())
   }
}

let smallCookieBlue = new Cookie("Blue", "Small")

smallCookieBlue.printCookie

let largeCookieGreen = new Cookie("Green", "Large")

largeCookieGreen.printCookie