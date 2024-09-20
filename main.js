function backpack(capacity) {
    this.capacity = capacity
    this.opened = false
    this.content = []

    this.addItems = function(item) {
        if(item.size <= this.capacity) {
            this.content.push(item.name)
            this.capacity -= item.size
            console.log("content in backpack: " + sac.content)
            console.log("capacity left: " + sac.capacity)
        }
    }
}

let sac = new backpack(134)
console.log("max capacity: " + sac.capacity)

function items(size, name) {
    this.size = size
    this.name = name
}

let watermelon = new items(118, "watermelon")

let pen = new items(2, "pen")

let apple = new items(13, "apple")



sac.addItems(watermelon)
sac.addItems(pen)
sac.addItems(apple)
