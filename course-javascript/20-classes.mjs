class URL {
  constructor(url) {
    console.log('I\'m a super constructor');
  }
}

class Favorite extends URL {
  constructor(title, url) {
    super(url);
    this.title = title;
    this.url = url;
    console.log('I\'m a constructor');
  }

  print() {
    console.log(this.title, this.url)
  }
}

const F1 = new Favorite('foo', 'foo.com');
F1.print();
