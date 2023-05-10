class URL {
  constructor(url) {
    console.log('I\'m a super constructor: ' + url);
  }
}

class Bookmark extends URL {
  constructor(title, url) {
    super(url);
    console.log('I\'m a constructor: ' + title);
  }
}

const B1 = new Bookmark('foo', 'foo.com');
