Well, getting fonts working was kind of annoying. Mostly because I'm ignorant.

I just wanted Gill Sans Light, like in Keynote. It's supported on most Macs, though I'm sure Windows compatibility will be subpar.

Anyways, [this](http://www.cssfontstack.com/gill-sans) link helped alot.

And [here](https://css-tricks.com/snippets/css/css-font-families/) are relatively web-safe font families (I think).

[Here's](https://css-tricks.com/almanac/properties/f/font-weight/) another link about the `font` attribute.


## Using create-react-app - Friday, December 31, 2016
In honor of WesBos's course that's taught me a lot about React, I've used **create-react-app** to redo the site in React.

My method of putting the new app into Github was pretty coarse - just use `create-react-app new_dir`, then copy and paste all the files inside `new_dir` to the `nasafato.github.io` directory (of course, while switched to a new branch, which I called `reactify`).

I'm sure there's a better way that involves the use of `git <blah blah blah>`, but it's faster for me to do this than to learn how to do it using **git**.

Anyways, I got it working after some tweaking.

I think one of the problems I had was trying to import `{ ReactDOM, render } from 'react-dom'`. Looking at the documentation, I think this was largely because the `render` WesBos imported is the same `render` method in `ReactDOM` itself, so I can't import both of them. I may be wrong, but that's my current guess. Regardless, I got it working.

Anyways, next steps - I need to finish the videos to learn how to put in the things I want. Like some sweet, sweet animations. Though I think I can start on some other webpages.


## Publishing to Pages
**create-react-app** already has methods that let you publish to pages. But they publish to `gh-pages`, and for my personal site, at least, I need to push to `master`. I think because Wes Bos was using an older version of **create-react-app**, they listed out the commands needed:
```
git commit -am "Save local changes"
git checkout -B master
git add -f build
git commit -am "Rebuild website"
git filter-branch -f --prune-empty --subdirectory-filter build
git push -f origin master
git checkout -

```

Whereas for my newer one, all the info it gave me was to install `gh-pages` and then run a deploy script that called it. Which would automatically deploy it to `gh-pages` instead of `master`.

This is definitely not something you'd do with a regular app, since you definitely don't want to just delete everything in master like that. But it's just my personal website.

## Setting up Custom Domain
God, the Github Pages documentation and the Google Domains ones are really not that helpful unless you already know what you need to do.

[This](http://www.curtismlarson.com/blog/2015/04/12/github-pages-google-domains/) and [this](http://blog.christopherkylehorton.com/2015/01/setting-up-my-custom-domain-with-github.html) were much more helpful. Turns out it's simple as all hell. And Christopher Horton used [this](http://www.hongkiat.com/blog/github-with-custom-domain/) tutorial.

Currently, Github Pages's IP Addresses are:
* 192.30.252.153
* 192.30.252.154

```
dig alangou.com +nostats +nocomments +nocmd
dig www.alangou.com +nostats +nocomments +nocmd
```

## Deleting Remote Branches and Local Branches
[This](http://stackoverflow.com/questions/2003505/how-to-delete-a-git-branch-both-locally-and-remotely) StackOverflow post helped.

Basically this:
```
git push origin --delete <branch_name>
git branch -d <branch_name>
```

Apparently, the `git push origin --delete <branch_name>` command is just a more friendly way to do the same thing as `git push origin :<remote_branch_name>`, which is just `git push [remotename] [localbranch]:[remotebranch]` with a void localbranch.

## Inspiration
[This site is sick](http://youngandhungry.co/portfolio).

## Keeping the Website Responsive
Might as well keep Google's [guidelines](https://developers.google.com/web/fundamentals/design-and-ui/responsive/) in mind.

Maybe these are some more sources:
* [Creating a Mobile-first Responsive Web Design](https://www.html5rocks.com/en/mobile/responsivedesign/)

## Making the Header
I just wanted to justify an icon to the left and my initials to the right with flexbox. I wasn't sure how to do this, but I figured it would have something to do with `flex-grow`. As expected, I was lazy and just Googled instead, and lo and behold, [this](http://stackoverflow.com/questions/32540409/css-flexbox-how-do-you-align-child-elements-of-a-flexbox-container-to-opposite?rq=1) StackOverflow post has a solution using a spacer element.

## Line Heights and Web Typography
I'm bad at this. I look at good typography and sigh to myself, because I never can come up with the necessary design on my own. It's really time to start looking at design resources again.

## Menu Sidebar
[This](https://github.com/balloob/react-sidebar/blob/master/src/sidebar.js) looks like some decent inspiration. But I'll try something simpler first.

What I'm thinking - have the `Navbar` component rely on the `menuOn` prop from `App`'s state to figure out when to slide the menu out. Eventually, I want to be able to use CSS transitions to animate the emergence of the sidebar menu.

I think just having it off the canvas by default is good enough. Then, when `menuOn` switches to `true`, I have `translateX(100%) -> translateX(0)` so that it comes back on. I want to overlay opacity over everything else. Also, I'll probably use flexbox, with `flex-direction:column` to make the menu.

Though, I've just realized that **ReactCSSTransitionGroup** only applies to elements entering or leaving the DOM. If I pre-create the navbar and just hide it out of the way, then technically it's not entering or leaving. So I may have to just create it every time the button is toggled on or off.

[Look in these](https://css-tricks.com/almanac/properties/a/animation/).

## Using Transitions - Saturday, December 31, 2016
[Mozilla's stuff](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions).

I think transitions are pretty to understand, actually. Whenever the properties specified for a class in its `transition` property changes, they animate according to some rules. I'll figure out the specifics later, but for now, I know that they're more or less working.


### Z-index
Trickier than getting transition working is getting z-index working. The way I've done it, the Header must be clickable while menu is not on. When it does turn on, the entire page needs to turn opaque (the `cover` div) and the Navbar must slide out. This means that the Header must become unclickable and the cover must hide it.

[Here's](https://css-tricks.com/almanac/properties/z/z-index/) the CSS-Tricks documentation for z-index. And an [article](https://css-tricks.com/rational-z-index-values/) on choosing sensical z-index values.

[Here's](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index) the MDN link.

I should also go back and review the [position](https://developer.mozilla.org/en-US/docs/Web/CSS/position) property.

### Back to Transitions
Now, what I've realized is that `transition` applies to the class you put it in - so the timing means that, when you apply the class `whenActive` to an element, the `transition: opactiy 2s` you specify means that it will take 2 seconds to fully apply the opacity changes specified in that class (the timing of which depends on the transition function you specify as well).

What I've also noticed is that CSS transitions seem to apply too fast when the transition _leaves_. By this, I mean that the Navbar seems to slide in at an appropriate speed (if I specify a 1 second transition, for example). But it seems to leave way too fast. And I've realized that this is because I need to pick a different transition timing function for when the transition leaves.

I also need and `off` class for every `on` class I specify (well, is that necessary?). Actually, no, I don't.

# For Generating Content
[LearnHarmony](https://github.com/BrianGenisio/learnharmony) seems to have a build step for turning Markdown into posts. I may take a look at this.

# January 2, 2016
## Sidebar List
[N-th child](https://css-tricks.com/almanac/selectors/n/nth-child/) for getting margin right.

### Pseudo Selectors
I should also go over [pseudo-selectors](https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-classes).

### React Router
Just realized the current widely-used version of React is version 3. But I've been using version 4.0.0. Guess `create-react-app` wants to push people to use the newest version of React Router (since it's a pretty big change).

[Here's](https://react-router.now.sh/sidebar) some documentation thath helps with v4 of React. Ironically, it's hosted on `now.sh`.

So I was getting confused, because I was trying to figure out how to render parts of the App.js (like MainPage.js) without changing the Header and shit. But I've realized I just need to move the router inside App.js itself ([this](http://rants.broonix.ca/upgrading-to-react-router-v4/) short article made it click for me).