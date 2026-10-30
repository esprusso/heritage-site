const previewParams = new URLSearchParams(window.location.search);
if (previewParams.has('capture')) document.querySelector('.review-tools')?.setAttribute('hidden', '');

const filterButtons = document.querySelectorAll('[data-filter]');
for (const button of filterButtons) {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    for (const other of filterButtons) other.setAttribute('aria-pressed', String(other === button));
    for (const story of document.querySelectorAll('[data-topic]')) story.hidden = filter !== 'all' && story.dataset.topic !== filter;
  });
}

// Illustrative stories let the proposed article layout be explored from the homepage mockups.
const sampleStories = {
  portrait: {
    title: 'The person beyond the pose',
    deck: 'The best part of a portrait session is usually the moment we stop trying so hard.',
    topic: 'Creativity',
    time: '5 min read',
    opening: [
      'Sometimes the photograph I like best happens between the photographs we planned. A shoulder drops. Somebody laughs at something that was only a little funny. For a second, the camera is just another thing in the room.',
      'There is a particular kind of concentration that comes with being photographed. You start thinking about where your hands are, what your face is doing, whether you look like the person you imagine you are supposed to be.',
      'My favorite part is when we can set a little of that down.'
    ],
    sections: [
      ['A conversation, first', 'A good portrait session has more in common with a conversation than a performance. There is listening involved. Some patience. A willingness to follow an idea neither of us arrived with.', 'I can figure out the light. I can move a chair. But the part that makes a photograph feel alive usually comes from paying attention to the person in front of me.'],
      ['Room to be a person', 'I am less interested in a perfect pose than in the moment someone feels comfortable enough to stop checking every small thing. That does not mean the work disappears. It means the work makes room.', 'The photograph is something we make together. My job is to notice what is already there, and to make a little space for it to show up.'],
      ['The part I remember', 'After the light stands are folded and the images are put away, I usually remember a conversation. A small kindness. The strange thing we both found funny.', 'If some of that makes it into the photograph, I think we have made something worth keeping.']
    ],
    quote: 'A portrait is one way of saying: I see you.'
  },
  room: {
    title: 'Learning to leave a little room',
    deck: 'For the unplanned conversation. The long way home. The things that do not fit on a list.',
    topic: 'Everyday life',
    time: '4 min read',
    opening: [
      'Lately I have been trying to leave a little space in the day. Not a grand, life-changing amount. Just enough that a small interruption does not immediately feel like something going wrong.',
      'It turns out a lot of the things I like best about being alive arrive as interruptions. A conversation that runs longer than expected. The light doing something interesting on an otherwise ordinary street.',
      'I would like to be available for more of those things.'
    ],
    sections: [
      ['The unplanned part', 'There are days when I get through every task I meant to do and cannot remember much about the day itself. There are other days when almost nothing goes to plan, and one small moment stays with me for weeks.', 'I am not proposing we abandon our calendars. I am just wondering what happens when we stop asking every hour to justify itself.'],
      ['A little breathing space', 'Making a photograph has taught me that the empty part of a frame matters. It gives everything else a place to exist. Maybe a day works a little like that, too.', 'So I am trying to leave some of the frame empty. To take a walk without turning it into another thing to measure. To let an interesting thought remain unfinished for a while.'],
      ['Enough for today', 'I do not have a system for any of this. I am still learning to notice when I have filled every available corner. But sometimes noticing is enough to make a different choice.', 'Today, that might be taking the long way home.']
    ],
    quote: 'The things that matter do not always arrive on schedule.'
  },
  local: {
    title: 'The people who keep showing up',
    deck: 'Some thoughts from Minnesota on neighbors, small kindnesses, and taking care of each other.',
    topic: 'Community',
    time: '4 min read',
    opening: [
      'There are days when the news makes the world feel impossibly large. More than I can understand. More than any one person could know how to help. On those days, I try to look a little closer to home.',
      'Not because the larger things do not matter. Because the people right in front of us matter, too.',
      'A neighbor checking in. Someone offering a ride. A meal left at a door. Ordinary things, done by ordinary people who decided to show up.'
    ],
    sections: [
      ['Close enough to care', 'It is easy to think of community as an idea. Something to believe in or talk about. But most of the time it looks like a fairly practical question: what does this person need, and can I help?', 'The answer is not always dramatic. Sometimes the useful thing is also the small thing.'],
      ['Paying attention', 'Living somewhere means more than sharing a place on a map. It means noticing the people whose days overlap with yours. Learning a name. Remembering to ask how something went.', 'I am trying to get better at that kind of attention. The kind that asks something of me after I have noticed.'],
      ['Keep showing up', 'I do not think there is a neat ending to a thought like this. Taking care of each other is not a thing we finish. It is something we come back to.', 'I am grateful for the people who keep reminding me what that looks like.']
    ],
    quote: 'A place becomes a community in the ways we take care of each other.'
  },
  '1999': {
    title: "Make something like it’s 1999",
    deck: 'What if we made things just because we wanted them to exist?',
    topic: 'Culture & the internet',
    time: '5 min read',
    opening: [
      'Recently I found myself making a small thing that absolutely did not need to exist. It was a modern interpretation of an old way of writing online. A little inconvenient. A little nostalgic. Very much my kind of thing.',
      'Somewhere in the middle of working on it, I realized how long it had been since I made something without wondering what it was for.',
      'The answer, this time, was that I wanted to use it. That felt surprisingly good.'
    ],
    sections: [
      ['Before everything was a product', 'I remember an internet full of little things people made because they were interested. Websites for a very specific enthusiasm. Programs that solved a problem three people had. Personal journals that looked like the inside of somebody’s head.', 'They were not all good. That was part of what made it feel possible to join in.'],
      ['A reason of your own', 'I like useful things. I also like the idea that useful does not have to mean useful to everyone. Sometimes something earns its place by making one person’s afternoon a little better.', 'A creative project can be a conversation with your own curiosity. It does not always need an audience waiting at the other end.'],
      ['Make the little thing', 'So this is a small argument for making the thing you keep thinking about. The strange thing. The impractical thing. The one that is probably too specific to explain quickly.', 'You do not have to turn it into anything else. You can just let it exist.']
    ],
    quote: 'Wanting something to exist can be a good enough reason to make it.'
  }
};

const sample = sampleStories[previewParams.get('story')];
const articleCopy = document.getElementById('article-copy');
if (sample && articleCopy) {
  document.getElementById('article-title').textContent = sample.title;
  document.getElementById('article-deck').textContent = sample.deck;
  document.getElementById('article-topic').textContent = sample.topic;
  document.getElementById('article-time').textContent = sample.time;
  document.title = sample.title + ' · Russ Heritage mockup';
  const fragment = document.createDocumentFragment();
  function paragraph(text, className) {
    const p = document.createElement('p');
    p.textContent = text;
    if (className) p.className = className;
    fragment.append(p);
  }
  sample.opening.forEach((text, i) => paragraph(text, i === 0 ? 'opening' : ''));
  const contents = document.getElementById('article-contents');
  contents.replaceChildren();
  sample.sections.forEach((section, i) => {
    const id = ['section-one', 'section-two', 'section-three'][i];
    const h2 = document.createElement('h2');
    h2.id = id;
    h2.textContent = section[0];
    fragment.append(h2);
    section.slice(1).forEach(text => paragraph(text));
    if (i === 0) {
      const quote = document.createElement('blockquote');
      quote.textContent = sample.quote;
      fragment.append(quote);
    }
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#' + id;
    link.textContent = section[0];
    item.append(link);
    contents.append(item);
  });
  articleCopy.replaceChildren(fragment);
}
