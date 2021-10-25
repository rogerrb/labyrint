scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight0, function (sprite, location) {
    mySprite.sayText(":)")
    music.pewPew.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 4 4 4 4 4 . . . . . . 
            . . . 4 4 4 5 5 5 d 4 4 4 4 . . 
            . . 4 d 5 d 5 5 5 d d d 4 4 . . 
            . . 4 5 5 1 1 1 d d 5 5 5 4 . . 
            . 4 5 5 5 1 1 1 5 1 1 5 5 4 4 . 
            . 4 d d 1 1 5 5 5 1 1 5 5 d 4 . 
            . 4 5 5 1 1 5 1 1 5 5 d d d 4 . 
            . 2 5 5 5 d 1 1 1 5 1 1 5 5 2 . 
            . 2 d 5 5 d 1 1 1 5 1 1 5 5 2 . 
            . . 2 4 d d 5 5 5 5 d d 5 4 . . 
            . . . 2 2 4 d 5 5 d d 4 4 . . . 
            . . 2 2 2 2 2 4 4 4 2 2 2 . . . 
            . . . 2 2 4 4 4 4 4 4 2 2 . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            `, mySprite, controller.dx(100), controller.dy(100))
    }
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.floorLight0, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.darkGroundNorthWest0)
    tiles.setWallAt(location, false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight3, function (sprite, location) {
    game.over(true)
    info.stopCountdown()
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . 3 . . 3 . . . . . . 
    . . . . . . 3 . 3 3 . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . 3 3 3 . 3 . 3 3 . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . 3 3 . . 3 . . . . . . 
    . . . . 3 3 . . . 3 3 . . . . . 
    . . . . 3 . . . . . 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
info.startCountdown(120)
mySprite.setBounceOnWall(true)
