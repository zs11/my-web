 
function debounce(fn, dealy) {
  var timer = null;
  var isStart = true;
  return function() {
    var context = this;
    var args = arguments;
    if(isStart) {
      fn.apply(context, args);
      isStart = false;
    }
    timer !== null && clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, dealy);
  }
}


function throttle(fn, delay) {
  var start = 0;
  return function() {
    var context = this;
    var args = arguments;
    var now = Data.now();
    if(now - start >= delay) {
      fn.apply(context, args);
      start = Data.now();
    }
  }
}

function throttle(fn, delay) {
  var timer = null;
  return function() {
    var context = this;
    var args = arguments;
    if(!timer) {
      timer = setTimeout(function() {
        fn.apply(context, args);
        timer = null;
      }, delay); 
    }
  }
}


function throttle(fn, delay) {
  var start = Date.now();
  var timer = null;
  return function() {
    var context = this;
    var args = arguments;
    var now = Date.now();
    timer !== null && clearTimeout(timer);
    if(now - start >= delay) {
      fn.apply(context, args);
      start = Date.now();
    } else {
      timer = setTimeout(fn, delay);
    }
  }
}


var myIamge = (function() {
  var imgNode = document.createElement('img');
  document.appendChild(imgNode);
  return {
    setSrc: function(src) {
      imgNode.src = src;
    }
  }
})();

var proxyImage = (function() {
  var img = new Image();
  img.onload = function() {
    myIamge.setSrc(this.src);
  }
  return {
    setSrc: function(src) {
      myIamge.setSrc('./loading.png');
      img.src = src;
    }
  }
})();


function multAdd() {
  var res = 0;
  for(var i=0;i<arguments.length;i++) {
    res += arguments[i];
  }
  return res;
}

function proxyMultAdd() {
  var cache = {};
  return function() {
    var args = Array.prototype.join.call(arguments, ',');
    if(args in cache) {
      return cache[args];
    }
    return cache[args] = multAdd.apply(this, arguments);
  }
}


function Subject() {
  this.observers = [];
}

Subject.prototype.add = function(observer) {
  this.observers.push(observer);
}

Subject.prototype.remove = function(observer) {
  var observers = this.observers;
  for(let i=0;i<observers.length;i++) {
    observers[i] === observer && observers.splice(i,1);
  }
}

Subject.prototype.notify = function() {
  this.observers.forEach(observer => observer.update());
}


function Observer(name) {
  this.name = name;
}

Observer.prototype.update = function() {
  console.log(this.name + 'is updated');
}


var pubSubject = {
  subjects: {},
  subscribe: function(subject, fn) {
    if(!this.subjects[subject]) {
      this.subjects[subject] = [];
    }
    this.subjects[subject].push(fn);
    console.log(this.subjects[subject])
  },
  unSubscribe: function(subject) {
    delete this.subjects[subject];
  },
  publish: function() {
    var args = arguments;
    var subject = Array.prototype.shift.call(args);
    console.log(subject, this.subjects[subject]);
    var fns = this.subjects[subject];
    if(!fns || fns.length <= 0) {
      return false;
    }
    fns.forEach(fn => {
      fn.apply(this, args);
    })
  }
}

pubSubject.subscribe('name', (name) => {
  console.log(name);
})

pubSubject.subscribe('sex', (sex) => {
  console.log(sex);
})

pubSubject.publish('name', 'summer')
pubSubject.publish('sex', 'man')

