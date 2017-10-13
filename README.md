

# Memzy™



### Ed​ ​brodie

#### ​ ​WDI30 PROJECT 1 

## Overview

Memzy™​ ​is​ ​memory​ ​game​ ​in​ ​which​ ​the​ ​user​ ​will​ ​be​ ​presented​ ​with​ ​a​ ​6x3​ ​grid,​ ​totalling​ ​
grid​ ​tiles.​ ​There​ ​will​ ​be​ ​9​ ​pairs​ ​of​ ​symbols/icons​ ​dotted​ ​around​ ​the​ ​grid,​ ​presented​ ​to​ ​the
user​ ​for​ ​approx​ ​5​ ​seconds​ ​before​ ​hiding​ ​behind​ ​their​ ​respective​ ​tile.​ ​The​ ​objective​ ​is​ ​to​ ​use
your​ ​memory​ ​to​ ​pull​ ​out​ ​the​ ​9​ ​pairs​ ​-​ ​incorrectly​ ​turning​ ​over​ ​the​ ​wrong​ ​tiles​ ​will​ ​deduct​ ​
of​ ​your​ ​10 ​lives.

## Goals

To​ ​create​ ​a​ ​visually​ ​attractive​ ​and​ somehwhat ​ ​challenging​ ​memory​ ​game.​ ​Deploying​ ​a​ ​‘less​ ​is
more’​ ​design​ ​philosophy​ ​with​ ​DRY​ ​code​ ​that​ ​is​ ​well​ ​pseudocoded.

## Languages

The​ ​games’​ ​face​ ​will​ ​be​ ​built​ ​in​ ​HTML,​ ​the​ ​games’​ ​brain​ ​will​ ​be​ ​built​ ​in​ ​Javascript​ ​(re​ ​jquery)
and​ ​the​ ​the​ ​games’​ ​styling​ ​and​ ​identity​ ​will​ ​be​ ​build​ ​in​ ​CSS.



## Milestones

### I. Frontier


```
Create​ ​MVP​ ​with​ ​basic​ ​grid​ ​&​ ​basic​ ​symbols.​ ​Allowing​ ​the​ ​user​ ​to​ ​flip​ ​tiles​ ​for
‘matches’​ ​and​ ​have​ ​said​ ​‘matches’​ ​be​ ​disabled​ ​from​ ​future​ ​clicks.​ ​NB​ ​-​ ​MVP​ ​will​ ​not
have​ ​the​ ​following​ ​functions;
```
- Scoreboard
- Lives
- Difficulty​ ​levels
- Timer
- Rich​ ​css​ ​styling


### II. Flourish

```
Implement​ ​rich​ ​CSS​ ​styling​ ​with​ ​a​ ​trendy​ ​color​ ​palette​ ​and​ ​a​ ​smart​ ​‘less​ ​is​ ​more’,​ ​tidy
design.​ ​This​ ​is​ ​a​ ​‘loose​ ​milestone’​ ​that​ ​may​ ​be​ ​deployed​ ​twice:​ ​Once​ ​after​ ​​ Frontier
milestone​ ​and​ ​once​ ​after​ ​​ Serenity​ ​ ​milestone.
```

### III. Homestead

```
Implement​ ​a​ ​​ ‘Lives’​ ​ ​system.​ ​IE​ ​a​ ​system​ ​that​ ​will​ ​track​ ​the​ ​players’​ ​failed​ ​attempts​ ​to
find​ ​a​ ​‘match’​ ​and​ ​log​ ​it​ ​in​ ​a​ ​predefined​ ​position.
```
### IV. Metropolis

```
Implement​ ​a​ ​​ ‘Timer’.​ ​​ This​ ​would​ ​allow​ ​our​ ​expanding​ ​player​ ​base​ ​to​ ​challenge​ ​each
other’s​ ​times​ ​and​ ​see​ ​who​ ​has​ ​the​ ​best​ ​Memzy™
```


### V. Serenity

```
Implement​ ​a​ ​​ ‘Difficulty’​ ​​ system.​ ​Yet​ ​to​ ​be​ ​defined;​ ​first​ ​thoughts​ ​would​ ​be​ ​to
expand​ ​the​ ​grid​ ​by​ ​1​ ​on​ ​both​ ​y​ ​and​ ​x​ ​axis,​ ​making​ ​a​ ​5x5​ ​grid​ ​(25​ ​tiles​ ​total).
```

--------------------------------------------

### Approach taken.

```
I felt like I was struggling a little bit with javascript, so I decided on a game that would be very, very simple to get an MVP working - but one which would also allow had scope for added complexity as I continue to pickup the language. I've googled and entered questions into searchbars more these past couple days than ever before. 
```

### Unsolved problems...

```
I struggled with getting a scoreboard to work that would persist through multiple turns. I also would have liked to have implemented a difficulty system, perhaps speeding up the clock, removing some lives, or expanding the grid.
```

### Instructions
```
  Clicking 'Begin Game!' will give the user a short ammount of time to see the symbols, signalled with the timer, beneath.
  
 When the timer is up the user has 60 seconds and 10 lives to complete the game!
 
 Their job is to reunite the symbols in their pairs until none remain.
 
 ```

