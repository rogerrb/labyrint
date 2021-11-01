scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight0, function (sprite, location) {
    mySprite.sayText(":)")
    music.pewPew.play()
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.floorLight3, function (sprite, location) {
    game.over(false)
    info.stopCountdown()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.dx() != 0 || controller.dy() != 0) {
        music.pewPew.play()
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, controller.dx(10000), controller.dy(10000))
    }
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.floorLight0, function (sprite, location) {
	
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.darkGroundNorthWest0)
    tiles.setWallAt(location, false)
    music.smallCrash.play()
    projectile.destroy(effects.spray, 500)
    projectile.setImage(img`
        . 3 . . . . . . . . . . . 4 . . 
        . 3 3 . . . . . . . . . 4 4 . . 
        . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
        . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
        . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
        . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
        . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
        . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
        . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
        . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
        . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
        . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
        . 4 4 d d 4 d d d 4 3 d d 4 . . 
        . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
        . 4 5 4 . . 4 4 4 . . . 4 4 . . 
        . 4 4 . . . . . . . . . . 4 4 . 
        `)
    controller.vibrate(100)
    projectile.setVelocity(0, 0)
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
let goalx = randint(1, 31)
let goaly = randint(1, 31)
tiles.setTileAt(tiles.getTileLocation(goalx, goaly), sprites.dungeon.floorLight3)
tiles.setWallAt(tiles.getTileLocation(goalx, goaly), false)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
info.startCountdown(120)
mySprite.setBounceOnWall(true)
