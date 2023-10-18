<template>
  <router-view />
</template>

<style>
/*

  I DONT LIKE VUETIFY.

  I don't like Vuetify at all, the CSS is not good... No CSS3 grid, many unneceessary classes, so many
  so creepy (not talking about optics)...

  Looks like they don't even use `gap`. There is no class, so
  paddings and margins everywhere hard coded sizes, deeply nested DOM structure, the result looks just
  should I add paddings everywhere on a huge amount of items?

  There is also so much calculation and transformations, which is really bad and should only exist
  in the end product and as little as possible!

  I tend to missuse these standard components too much. Wich means there will be features laying around
  and not being used and so on.

  Try to navigate into the source code to see how components are coded... useless.

  Why is this library hyped ... ?

  I'd be better of just writing components on my own. Therefore we have such good frameworks and tools.
  I'd rather want to know the design system and create lean components and CSS with a good framework
  instead of relying on such a library, but maybe there are better ones or this one can somehow
  be worked with properly when taking more time to get into, the resulting CSS will be crap anyways tho.
*/

/* Additional resets - There might be a better way to place it early */
a {
  all: unset;
  cursor: pointer;
}
</style>
